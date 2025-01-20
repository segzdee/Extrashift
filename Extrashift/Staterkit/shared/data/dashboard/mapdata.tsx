import React from 'react';
import { WorldMap } from 'world-svg';

const WorldMapCom = () => {
  return (
    <WorldMap landColor="#847be9" hoverColor='#6c5ffc' tooltip={'on'} landBorder={''} tooltipBgColor={''} tooltipTextColor={''} onCountryClick={function (countryAlpha2Code: string): void {
          throw new Error('Function not implemented.');
      } }/>
  );
};

export default WorldMapCom