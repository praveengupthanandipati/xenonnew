import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import AboutImage from "../assets/images/xenon-about-home.jpg";
import Homeproducts from '../components/Homeproducts';
import WhyChooseHomeImage from "../assets/images/whychooseHome.jpg";
const Home = () => {
    const abouthighlet = [
        {
          id:1,
          title: "1992",
          desc: "Year of Establishment",
        },
        {
          id:2,
          title: "25+",
          desc: "Qualified Team",
        },
        {
          id:3,
          title: "40%",
          desc: "xport Percentage",
        },
      ];
      let whychooseusTitleTop = "Why Chooseus";
      let whychooseusTitle = "Phytochem Experts: Choose Excellence";

    // GSAP Animations
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);

      // About section title animations
      gsap.from('.sectionTitle h6', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sectionTitle',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.sectionTitle h3', {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sectionTitle',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // About section paragraph animations
      gsap.from('.Homeabout p', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.Homeabout',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // About image animation
      gsap.from('.aboutImage', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.aboutImage',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Read more button animation
      gsap.from('.green-btn', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.green-btn',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Why Choose Us section animations
      gsap.from('.whycol', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.homeWhyChooseus',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });
    });

  return (
    <main>
        <HomeBanner />
        <section className="Homeabout py-3 py-lg-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 align-self-center order-lg-last">
                <div className="sectionTitle">
                  <h6 className="p-0 m-0 font-primary">Welcome</h6>
                  <h3 className="font-bold">Xenon Bio Science</h3>
                  <p className="font-primary">
                    A Reliable Company for Reliable Products
                  </p>
                </div>
                <p>
                  Plant based drugs are being increasingly used in recent times
                  all over the world. However their standardization has become a
                  matter of great concern in getting a wide acceptance for them.
                  The efficacy and safety of herbal drugs depend largely on
                  their authentication and quality. Thus effective methods of
                  standardization and quality control of the plant drugs as well
                  as these extracts are necessary.
                </p>
                <p>
                  As far as the plant raw materials are concerned, the
                  biological activity is due to the bioactive compounds present
                  in them, which makes the plant drugs therapeutically
                  potential.
                </p>
                <div>
                  <NavLink to="/About" className="green-btn">
                    Read More About us
                  </NavLink>
                </div>
                <div className="row company-highletscol d-none">
                  {abouthighlet.map((item) => (
                    <div className="col-4 border-end text-center" key={item.id}>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="font-bold">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <figure className="aboutImage">
                  <img src={AboutImage} alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </section>
       
          <section className="HomeProducts">
          {/*products carousel */}
          <div className="products-carousel">
            <Homeproducts />
          </div>
        </section>

          {/*why choose us section */}
          <section className="homeWhyChooseus">
          <div className="container">
            <div className="row py-2 py-md-5">
              <div className="col-md-6 d-none d-md-block">
                <img src={WhyChooseHomeImage} alt="" className="whychooseusimg" />
              </div>
              <div className="col-md-6 align-self-center">
                <div className="sectionTitle mb-5">
                  <h6 className="font-primary">{whychooseusTitleTop}</h6>
                  <h3 className="font-bold">{whychooseusTitle}</h3>
                </div>
                <div className="whycol d-flex">
                  <div className="icon">
                    <span className="icon-research icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Cutting-Edge Research
                    </h5>
                    <p>
                      Highlight your company's commitment to pioneering research
                      and groundbreaking discoveries in the field of bioscience.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div className="icon">
                    <span className="icon-costumer icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">Expert Team</h5>
                    <p>
                      Introduce the skilled and experienced team members who
                      drive your company's success.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div className="icon">
                    <span className="icon-observation icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      State-of-the-Art Facilities
                    </h5>
                    <p>
                      Showcase your top-tier laboratories, equipment, and
                      facilities. Explain how your cutting-edge infrastructure
                      supports.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div className="icon">
                    <span className="icon-conversation icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Industry Partnerships
                    </h5>
                    <p>
                      Highlight strategic collaborations and partnerships with
                      key players in the bioscience industry.
                    </p>
                  </div>
                </div>
                <div className="whycol d-flex">
                  <div className="icon">
                    <span className="icon-laboratory icomoon"></span>
                  </div>
                  <div className="ps-4">
                    <h5 className="font-bold font-secondary">
                      Commitment to Ethical Practices
                    </h5>
                    <p>
                      Emphasize your company's commitment to ethical research
                      practices, environmental sustainability, and social
                      responsibility.
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

export default Home
