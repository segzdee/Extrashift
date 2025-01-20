
import React, { Fragment, ReactNode, useEffect, useState,  } from 'react'
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Authenticationswitcher from '../switcher/authentication-switcher';

interface ErrorPagesLayoutProps {
  children: ReactNode;
}

function ErrorPagesLayout({ children }:ErrorPagesLayoutProps) {
  
  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
	  setlateLoad(true);
	});

  return (
    <Fragment>
        <Provider store={store}>
        <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
            <Authenticationswitcher/>
              {children}
        </div>
      </Provider>
    </Fragment>
  );
}

export default ErrorPagesLayout;
