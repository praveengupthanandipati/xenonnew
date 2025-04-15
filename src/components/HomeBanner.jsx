import React, {useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Banner01 from "../assets/images/banner01.jpg";
import Banner02 from "../assets/images/banner02.jpg";
import Banner03 from "../assets/images/banner03.jpg";
import Banner04 from "../assets/images/banner04.jpg";

//import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeBanner = () => {
    const homeSliderItems = [
        {
          id: 1,
          imageName: Banner01,
          title: "Exploring the wonders of Phytochemicals ",
          description:
            "Embark on a fascinating journey into the heart of phytochemicals with our captivating exploration.",
        },
        {
          id: 2,
          imageName: Banner02,
          title: "Tiny Wonders: Microbes Explored",
          description:
            "Dive into the unseen world of microbes, shaping ecosystems, human health, and biotechnological frontiers.",
        },
        {
          id: 3,
          imageName: Banner03,
          title: "Bioengineering Frontiers",
          description:
            " Journey into bioengineering's frontier, merging science and innovation to reshape healthcare, create artificial organs, and enhance human capabilities.",
        },
        {
          id: 4,
          imageName: Banner04,
          title: "Eco Harmony: Biodiversity Explored",
          description:
            " Witness the delicate balance of ecosystems and biodiversity, shaping conservation efforts through bioscience research, safeguarding our planet's ecological harmony.",
        },
      ];
  return (
    <div>
       <div className="HomeSlider">
        <div className="container-fluid g-md-0">
          <div className="row g-0 justify-content-between">
            <div className="col-md-7 align-self-center">
              <article className="article-slider">
                <div className="row justify-content-end">
                  <div className="col-md-9 col-sm-10">
                    <article className="p-2 p-md-4">
                      <h2 className="font-bold">
                        Your Strategic Partner for <span>Phytochemicals </span>{" "}
                        Reference Standards
                      </h2>
                      <p className="d-none d-md-block">
                        Embark on a fascinating journey into the heart of
                        phytochemicals with our captivating exploration.
                      </p>
                      <div>
                        <NavLink to="/About" className="green-btn">
                          Read More
                        </NavLink>
                      </div>
                    </article>
                    <section className="highlets my-2 my-md-5 d-none d-md-block">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="highlets-col rounded d-flex p-3 border h-100">
                            <div className="icon">
                              <span className="icon-award icomoon font-secondary"></span>
                            </div>
                            <div className="ps-2 align-self-center">
                              <h5 className="h5 font-black">
                                100% Customer Satisfaction
                              </h5>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="highlets-col rounded d-flex p-3 border h-100">
                            <div className="icon">
                              <span className="icon-trophy icomoon font-secondary"></span>
                            </div>
                            <div className="ps-2 align-self-center">
                              <h5 className="h5 font-black">Best Lab Awards</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="highlets-col rounded d-flex p-3 border h-100">
                            <div className="icon">
                              <span className="icon-observation icomoon font-secondary"></span>
                            </div>
                            <div className="ps-2 align-self-center">
                              <h5 className="h5 font-black">
                                20 Years Experience
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>
              {/*Home Hightlets*/}
            </div>
            <div className="col-md-4">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,}}
                    loop={true}
                    delay={4000}
                className="mySwiper"
              >
                {homeSliderItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="bannerimage">
                      <img src={item.imageName} alt="" className="bannerimg img-fluid" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
