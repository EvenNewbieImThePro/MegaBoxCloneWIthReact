import React, { Component} from 'react';
import banner from '../../images/bannerInvertColor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTape, faShoppingBag, faTicketAlt, faGift, faUser
 } from '@fortawesome/free-solid-svg-icons';
import './Bottom.css';

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {key:1, icon: faTape, desc:"영화"},
        {key:2, icon: faShoppingBag, desc:"스토어"},
        {key:3, icon: faTicketAlt, desc:"예매"},
        {key:4, icon: faGift, desc:"이벤트"},
        {key:5, icon: faUser, desc:"MY"},
      ]
    }
  }
  render() {
    return(
      <div className="bottom">
        {this.state.list.map((data) => {
          return(
            <div key={data.key}>
              <FontAwesomeIcon icon={data.icon}/><br/>
              <span>{data.desc}</span>
            </div>
          );
        })}
      </div>
    );
 }
}

export default Bottom;
