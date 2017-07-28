import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './styles.css';
import { features, getSupport } from 'caniuse-api';
import { data } from 'browserslist';
import BrowserSelectorContainer from './BrowserSelectorContainer';
import { updateFeatureQueryAction, addBrowserAction, updateBrowserAction } from '../../core/store';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

class Content extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    featureQuery: PropTypes.string,
    usageInput: PropTypes.array,
  };

  componentWillMount() {
    console.log(getSupport('async-functions'));
  }

  componentWillUnmount() {
  }

  handleFeatureQueryChange = (value) => {
    this.props.dispatch(updateFeatureQueryAction(value));
  }

  onAddBrowser = () => {
    this.props.dispatch(addBrowserAction());
  }

  onUpdateBrowser = (index, value) => {
    console.log('on update br', index, value);
    this.props.dispatch(updateBrowserAction(index, value));
  }

  onGetStats = () => {
    console.log("on get stats", this.props);
  }

  render() {
    return (
      <div className="">
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
        <RaisedButton primary onClick={this.onGetStats} label="Get feature support stats" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { usageInput, featureQuery } = state || {
    usageInput: [],
    featureQuery: '',
  };
  return {
    usageInput,
    featureQuery,
  };
}

export default connect(mapStateToProps)(Content);
