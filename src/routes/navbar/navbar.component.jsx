import TopBar from '../topbar/topbar.component.jsx'
import SideBar from '../sidebar/sidebar.component.jsx'
import {Fragment, useEffect, useState} from 'react';
import {titles} from "../titles";

export const NavBar = ({ children }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const onTouchStart = () => setIsTouchDevice(true);
    const onMouseMove = () => setIsTouchDevice(window.innerWidth <= window.innerHeight);

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const handleResize = () => {
    setIsTouchDevice(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <Fragment>
        {isTouchDevice ? <TopBar titles={titles} />: <SideBar titles={titles} />}
        {children}
      </Fragment>
  );
};


