import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
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

export default Layout;
