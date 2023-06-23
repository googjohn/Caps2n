import React from 'react';
import Logo from '../assets/logo-no-background.png';
import './Footer.css';
export const Footer = () => {
  return (
    <footer>
      <section className="footer-section text-gray-500 bg-black">
        <div className="container pt-4 mx-auto w-full max-w-screen-xl">
          <div className="foot-item-header pb-4">
            {/* <h3 className="w-title-a text-brand font-medium text-3xl">topagent.ph</h3> */}
            <img src={Logo} alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="col-span-1">
              <div className="foot-item">
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium text-3xl">About Us</h3>
                </div>
                <div className="w-body-a ml-3">
                  <p className="w-text-a text-white leading-8">
                    TopAgentPH is a real estate company based in the Philippines
                    that specializes in providing exceptional service to clients
                    in buying, selling, and renting properties.
                  </p>
                </div>
                <div className="w-footer-a mt-4 ml-3">
                  <ul className="list-unstyled">
                    <li className="text-white">
                      <span className="fw-bold">Phone:</span> +54 356 945234
                    </li>
                    <li className="text-white">
                      <span className="fw-bold">Email:</span> topagent@capstone.ph
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="foot-item leading-8">
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium text-3xl">The Company</h3>
                </div>
                <div className="w-body-a">
                  <ul className="list-unstyled font-medium">

                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Our Team</a>
                    </li>
                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Careers</a>
                    </li>
                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Affiliate</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="foot-item">
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium text-3xl">Key Locations</h3>
                </div>
                <div>
                  <ul className="list-unstyled leading-8 font-medium">
                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Baguio City</a>
                    </li>
                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Cebu City</a>
                    </li>
                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Davao City</a>
                    </li>

                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Metro Manila</a>
                    </li>
                    <li className="item-list-a">

                      <a href="#" className='py-1 ml-3'>Tagaytay</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='foot-item leading-8'>
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium text-3xl">Legal</h3>
                </div>
                <ul className="text-gray-800 dark:text-gray-400 font-medium">
                  <li className="item-list-a">
                    <a href="#" className="py-1 ml-3">Privacy Policy</a>
                  </li>
                  <li className="item-list-a">
                    <a href="#" className="py-1 ml-3">Licensing</a>
                  </li>
                  <li className="item-list-a">
                    <a href="#" className="py-1 ml-3">Terms &amp; Conditions</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className="socials">
            <ul className="list-inline flex gap-4 mx-auto container pt-4 max-w-screen-xl">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook fa-2x text-white" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter fa-2x text-white" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram fa-2x text-white" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin fa-2x text-white" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-github fa-2x text-white" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube fa-2x text-white" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gold" />
      <section id="footer" className="bg-gray-700 flex justify-between">
        <div className="max-w-screen-xl mx-auto ">
          <div className=" py-8">
            <p className="text-white">
              &copy; <span className="text-brand font-medium">topagent.ph</span> All Rights Reserved.
            </p>
          </div>
        </div>
        <ul className="max-w-screen-xl mx-auto flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="nav-footer text-white md:mr-6">About</a>
          </li>
          <li>
            <a href="#" className="nav-footer text-white md:mr-6">Services</a>
          </li>
          <li>
            <a href="#" className="nav-footer text-white md:mr-6">Pricing</a>
          </li>
          <li>
            <a href="#" className="nav-footer text-white">Contact</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
