import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, BrowserRouter } from 'react-router-dom'
import { faTape, faShoppingBag, faTicketAlt, faGift, faUser } from '@fortawesome/free-solid-svg-icons';
import './Bottom.css';

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { icon: faTape, desc: "영화", route: "/" },
        { icon: faShoppingBag, desc: "스토어", route: "/store" },
        { icon: faTicketAlt, desc: "예매", route: "/ticketing" },
        { icon: faGift, desc: "이벤트", route: "/event" },
        { icon: faUser, desc: "MY", route: "/my" },
      ],
    }
  }
  render() {
    return(
      <div className="bottom">
        {this.state.list.map((data, index) => {
          return(
            <Link to={data.route} key={index} className="bottom-router">
              <div className={data.cname} onClick={function(e) {
                this.props.onChangeView(data.desc);
                }.bind(this)}
              >
                <FontAwesomeIcon icon={data.icon}/><br/>
                {data.desc}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Bottom;
