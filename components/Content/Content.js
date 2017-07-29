import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './styles.css';
import { features, getSupport, find } from 'caniuse-api';
import { data } from 'browserslist';
import BrowserSelectorContainer from './BrowserSelectorContainer';
import { updateResultStatsAction, updateErrorMessageAction, updateFeatureQueryAction,
   addBrowserAction, updateBrowserAction }
 from '../../core/store';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import { List, ListItem } from 'material-ui/List';
import { colors } from 'material-ui/styles';

class Content extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    featureQuery: PropTypes.string,
    errorMessage: PropTypes.string,
    usageInput: PropTypes.array,
    resultStats: PropTypes.object,
  };

  componentWillMount() {
    this.supportedStyle = {
      style: { color: colors.green500 },
    };
    this.notSupportedStyle = {
      style: { color: colors.red500 },
    };
  }

  componentWillUnmount() {
  }

  onAddBrowser = () => {
    this.props.dispatch(addBrowserAction());
  }

  onUpdateBrowser = (index, value) => {
    this.props.dispatch(updateErrorMessageAction(''));
    this.props.dispatch(updateBrowserAction(index, value));
  }

  onGetStats = () => {
    this.props.dispatch(updateErrorMessageAction(''));
    const featureMatches = find(this.props.featureQuery);
    if (!this.props.featureQuery || Array.isArray(featureMatches)) {
      this.props.dispatch(updateErrorMessageAction('Please select a feature from the provided list.'));
      return;
    }
    const sharesTotal = this.props.usageInput.reduce((prev, curr) => prev + parseInt(curr.userShare, 10), 0);
    if (sharesTotal > 100) {
      this.props.dispatch(updateErrorMessageAction('Please ensure user share total is <= 100.'));
      return;
    }
    const support = getSupport(this.props.featureQuery);
    let yes = 0;
    let no = 0;
    for (let i = 0; i < this.props.usageInput.length; i++) {
      const version = parseFloat(this.props.usageInput[i].browserVersion, 10);
      const share = parseFloat(this.props.usageInput[i].userShare, 10);
      console.log(this.props.usageInput[i], version, share);
      if (!version || !this.props.usageInput[i].browserValue) {
        continue;
      }
      const currBrowserSupport = support[this.props.usageInput[i].browserValue];
      if (currBrowserSupport && currBrowserSupport.y <= version) {
        yes += share;
      } else {
        no += share;
      }
    }
    this.props.dispatch(updateResultStatsAction({
      yes,
      no,
    }));
    if (yes + no === 0) {
      this.props.dispatch(updateErrorMessageAction('Please ensure browser & user share values are valid.'));
    }
  }

  handleFeatureQueryChange = (value) => {
    this.props.dispatch(updateErrorMessageAction(''));
    this.props.dispatch(updateFeatureQueryAction(value));
  }

  render() {
    let openSnack = false;
    if (this.props.errorMessage) {
      openSnack = true;
    }
    let displayResults = '';
    if (this.props.resultStats.yes > 0 || this.props.resultStats.no > 0) {
      displayResults = (
        <List style={{ width: '50%' }}>
          <h2>Results:</h2>
          <ListItem {...this.supportedStyle} primaryText={`Supported for ${this.props.resultStats.yes}%`} />
          <ListItem {...this.notSupportedStyle} primaryText={`Not supported for ${this.props.resultStats.no}%`} />
        </List>
      );
    }
    return (
      <div>
        <BrowserSelectorContainer
          browsers={data}
          onAddBrowser={this.onAddBrowser}
          onAddBrowser={this.onAddBrowser}
          onUpdateBrowser={this.onUpdateBrowser}
          usageInput={this.props.usageInput}
        />
        <br />
        <AutoComplete
          dataSource={features}
          onUpdateInput={this.handleFeatureQueryChange}
          floatingLabelText="Type the name of a feature"
          value={this.props.featureQuery}
        />
        <br />
        <br />
        <br />
        <RaisedButton
          primary onClick={this.onGetStats} label="Get feature support results"
        />
        <Snackbar
          open={openSnack}
          message={this.props.errorMessage}
        />
        <br /><br />
        {displayResults}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ... props } = state || {
    usageInput: [],
    featureQuery: '',
    errorMessage: '',
    resultStats: {
      yes: 0,
      no: 0,
    },
  };
  return {
    ... props,
  };
}

export default connect(mapStateToProps)(Content);
