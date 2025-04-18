import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import scrollToTop from './ScrollToTop';
import footerLogo from "../assets/images/logo-color.svg";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className="footer">
    {isScrolled && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <NavLink>
          <span className="icon-forward icomoon"></span>
        </NavLink>
      </div>
    )}

    <div className="container">
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
          <NavLink>
            <img src={footerLogo} alt="" />
          </NavLink>
          <article className="pe-3">
            <p className="pt-3">
              For deciding the quality of the plant material and herbal
              formulations, assay for chemical markers is an important
              parameter necessarily to be studied{" "}
              <NavLink className="font-bold" to="/About">
                Read More
              </NavLink>
            </p>
          </article>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <h5 className="footer-col-title font-bold">Company</h5>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/About">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/Products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </div>              
            <div className="col-md-8 pt-4 pt-md-0">
              <h5 className="footer-col-title font-bold">Contact</h5>
              <ul className="contacts">
                <li>
                  <span className="icon-phone-call"></span> +91-9849601776
                </li>
                <li>
                  <span className="icon-email"></span>{" "}
                  info@xenonbiosciences.com
                </li>
                <li>
                  <h6 className="font-bold">Xenon Bio Sciences</h6>
                  <span className="icon-pin"></span> Plot No:22b, Road # 2,
                  Venkataramana Colony, Vanasthalipuram Hyderabad-500070,
                  India.
                </li>
              </ul>
              <div className="pt-md-4 social">
                <NavLink to="">
                  <span className="icon-facebook"></span>
                </NavLink>
                <NavLink to="">
                  <span className="icon-linkedin"></span>
                </NavLink>
                <NavLink to="">
                  <span className="icon-twitter"></span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottomFooter py-3">
      <p className="text-center pb-0 mb-0 font-white">
        All Copy rights Reserved @ Xenon Biosciences 2025
      </p>
    </div>
  </footer>
  )
}

export default Footer
