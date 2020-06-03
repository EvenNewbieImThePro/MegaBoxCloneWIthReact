import React, { Component} from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import Top from './Component/Top/Top'
import RightSideBar from './Component/RightSideBar/RightSideBar'
import Bottom from './Component/BottomMenu/Bottom'
import Movie from './Component/Content/01.Movie/Movie';
import Store from './Component/Content/02.Store/Store';
import Ticketing from './Component/Content/03.Ticketing/Ticketing';
import Event from './Component/Content/04.Event/Event';
import MY from './Component/Content/05.MY/MY';
import NotFound from './Component/NotFound';
import './App.css';
import LoginPage from './Component/LoginPage/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Movie',
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.mode !== this.state.mode) {
      return true;
    }
    else return false;
  };


  viewMode() {
    if(this.state.mode==='Movie') {
      var article = <Movie></Movie>
    }
    else if(this.state.mode==='Store') {
      article = <Store></Store>
    }
    else if(this.state.mode==='Ticketing') {
      article = <Ticketing></Ticketing>
    }
    else if(this.state.mode==='Event') {
      article = <Event></Event>
    }
    else if(this.state.mode==='MY') {
      article = <MY></MY>
    }
    return article;
  }


  render() {
    console.log('render');
    return(
      <Router>
        <div>
          <div className="overLay"  
            onClick={function() {
              var rightSideBar = document.getElementsByClassName('right-side-bar')[0];
              var overLay = document.getElementsByClassName('overLay')[0];
              rightSideBar.style.width='0px';
              overLay.style.display="none";
            }}
          ></div>
          <Top></Top>
          
          <RightSideBar></RightSideBar>
          
          <Bottom
            onChangeView={function(data) {
              this.setState({ mode: data })
            }.bind(this)}
          ></Bottom>
          
          <Switch>
            <Route exact path='/' component={Movie}/>
            <Route path='/event' component={Store}/>
            <Route path='/ticketing' component={Ticketing}/>
            <Route path='/store' component={Store}/>
            <Route path='/my' component={MY}/>
            <Route path='/login' component={LoginPage}/>
            <Route component={NotFound}/>
          </Switch>
          
          {/* {this.viewMode()} */}
        </div>
      </Router>
   );
  }
}

export default App;
