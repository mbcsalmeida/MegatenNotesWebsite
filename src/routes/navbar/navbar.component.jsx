import TopBar from '../topbar/topbar.component.jsx'
import SideBar from '../sidebar/sidebar.component.jsx'
import { useLocation } from 'react-router-dom';
import  { useState } from 'react';

export const NavBar = () => {
  const [size, setSize] = useState([0, 0]);

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
    console.log(width > height);
    return width != 0? width <= height: false
  }

  const StyleOfBar = () => {
    let styleOfBar;
    let location = useLocation();
  
    if(location.pathname.includes("/notes") || ShowWindowDimensions()){
         styleOfBar = <TopBar titles={bar_titles} />
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

