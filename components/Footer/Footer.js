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
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';

function Footer() {
  return (
    <footer className="footer">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="MIT" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Credits" />
            caniuse.com,
            React Static Boilerplate
        </ToolbarGroup>
      </Toolbar>
    </footer>
  );
}

export default Footer;
