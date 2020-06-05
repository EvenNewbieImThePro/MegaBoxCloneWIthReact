import React, { Component} from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTimes, faUserPlus, faBell, faTicketAlt, faCogs,
  faTape, faTv, faUser, faFilm, faShoppingBag, faGift, faBullhorn,
  faChevronDown,
 } from '@fortawesome/free-solid-svg-icons';
import './RightSideBar.css';

class Top extends Component {
  render() {
    return(
      <div className="sidebar-top">
        <div className="sidebar-top-top">
          {this.props.login}
          <span className="sidebar-fixed-icon">
            <FontAwesomeIcon icon={faHome}/>
            <FontAwesomeIcon icon={faTimes}
              onClick={function() {
                var rightSideBar = document.getElementsByClassName('right-side-bar')[0];
                var overLay = document.getElementsByClassName('overLay')[0];
                rightSideBar.style.width='0px';
                overLay.style.display="none";
              }}
            />
          </span>
       </div>
       {this.props.login2}
     </div>
    );
  }
}

class Mid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {icon: faTape, desc:"영화별 예매", route:"/book_by_movie" },
        {icon: faTv, desc:"극장별 예매", route:"/book_by_theater" },
        {icon: faUser, desc:"나의 메가박스", route:"/my" },
        {icon: faFilm, desc:"영화", route:"/movie" },
        {icon: faShoppingBag, desc:"스토어", route:"/store" },
        {icon: faGift, desc:"이벤트", route:"/event" },
      ]
    }
  }
  render() {
    return(
      <div className="sidebar-mid">
        <Router>
          {this.state.menu.map((data, index)=> {
            return(
              <Link to={data.route} key={index} className="sidebar-router">
                <div className="sidebar-mid-icon">
                  <FontAwesomeIcon icon={data.icon}/>
                </div>
                {data.desc}
              </Link>
            );
          })}
        </Router>
      </div>
    );
  }
}

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {key:1, desc:'포토카드'},
        {key:2, desc:'극장안내'},
        {key:3, desc:'무비포스트'},
        {key:4, desc:'더 부티크 프라이빗 예매'},
        {key:5, desc:'제휴/할인 안내'},
        {key:6, desc:'멤버쉽 안내'},
        {key:7, desc:'고객센터'},
      ],
      mode: 'hide',
    }
  }
  render() {
    return(
      <div className="sidebar-bottom">
        {this.state.list.map((data)=> {
          if(data.key===6) {
            return(
              
                <div className="sidebar-bottom-list" key={data.key}
                  onClick={function() {
                    
                    if(this.state.mode==="hide") {
                      document.getElementsByClassName('sidebar-bottom-list-child')[0].style.display="block";
                      this.setState({ mode: "show" })
                    }
                    else if(this.state.mode==="show") {
                      document.getElementsByClassName('sidebar-bottom-list-child')[0].style.display="none";
                      this.setState({ mode: "hide" })
                    }
                    
                  }.bind(this)}
                >
                  <div className="sidebar-bottom-list-desc">
                    {data.desc}
                    <FontAwesomeIcon icon={faChevronDown}/>
                  </div>
                  <div className="sidebar-bottom-list-child">
                    <li>스페셜 멤버십</li>
                    <li>멤버십 안내</li>
                    <li>VIP LOUNGE</li>
                  </div>
                </div>
              
            );
          }
          else return(
            <div className="sidebar-bottom-list" key={data.key}>
              <div className="sidebar-bottom-list-desc">
                {data.desc}
              </div>
            </div>
          );
        })}
        <div className="sidebar-bottom-notice">
          <FontAwesomeIcon icon={faBullhorn}/> <b>[공지] 2019 멤버십 쿠폰 유효기간 연장 안내</b>
        </div>
      </div>
    );
  }
}
class RightSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
    }
  }
  render() {
    var logined1 = (
      <span className="sidebar-top-userinfo">
        React 님<br/>
        ID
      </span>);
    var unLogined1 = (
      <span className="sidebar-top-userinfo">
        <a href="/login" style={{textDecoration:'none'}}>
          <u><b>로그인</b></u> 후 이용하세요!
        </a>
      </span>
    );

    
    var unLogined2 = (
      <div className="sidebar-top-bottom1">
        <span>
          <FontAwesomeIcon icon={faUserPlus}/> 회원가입
        </span>
        <span>
          <FontAwesomeIcon icon={faTicketAlt}/> 비회원 예매확인
        </span>
      </div>
    );

    var logined2 = (
      <div className="sidebar-top-bottom2">
        <span style={{float:'left'}}>
          <FontAwesomeIcon icon={faBell}/> 알림함
        </span>
        <span>
          <FontAwesomeIcon icon={faTicketAlt}/> 예매확인/취소
        </span>
        <span style={{float:'right'}}>
          <FontAwesomeIcon icon={faCogs}/> 설정
        </span>
      </div>
    );

    if(this.state.isLogined===true) {
      return(
        <div className="right-side-bar">
          <Top login={logined1} login2={logined2}></Top>
          <Mid></Mid>
          <Bottom></Bottom>
        </div>
      );
    }
    else 
    return(
      <div className="right-side-bar">
        <Top login={unLogined1} login2={unLogined2}></Top>
        <Mid></Mid>
        <Bottom></Bottom>
      </div>
    );
  }
}

export default RightSideBar;
