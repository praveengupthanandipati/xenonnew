import React from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import about01 from "../assets/images/about-bg-04.jpg";
import about02 from "../assets/images/about-bg-05.jpg";
import about03 from "../assets/images/about-bg-06.jpg";
import aboutprimary from "../assets/images/about-primary-img.jpg";

const About = () => {
    const pageTitle = "About Xenon Bio Sciences";
    const pageIntro =
      "Welcome to our innovative bioscience company, dedicated to advancing health through cutting-edge research, development, and sustainable solutions for a better future.";

    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Header animations
      gsap.from('h1', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.subPageHeader p', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      // Breadcrumb animation
      gsap.from('.breadcrumb-item', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Left side images animations
      gsap.from('.col-md-6 figure img', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });

      // Experience counter animation
      gsap.from('.experience-div', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      });

      // Right side content animations
      gsap.from('.col-md-6 h2', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.col-md-6 h5', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.col-md-6 p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // List items animation
      gsap.from('.list-items li', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Bottom section animations
      gsap.from('.order-lg-last img', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.order-lg-last',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return (
      <main>
         <section className="subPage">
          <div className="subPageHeader">
            <div className="container">
              <div className="row pt-2 pt-md-5">
                <div className="col-lg-6 col-md-10">
                  <h1 className="h1 font-bold">{pageTitle}</h1>
                  <p className="d-none d-md-block">{pageIntro}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="subPageMain">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb my-2">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageTitle}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="container">
              <div className="pageContainer">
                <div className="row">
                  <div className="col-md-6 d-none d-md-block">
                    <figure className="row">
                      <div className="col-md-6 align-self-center position-relative">
                        <img src={about01} alt="" className="img-fluid" />
                        <div className="position-relative experience-div">
                          <div className="count font-bold">20</div>
                          <h6 className="font-white">Years of Experience</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <img src={about02} alt="" className="img-fluid mb-4" />
                        <img src={about03} alt="" className="img-fluid" />
                      </div>
                    </figure>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h2 className="h2 font-bold font-black pb-2">
                      We'll Ensure You Alwasy Get Best Results.
                    </h2>
                    <h5 className="h5 font-primary font-semibold">
                      Xenon Bio Sciences is located at Hyderabad, the pharma hub
                      of India.
                    </h5>
                    <p>
                      Incorporated with a very humble approach dedicated to
                      research and development of Phytochemicals. New product
                      development and market oriented research is our main focus
                      and thrust. Our vast natural resource combined with
                      excellence in organic chemistry and supported by scientific
                      research centers, uniquely enables us to provide cutting
                      edge research based high performance ingredients with
                      comprehensive valuable services for general well being.
                    </p>
                    <ul className="list-items">
                      <li>Team Expertise</li>
                      <li>Research and Development</li>
                      <li>Impact and Future Directions</li>
                    </ul>
                  </div>
                </div>
                <div className="row pt-5">
                  <div className="col-md-6 order-lg-last">
                    <img
                      src={aboutprimary}
                      alt=""
                      className="img-fluid w-100 mb-4"
                    />
                  </div>
                  <div className="col-md-6 align-self-center">
                    <h2 className="h2 font-bold font-black pb-2">
                      Exploring the Frontiers of Life and Discovery
                    </h2>
                    <p>
                      Xenon Bio Sciences is led by a team of highly qualified and
                      experienced people. A wide exposure and deep understanding
                      of the industry gives us insight into the needs of the
                      changing market. The organization believes in the concept of
                      total quality management emphasizing on strong customer
                      relationship, management, high quality and on –schedule
                      delivery of its products. We strive to upgrade the existing
                      standards of quality through innovation and hard work. Our
                      products pass through stringent quality checks to ensure
                      that only the best product reaches our customers. Being
                      technically sound and hosting a highly experienced and
                      dedicated staff, we will reach our targets without fail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}

export default About
