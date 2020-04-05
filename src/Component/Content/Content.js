import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import './Content.css';

class HashTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return(
      <div>
      </div>
    );
 }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.selected === this.state.selected) {
      return false;
    }
    else return true;
  };
  render() {
    return(
      <div  className="content">
        <HashTags></HashTags>
      </div>
    );
 }
}
export default Content;
