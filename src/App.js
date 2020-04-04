import React, { Component} from 'react';
import Top from './Component/Top/Top'
import RightSideBar from './Component/RightSideBar/RightSideBar'
import Bottom from './Component/BottomMenu/Bottom'
import './App.css';

class App extends Component {
 render() {
   return(
    <div>
      <div className="overLay" onClick={
        function() {
          var rightSideBar = document.getElementsByClassName('right-side-bar')[0];
          var overLay = document.getElementsByClassName('overLay')[0];
          rightSideBar.style.width='0px';
          overLay.style.display="none";
        }
      }></div>
      <Top></Top>
      <RightSideBar></RightSideBar>
      <Bottom></Bottom>
    </div>
   );
 }
}

export default App;
