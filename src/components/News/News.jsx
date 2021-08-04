import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import './News.scss';
import news1 from '../../assets/img/news/news-1.png';
import calendarImg from '../../assets/img/icon/Calendar.png';
import { mockData } from './mock-data';

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="row pt-200px">
          <div className="col-12 col-md-6">
            <img className="w-100" src={news1} alt="news-1"/>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div className="news-intro-wrapper mt-5 mt-md-0 pl-50px pr-50px">
              <div className="news-intro_title font-title size-31 mb-24px font-weight-bold color-black">Fall 2020 Fashion Show</div>
              <div className="news-intro_text size-16 color_dim_gray">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as opposed to using
                &apos;Content here, content here&apos;, making it look like readable English. 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-80px">
        <div className="news-discover_sub-title color-dim-gray size-16 text-center mb-30px">MORE NEWS FROM US</div>
        <div className="news-discover_title font-title font-weight-bold mb-80px size-48 color-nero text-center">Discover More News</div>
        <div className="row">
          {
            mockData.map((item, index) => {
              return (
                <NavLink to={`/news/details`} className="col-12 col-sm-6 col-lg-4 mb-60px cursor-pointer" key={index}>
                  <img className="w-100 mb-20px" src={item.img} alt="img" />
                  <div className="news-discover-item_title font-title size-18 color-nero font-weight-bold mb-12px">{item.title}</div>
                  <div className="d-flex align-items-start">
                    <img src={calendarImg} alt="img" />
                    <div className="size-14 color-dark-gray-1 ml-2">{item.date}</div>
                  </div>
                </NavLink>
              );
            })
          }
          <div className="d-flex justify-content-center w-100">
            <Button className="news-discover-btn">
              <div className="text size-14 text color-white text-uppercase">LOAD MORE</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;