import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';
import { features, getSupport } from 'caniuse-api';
import { data } from 'browserslist';

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

  render() {
    return (
      <div className="">
        <div className="">
            Content
        </div>
      </div>
    );
  }
}

export default Content;
