import React, { Component} from 'react';
import banner from '../../images/bannerInvertColor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './Top.css';

class Top extends Component {
  render() {
    return(
      <div className="banner">
        <span className="top-membership">
          <FontAwesomeIcon icon={faBarcode}></FontAwesomeIcon>
        </span>
       
        <a href="/"><img src={banner} title='메가박스 메인으로' alt='메가박스 메인으로'/></a>
       
        <span className="top-user">
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          <FontAwesomeIcon 
            icon={faBars}
            onClick={function() {
              var rightSideBar = document.getElementsByClassName('right-side-bar')[0];
              var overLay = document.getElementsByClassName('overLay')[0];
              rightSideBar.style.width='calc(320px)';
              overLay.style.display="block";
            }}
          ></FontAwesomeIcon>
       </span>
      </div>
   );
 }
}

export default Top;
