import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import image from '../../assets/img/home/image_1.png';
import './Home.scss';
import img1 from '../../assets/img/home/Rectangle_20.png';
import bannerImg from '../../assets/img/home/banner.png';
import vectorImg from '../../assets/img/home/Vector.png';
import calendarImg from '../../assets/img/icon/Calendar.png';
import bagBg from '../../assets/img/home/bag_bg.png';
import { Button, Carousel } from 'antd';
import { comment, listBagInDaily, listOurCommitment, listTrend, listDes, listDesignYourOwn } from './mock-data';
const Home = () => {
    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        });
    }, []);

    return (
        <div className="home-page">
            <div className="banner-session position-relative">
                <Carousel autoplay>
                    <div className="h-100 position-relative">
                        <div
                            className="position-absolute w-100 h-100 img"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="container-fluid row h-100">
                            <div className="col-6" />
                            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="size-60 banner-title" >The New Fragrance Girl Collection</h3>
                                <div >
                                    <Button className="banner-btn">
                                        <div className="size-14 d-flex justify-content-center align-items-center h-100 text-uppercase">
                                            discover more
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 position-relative">
                        <div
                            className="position-absolute w-100 h-100 img"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="container-fluid row h-100">
                            <div className="col-6" />
                            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="size-60 banner-title">The New Fragrance Girl Collection</h3>
                                <div>
                                    <Button className="banner-btn">
                                        <div className="size-14 d-flex justify-content-center align-items-center h-100 text-uppercase">
                                            discover more
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 position-relative">
                        <div
                            className="position-absolute w-100 h-100 img"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="container-fluid row h-100">
                            <div className="col-6" />
                            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                                <h3 className="size-60 banner-title">The New Fragrance Girl Collection</h3>
                                <div>
                                    <Button className="banner-btn">
                                        <div className="size-14 d-flex justify-content-center align-items-center h-100 text-uppercase">
                                            discover more
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="self-session mt-5 mb-5">
                <div className="container-fluid">
                    <div className="self-session-title position-relative d-flex align-items-center">
                        <div className="size-200 color-gainsboro text-center font-title position-absolute font-weight-bold w-100 pt-4 bg">
                            TOI
                        </div>
                        <div className="size-50 font-title title text-center line-normal">
                            Luxury Fashion Accessories By You and For You
                        </div>
                    </div>
                    <div>
                        <h4 className="size-16 color-dim-gray text-center text-uppercase mt-5" >new arrivals</h4>
                        <h3 className="size-48 font-title font-weight-bold text-center mt-30px" >
                            New Trends - New Styles
                        </h3>
                        <div className="row trend-list">
                            {listTrend.map((trend, index) => (
                                <div key={index} className={`col-12 col-md-6 col-lg-3 trend-item trend-item-${index} mt-4`}>
                                    <div className="content-wrapper w-100 h-100">
                                        <div className="content w-100 h-100 d-flex justify-content-center align-items-end position-relative">
                                            <div>
                                                <img src={trend.img} className="w-100" alt="img" />
                                            </div>
                                            <div className="trend-detail position-absolute w-100 h-100 text-center">
                                                <h2 className="font-title size-25 font-weight-bold text-center">
                                                    {trend.name}
                                                </h2>
                                                <p className="size-16 color-dim-gray text-center">{trend.cost}</p>
                                                <Button>
                                                    <div className="size-14 d-flex justify-content-center align-items-center h-100 text-uppercase">
                                                        show now
                                                    </div>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <Button type="primary" size="large" className="btn-open-more">
                                <NavLink to="/" className="size-14 text-white text-uppercase text">all bags</NavLink>
                            </Button>
                        </div>
                        <div className="descriptions">
                            {listDes.map((des, index) => (
                                <div key={index} className="d-flex description-item mt-60px" >
                                    <div>
                                        <img src={des.img} alt="img" />
                                    </div>
                                    <div className="ml-30px">
                                        <h3 className="font-title size-31 font-weight-bold">{des.title}</h3>
                                        <p className="size-16">{des.des}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-120px container-fluid">
                <h4 className="size-16 color-dim-gray text-center text-uppercase">DESIGN YOUR OWN</h4>
                <h3 className="size-48 font-title font-weight-bold text-center mt-30px">Play With Your Style</h3>
                <div className="d-md-flex own-design align-items-start mt-80px">
                    {listDesignYourOwn.map((item, index) => (
                        <div key={index} className={`text-center mb-50px own-design-item own-design-item-${index}`} >
                            <div className="img-wrapper d-flex justify-content-center align-items-end position-relative">
                                <img src={bagBg} className="w-100" alt='img' />
                                <div className="img w-100 position-absolute">
                                    <div>
                                        <img src={item.img} alt="img" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="size-18 font-title font-weight-bold mt-50px text-center">{item.title}</h3>
                            <Button type="primary" size="large" className="btn-open-more mt-10px">
                                <NavLink to="/" className="size-14 text-uppercase text">GO DESIGN</NavLink>
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Button type="primary" size="large" className="btn-open-more">
                        <NavLink to="/" className="size-14 text-white text-uppercase text">all bags</NavLink>
                    </Button>
                </div>
            </div>
            <div className="latest-collection-wrapper" >
                <div className="latest-collection">
                    <div className="container-fluid">
                        <div className="d-md-flex row">
                            <div className="col-12 col-md-6 content pl-md-5 pr-md-5">
                                <h4 className="text-white size-16 text-uppercase">LATEST COLLECTION</h4>
                                <h3 className="text-white size-48 font-title font-weight-bold mt-40px mt-40px">
                                    Fall Winter 2020 Collection
                                </h3>
                                <p className="text-white size-14 mt-10px">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and
                                </p>
                                <Button type="primary" size="large" className="btn-open-more mt-30px">
                                    <NavLink to="/" className="size-14 text-white text-uppercase text size-14">DISCOVER MORE</NavLink>
                                </Button>
                            </div>
                            <div className="col-12 col-md-6 d-none img-container text-right position-relative d-md-flex align-items-center justify-content-end">
                                <div className="h-100 w-100 position-relative">
                                    <div className="img h-100 w-100 position-absolute" style={{ backgroundImage: `url(${img1})` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-commitment-session">
                <div className="container-fluid">
                    <h4 className="size-16 color-dim-gray text-center text-uppercase">OUR COMMITMENT</h4>
                    <h3 className="size-48 font-title font-weight-bold text-center mt-30px">Handcrafted Italian Bags</h3>
                    <div className="d-md-flex mt-80px row">
                        <div className="col-12 col-md-6 mb-50px mb-md-0 banner">
                            <img src={bannerImg} alt="img" />
                        </div>
                        <div className="col-12 col-md-6 pl-3">
                            {listOurCommitment.map((item, index) => (
                                <div key={index} className="commitment-item position-relative">
                                    <h3 className="size-31 font-title font-weight-bold">{item.name}</h3>
                                    <div className="mt-10px size-16 color-dim-gray">
                                        {item.content.map((content, i) => (
                                            <p key={i}>{content}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <Carousel autoplay>
                        {comment.map((item, index) => (
                            <div key={index} className="comment-item-wrapper">
                                <div className="comment-item">
                                    <div className="container content-wrapper d-flex justify-content-center position-relative">
                                        <div className="position-absolute sticker">
                                            <img src={vectorImg} alt="img" />
                                        </div>
                                        <div className="content">
                                            <p className="size-16">{item.content}</p>
                                            <div className="d-flex align-items-center mt-30px">
                                                <div>
                                                    <img src={item.author.avatar} alt="img" />
                                                </div>
                                                <div className="ml-30px">
                                                    <h4 className="size-16 font-weight-bold">{item.author.name}</h4>
                                                    <p className="size-14 mb-0">{item.author.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div>
                <div className="container-fluid mt-120px mb-120px">
                    <h4 className="size-16 color-dim-gray text-center text-uppercase">IN DIARY</h4>
                    <h3 className="size-48 font-title font-weight-bold text-center mt-30px">Stay Tune With News</h3>
                    <div className="row mt-80px">
                        {listBagInDaily.map((bag, index) => (
                            <div key={index} className="col-4 cursor-pointer">
                                <img src={bag.img} className="w-100" alt="img" />
                                <h3 className="size-18 font-weight-bold font-title mt-3">{bag.title}</h3>
                                <div className="d-flex align-items-start mt-10px">
                                    <img src={calendarImg} alt="img" />
                                    <div className="size-14 color-dim-gray ml-2">{bag.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
