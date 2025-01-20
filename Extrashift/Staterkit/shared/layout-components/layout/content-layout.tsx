
import React, { ReactNode, useEffect, useState } from 'react'
import Header from "../header/header"
import Sidebar from "../sidebar/sidebar"
import Switcher from '../switcher/switcher'
import Footer from "../footer/footer"
import { Provider } from 'react-redux'
import store from '../../redux/store';
import BacktoTop from '../backtotop/backtotop'

interface ContentLayouttProps {
  children: ReactNode;
}

const ContentLayout = ({ children }:ContentLayouttProps) => {
  
  const [lateLoad, setlateLoad] = useState(false);
	const Add = () => {
	  document.querySelector("body")?.classList.remove("error-1");
	 document.querySelector("body")?.classList.remove("landing-body");
	};
	
	useEffect(() => {
	  Add();
	  setlateLoad(true);
	});
  const [MyclassName, setMyClass] = useState("");

  const Bodyclickk = () => {
    document.querySelector(".header-search")?.classList.remove("searchdrop");
    if (localStorage.getItem("sashverticalstyles") == "icontext") {
      setMyClass("");
    }
  };

  return (
    <>
      <Provider store={store}>
      <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
        <Switcher />
        <div className="page">
          <Header />
          <Sidebar />
          <div className="main-content app-content" onClick={Bodyclickk}>
            <div className="container-fluid">
                {children}
            </div>
          </div>
          <BacktoTop/>
          <Footer />
        </div>
        </div>
      </Provider>
    </>
  )
}
export default ContentLayout
