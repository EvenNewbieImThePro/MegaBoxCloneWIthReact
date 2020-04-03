import React, { Component} from 'react';
import banner from '../../images/bannerInvertColor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faBell, faBars
 } from '@fortawesome/free-solid-svg-icons';
import './Top.css';

class Top extends Component {
 render() {
   return(
     <top>
       <span className="top-membership" >
         <FontAwesomeIcon icon={faBarcode}></FontAwesomeIcon>
        </span>
      
      <img src={banner} alt={'메가박스 메인으로'}/>
      
      <span className="top-user">
        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </span>
     </top>
   );
 }
}

export default Top;
