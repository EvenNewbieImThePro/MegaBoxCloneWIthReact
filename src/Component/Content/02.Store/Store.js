import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import './Store.css';
import LoginPage from '../../LoginPage/Login';

class StoreTop extends Component {
  render() {
    return(
      <div>
          store top
      </div>
    );
  }
}
class StoreEvent extends Component {
  render() {
    return(
      <div>
        store event
      </div>
    );
  }
}

class StoreList extends Component {
  render() {
    return(
      <div>
        store list
      </div>
    );
  }
}

class StoreTap extends Component {
  render() {
    return(
      <div className="content">
        <StoreTop></StoreTop>
        <StoreEvent></StoreEvent>
        <StoreList></StoreList>     
      </div>
    );
  }
}

export default StoreTap;
