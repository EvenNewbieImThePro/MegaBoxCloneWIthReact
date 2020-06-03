import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swiper from 'react-id-swiper';
import { faAngleRight, faFilm, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

import lalaland from '../../../images/ImagesInHashTags/lalaland.jpg';
import judy from '../../../images/ImagesInHashTags/judy.jpg';
import nineTeenSevenTeen from '../../../images/ImagesInHashTags/1917.jpg';

import './Movie.css';
import event1 from '../../../images/event/oFER1mmPI4EFwg9pjnEosUI5H7wenOqB.jpg';
import event2 from '../../../images/event/i9NGIyGy03nENid0DtNmMjLqrxhrZOv1.jpg'

class HashTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashTags: [
        {key:0, data: '박스오피스'},
        {key:1, data: '상영예정작'},
        {key:2, data: '필름소사이어티'},
        {key:3, data: '클래식소사이어티'},
        {key:4, data: '다시봄'},
        {key:5, data: '메가박스단독'},
        {key:6, data: '명작리플레이'},
        {key:7, data: '오리지널타겟'},
      ]
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
      <div className="hash-tags-wrapper">
        <h2>
          당신은 영화 속 주인공처럼,<br/>
          이 어려움도 이겨낼 거예요
        </h2>
        <div className="hash-tags-list">
          {this.state.hashTags.map((data) => {
            return(
                <span key={data.key}>#{data.data}&nbsp;&nbsp;&nbsp;</span>
            );
          })}
        </div>
      </div>
    );
  }
}

class MovieListSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [
        { poster: lalaland, degreeIcon:'degree12', degreeText: 12, movieTitle: '라라랜드', bookRatio: 12, point: 9.5, likes:'1.1k' },
        { poster: judy, degreeIcon:'degree12', degreeText: 12, movieTitle: '주디', bookRatio: 6.7, point: 8.7, likes:'540' },
        { poster: nineTeenSevenTeen ,degreeIcon:'degree15', degreeText: 15, movieTitle: '1917', bookRatio: 5.3, point: 8.9, likes:'1.2k' }
      ]
    }
    
  }
  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination.customized-swiper-pagination',
      }, // Add your class name for pagination container
      navigation: {
        nextEl: '.swiper-button-next.customized-swiper-button-next', // Add your class name for next button
        prevEl: '.swiper-button-prev.customized-swiper-button-prev' // Add your class name for prev button
      },
      containerClass: 'customized-swiper-container', // Replace swiper-container with customized-swiper-container

    }
    return(
      <Swiper {...params}>
        {this.state.movie.map((data, index) => {
          return(
            <div className="movie-slide" key={index}>
              <img src={data.poster} alt={data.movieTitle}/>
              <div className="movie-info">
                <div id={data.degreeIcon}>{data.degreeText}</div> <span>{data.movieTitle}</span>
                <div className="movie-data">
                  <div className="movie-data-info">예매율</div>
                  <div className="movie-data-info">관람평</div>
                  <div className="movie-data-info">보고싶어</div>
                  <div>{data.bookRatio}% </div><div>{data.point}</div><div>{data.likes}</div>
                </div>
                <button className="movie-book-button">바로예매</button>
              </div>         
            </div>
          );
        })}
      </Swiper>
    );
  }
}
// class MovieList extends Component {
//   render() {
//     return(
      
//     );
//   }
// }

class HotClip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [
        {index: 0, source: "https://www.youtube.com/embed/Dt5hFexM5BI", title:'라라랜드', desc: '오리지널 티켓과 ATMOS로 만나는 라라랜드' }
      ]
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
      <div className="hot-clip-wrapper">
        <h2>핫클립</h2>
        <div className="hot-clip" >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eHaKWM2VLBY?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video"></iframe>
          <div className="hot-clip-main">
            <span>신과 나: 100일간의 거래</span><br/>
            <span className="hot-clip-main-desc">영혼이 머무르는 시간, 단 100일</span>
          </div>
        </div>
        <div className="hot-clip-playlist">
          {this.state.movie.map((data) => {
            return(
              <div key={data.index}>
                <iframe width="187" height="105" src={data.source+"?rel=0"} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video"></iframe>
                <div className="hot-clip-playlist-info">
                  <span>{data.title}</span><br/>
                  <span className="hot-clip-main-desc">{data.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="after-movie">
          <div><div><FontAwesomeIcon icon={faImage}/><br/>포토카드</div></div>
          <div><div className="after-movie-line"><FontAwesomeIcon icon={faFilm}/><br/>극장</div></div>
          <div><div><FontAwesomeIcon icon={faTicketAlt}/><br/>본영화등록</div></div>
        </div>
      </div>
    );
  }
}

class MegaboxNews extends Component {
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
      <div className="news">
        <h2>메가박스 소식</h2>
        <div>
          <div><img src={event1} alt="event"/></div>
          <div><img src={event2} alt="event"/></div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

class MovieEvent extends Component {
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
      <div>
  
      </div>
    );
  }
}
class SpecialTheater extends Component {
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
      <div>
  
      </div>
    );
  }
}
class MoviePost extends Component {
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
      <div>
  
      </div>
    );
  }
}


class MovieTap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [
        { poster: lalaland, degreeIcon:'degree12', degreeText: 12, movieTitle: '라라랜드', bookRatio: 12, point: 9.5, likes:'1.1k' },
        { poster: judy, degreeIcon:'degree12', degreeText: 12, movieTitle: '주디', bookRatio: 6.7, point: 8.7, likes:'540' },
        { poster: nineTeenSevenTeen ,degreeIcon:'degree15', degreeText: 15, movieTitle: '1917', bookRatio: 5.3, point: 8.9, likes:'1.2k' }
      ]
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
      <div className="content">
        <HashTags></HashTags>
        <div id="movie-slide-wrapper">
          <MovieListSwiper/>
        </div>
        <div className="movie-slide-wrapper-bottom">
          {/* <Swiper></Swiper> */}
          <hr style={{border: '1px solid rgb(41,41,41)', margin: 15}}></hr>
        </div>
        
        
        <HotClip></HotClip>
        <MegaboxNews></MegaboxNews>
        <MovieEvent></MovieEvent>
        <SpecialTheater></SpecialTheater>
        <MoviePost></MoviePost>
      </div>
    );
  }
}
  

export default MovieTap;
