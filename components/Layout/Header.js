/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import s from './Header.css';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header}`}>
        <AppBar
          title="Can I Use - In My App"
          showMenuIconButton={false}
        />
      </header>
    );
  }

}

export default Header;
