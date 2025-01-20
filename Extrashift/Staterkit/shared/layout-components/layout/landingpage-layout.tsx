import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import store from '@/shared/redux/store';
import LandingSwitcher from '../switcher/landing-switcher';
import BacktoTop from '../backtotop/backtotop';

const Landingpagelayout = ({ children }:any) => {

  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
	  setlateLoad(true);
	});

  return (
    <Provider store={store}>
      <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
        <LandingSwitcher/>
      <div>
          {children}
        </div>
        <BacktoTop/>
            </div>
      </Provider>
  );
};

export default Landingpagelayout;
