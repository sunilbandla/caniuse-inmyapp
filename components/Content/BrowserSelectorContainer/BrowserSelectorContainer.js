import React, { PropTypes } from 'react';
import BrowserSelector from './BrowserSelector/BrowserSelector';

class BrowserSelectorContainer extends React.Component {
  static propTypes = {
    browsers: PropTypes.object.isRequired,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    console.log(this.props);
    const selectors = [];
    for (let i = 0; i < 1; i++) {
      selectors.push(<BrowserSelector browsers={this.props.browsers} value="ie" key={i} />);
    }
    return (
      <div>
        {selectors}
      </div>
    );
  }
}

export default BrowserSelectorContainer;
