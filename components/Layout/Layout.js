/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <Header />
        <main>
          <div {...this.props} className={cx(s.content, this.props.className)}>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Layout;
