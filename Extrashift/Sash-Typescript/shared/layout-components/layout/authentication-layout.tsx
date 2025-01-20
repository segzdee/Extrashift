
import React, { Fragment, ReactNode, useEffect, useState,  } from 'react'
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthenticationSwitcher from '../switcher/authentication-switcher';

interface AuthenticationLayoutProps {
  children: ReactNode;
}

function Authenticationlayout({ children }:AuthenticationLayoutProps) {
  
  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
	  setlateLoad(true);
	});

  return (
    <Fragment>
        <Provider store={store}>
        <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
            <AuthenticationSwitcher/>
            <div className='autentication-bg'>
              <div className='container-lg'>
              {children}
              </div>
            </div>
        </div>
      </Provider>
    </Fragment>
  );
}

export default Authenticationlayout;
