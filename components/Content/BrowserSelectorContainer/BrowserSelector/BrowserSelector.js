import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class BrowserSelector extends React.Component {
  static propTypes = {
    browsers: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
  };

  componentWillMount() {
    this.browserNames = Object.keys(this.props.browsers);
    this.browserMenuItems = [];
    this.getBrowserMenuItems(this.browserNames);
  }

  componentWillUnmount() {
  }

  getBrowserMenuItems(browserNames) {
    browserNames.forEach((item, i) => {
      this.browserMenuItems.push(<MenuItem key={i} value={item} primaryText={item} />);
    }, this);
  }

  handleChange(proxy, index, value) {
      console.log("change", value);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <SelectField
          value={this.props.value}
          onChange={this.handleChange}
          hintText="Browser Name"
        >
            {this.browserMenuItems}
        </SelectField>
      </div>
    );
  }
}

export default BrowserSelector;
