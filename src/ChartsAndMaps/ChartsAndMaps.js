import React from 'react';
import Maps from './Maps';
import Charts from './Chart';
import { Link } from 'react-router-dom';
const ChartsAndMaps = () => {
  return <>
    <div className='contact_layout'>
      <div className='contact_header'>
        <h2>Charts and Maps</h2>
      </div>
      <div className='container'>
        <div className='left_container'>
          <Link to="/"><div className='left_menu'>Contact</div></Link>
          <Link to="/ChartsAndMaps"><div className='left_menu'>Charts and Maps</div></Link>
          <div className='left_menu'>Slidebar</div>
        </div>
        <div className='right_container'>

          <div className='chart_map_allign'>
            <div>
              <Charts />
            </div>
            <div><Maps /></div>

          </div>
        </div>
      </div>

    </div>
  </>
};
export default ChartsAndMaps