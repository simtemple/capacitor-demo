import React from 'react';
import StorageService from '../storage';

class StorageTest extends React.Component {
  constructor(props) {
    super(props);
    this.setStorage = this.setStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
  }
  setStorage() {
    const val = Math.floor(Math.random()*10000).toString();
    this.setField.value = `Pending: ${val}`;
    StorageService.setItem('storage-test', val)
      .then((res) => {
        this.setField.value = `Fulfilled: ${val}`;
      }).catch((err) => {
        this.setField.value = `Rejected: ${val}`;
      });
  }
  getStorage() {
    StorageService.getItem('storage-test').then((val) => {
      this.getField.value = `Fulfilled: ${val}`;
    });
  }
  render() {
    return (
      <div className="w-100">
        <div className="input-group mb-4">
          <div className="input-group-prepend" onClick={this.setStorage}>
            <span className="input-group-text">Set Value</span>
          </div>
          <input
            type="text"
            ref={(ref) => { this.setField = ref; }}
            defaultValue="Nothing set"
            className="form-control"
            disabled
          />
        </div>
            
        <div className="input-group">
          <div className="input-group-prepend" onClick={this.getStorage}>
            <span className="input-group-text">Get Value</span>
          </div>
          <input
            type="text"
            ref={(ref) => { this.getField = ref; }}
            defaultValue="Nothing got"
            className="form-control"
            disabled
          />
        </div>
      </div>
    );
  }
}

export default StorageTest;
