
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, Navigation, Pagination, Autoplay } from '../../node_modules/swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
const CustomBuildSwiper = () => {
    const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 5,
    renderScrollbar: true,
    
  }
  return(
    <ReactIdSwiperCustom {...params}>
      <div>더 많은 영화 보기 <FontAwesomeIcon icon={faAngleRight}/></div>
    </ReactIdSwiperCustom>
  );
  
}
  export default CustomBuildSwiper;