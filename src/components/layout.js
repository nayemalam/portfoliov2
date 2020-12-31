/* external imports */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
/* component imports */
import SEO from './seo';
import NavigationBar from './navigationbar/NavigationBar';
/* internal css */
import '../sass/global.scss';

const Layout = ({ children, seo }) => {
  // trigger for landscape devices
  useEffect(() => {
    AOS.init();

    if (typeof window !== `undefined`) {
      const readDeviceOrientation = () => {
        if (window.orientation === 90 || window.orientation === -90) {
          alert(
            'This site is not optimized for landscape mode. Please use portrait mode instead, thank you.',
          );
        }
      };

      window.onorientationchange = readDeviceOrientation;
    }
  });

  return (
    <div className="layout">
      {/* head elements */}
      <Helmet>
        <html lang="en" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Josefin+Sans:500&display=swap"
        />
      </Helmet>

      {/* site elements */}
      <SEO seo={seo} />
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
