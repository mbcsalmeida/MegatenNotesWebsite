import TopBar from '../topbar/topbar.component.jsx'
import SideBar from '../sidebar/sidebar.component.jsx'
import { useLocation } from 'react-router-dom';
import  { useEffect, useState } from 'react';

export const NavBar = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const bar_titles = {
      "Home" : "/",
      "About" : "/about",
      "Notes" : "/games",
      "Credits" : "/credits"
  } 

  const useWindowSize = () => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return size;
  }

  const ShowWindowDimensions = (props) => {
    const [width, height] = useWindowSize()
    return width !== 0? width <= height: false
  }

  const StyleOfBar = () => {
    let styleOfBar;
    let location = useLocation();
  
    if(ShowWindowDimensions() || location.pathname.includes("/notes")){
         styleOfBar = <TopBar titles={bar_titles} />
    }
    else if(location.pathname.includes("tracker")){
         styleOfBar = <TopBar titles={bar_titles} className="tracker-bar" />
    }
    else{
         styleOfBar = <SideBar titles={bar_titles}/>
    } 
    return styleOfBar;
  }

  return(
    <div>
      {StyleOfBar()}
    </div>
  )
}

