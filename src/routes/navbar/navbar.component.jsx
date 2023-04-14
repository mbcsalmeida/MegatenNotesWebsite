import TopBar from '../topbar/topbar.component.jsx'
import SideBar from '../sidebar/sidebar.component.jsx'
import { useLocation } from 'react-router-dom';
import  { useLayoutEffect, useState } from 'react';

export const NavBar = () => {
  
  const bar_titles = {
      "Home" : "/",
      "About" : "/about",
      "Notes" : "/games",
      "Credits" : "/credits"
  } 

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const ShowWindowDimensions = (props) => {
    const [width, _] = useWindowSize();
    return width < 1080;
  }

  let styleOfBar;
  let location = useLocation();

  if(location.pathname.includes("/notes") || ShowWindowDimensions()){
       styleOfBar = <TopBar titles={bar_titles} />
  }
  else{
       styleOfBar = <SideBar titles={bar_titles}/>
  }
  return(
    <div>
      {styleOfBar}
    </div>
  )
}

