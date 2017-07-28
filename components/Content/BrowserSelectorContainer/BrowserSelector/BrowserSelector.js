import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import styles from './styles.css';

class BrowserSelector extends React.Component {
  static propTypes = {
    browsers: PropTypes.object.isRequired,
    usageInput: PropTypes.object.isRequired,
    onUpdateBrowser: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.browserNames = Object.keys(this.props.browsers);
    this.browserMenuItems = [];
    this.getBrowserMenuItems(this.browserNames);
    this.browserUsageInfo = this.props.usageInput;
    if (!this.browserVersionMenuItems) {
      this.browserVersionMenuItems = [];
    }
  }

  componentWillUnmount() {}

  getBrowserMenuItems(browserNames) {
    browserNames.forEach((item, i) => {
      this
        .browserMenuItems
        .push(<MenuItem key={i} value={item} primaryText={item} />);
    }, this);
  }

  updateBrowserVersionMenuItems(value) {
    this.browserVersionMenuItems.length = 0;
    if (value) {
      this
        .props
        .browsers[value]
        .released
        .forEach((item, i) => {
          this
            .browserVersionMenuItems
            .push(<MenuItem key={i} value={item} primaryText={item} />);
        }, this);
    } else {
      this
        .browserVersionMenuItems
        .push(<MenuItem key={0} value={0} primaryText="Select a browser first" />);
    }
  }

  handleChange = (proxy, index, value) => {
    this.browserUsageInfo.browserValue = value;
    console.log('changed', this.browserUsageInfo);
    this
      .props
      .onUpdateBrowser(this.browserUsageInfo);
    this.updateBrowserVersionMenuItems(value);
  }

  handleBrowserVersionChange = (proxy, index, value) => {
    this.browserUsageInfo.browserVersion = value;
    console.log('changed version', this.browserUsageInfo);
    this
      .props
      .onUpdateBrowser(this.browserUsageInfo);
  }

  handleUserShareChange = (proxy, value) => {
    this.browserUsageInfo.userShare = value;
    console.log('changed text', this.browserUsageInfo);
    this
      .props
      .onUpdateBrowser(this.browserUsageInfo);
  }

  render() {
    return (
      <div>
        <SelectField
          style={{ width: '35%' }}
          value={this.browserUsageInfo.browserValue}
          onChange={this.handleChange}
          floatingLabelText="Browser Name"
        >
          {this.browserMenuItems}
        </SelectField>
        <SelectField
          style={{ width: '35%' }}
          className={`${styles.versionInput}`}
          value={this.browserUsageInfo.browserVersion}
          onChange={this.handleBrowserVersionChange}
          floatingLabelText="Browser Version"
        >
          {this.browserVersionMenuItems}
        </SelectField>
        <TextField
          style={{ width: '15%' }}
          className={`${styles.userShareInput}`}
          min="0"
          max="100"
          type="number"
          onChange={this.handleUserShareChange}
          floatingLabelText="User Share %"
          value={this.browserUsageInfo.userShare}
        />
      </div>
    );
  }
}

export default BrowserSelector;
