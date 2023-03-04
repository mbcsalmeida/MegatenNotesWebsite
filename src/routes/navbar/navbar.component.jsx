import TopBar from '../topbar/topbar.component.jsx'
import SideBar from '../sidebar/sidebar.component.jsx'
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
  
  const bar_titles = {
      "Home" : "/",
      "About" : "/about",
      "Notes" : "/notes",
      "Checklist" : "/checklist",
      "Credits" : "/credits"
  } 
  let styleOfBar;
  let location = useLocation();

  if(location.pathname.includes("/notes")){
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

