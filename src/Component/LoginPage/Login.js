import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './Login.css';

class LoginPage extends Component {
  render() {
    return(
      <div class="login-wrapper">
        <h4>
          <span className>로그인</span> 
          <span className="login-wrapper-close-icon">
            <FontAwesomeIcon icon={faTimes} onClick={()=> {
              
            }
          }/>
          </span>
        </h4>

        <div className="login-wrapper-input-form">
          <form>
            <input type="text" maxLength={20} placeholder="아이디"/>
            <input type="password" maxLength={20}  placeholder="비밀번호"/>
            <div>
              <label>
              <input type="checkbox" className="auto-login"/>
              <span style={{fontSize:11,}}>자동 로그인</span>
              </label>
            
            </div>
           
            <button type="submit">로그인</button>
          </form>
        </div>

        <div className="user-function">
            <span>ID/PW 찾기</span> |
            <span>회원가입</span> |
            <span>비회원 예메확인</span>
        </div>

        <div>
           <FontAwesomeIcon icon={faFacebook}/>
           <FontAwesomeIcon icon={faGoogle}/>
        </div>
      </div>
    );
  }
}
export default LoginPage;
