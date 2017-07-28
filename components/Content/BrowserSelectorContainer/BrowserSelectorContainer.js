import React, { PropTypes } from 'react';
import BrowserSelector from './BrowserSelector';
import RaisedButton from 'material-ui/RaisedButton';

class BrowserSelectorContainer extends React.Component {
  static propTypes = {
    onAddBrowser: PropTypes.func.isRequired,
    onUpdateBrowser: PropTypes.func.isRequired,
    browsers: PropTypes.object.isRequired,
    usageInput: PropTypes.array.isRequired,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  emitAddBrowserEvent = () => {
    this.props.onAddBrowser();
  }

  emitUpdateBrowserEvent = (index) => (value) => {
    this.props.onUpdateBrowser(index, value);
  }

  render() {
    console.log(this.props);
    const selectors = [];
    for (let i = 0; i < this.props.usageInput.length; i++) {
      selectors.push(<BrowserSelector
        browsers={this.props.browsers}
        onUpdateBrowser={this.emitUpdateBrowserEvent(i)}
        usageInput={this.props.usageInput[i]}
        key={i}
      />);
    }
    return (
      <div>
        {selectors}
        <br />
        <RaisedButton className="" onClick={this.emitAddBrowserEvent} label="Add browser" />
      </div>
    );
  }
}

export default BrowserSelectorContainer;
