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
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import s from './styles.css';

class HomePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <Layout className={s.content}>
        <br />
        <br />
        <strong>Get the % of your app users that will benefit from a web feature.</strong>
        <p>
          Set the user share per browser version and select a feature to get started.
        </p>
        <br />
        <Content />
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
