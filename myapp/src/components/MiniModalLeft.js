import React from 'react'
import ErrorAsset from '../Images/error.svg';
import { UilExclamationCircle } from '@iconscout/react-unicons';

const MiniModalLeft = (props) => {

//=============================================================================
// HTML code - error message
//=============================================================================

  return (
    <div className='alertMiniModal'>
      <div className='errorImg'><UilExclamationCircle size={14}/></div>
      <small>{props.message}</small>
      {/* <img src={ErrorAsset} /> */}
    </div>  
  )
}

export default MiniModalLeft
