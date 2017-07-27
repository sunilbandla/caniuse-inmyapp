import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './styles.css';
import { features, getSupport } from 'caniuse-api';
import { data } from 'browserslist';
import BrowserSelectorContainer from './BrowserSelectorContainer';
import FlatButton from 'material-ui/FlatButton';
import { updateFeatureQueryAction } from '../../core/store';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    console.log(data);
    console.log(getSupport("async-functions"));
  }

  componentWillUnmount() {
  }

  clicked = () => {
    console.log('clicked', event);
    this.props.dispatch(updateFeatureQueryAction("cow"));
  }

  render() {
    console.log(this.props);
    return (
      <div className="">
        <FlatButton onClick={this.clicked} label="test" />
        <BrowserSelectorContainer browsers={data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'st');
  const { usageInput, featureQuery } = state || {
    usageInput: [],
    featureQuery: '',
  };
  console.log(usageInput, featureQuery);
  return {
    usageInput,
    featureQuery,
  };
}

export default connect(mapStateToProps)(Content);
// export default Content;
