import React from 'react';
import Banner from './banner/Banner';
import './preview.css';

function Preview({boxColor, borderColor, textColor, buttonColor, buttonTextColor,buttonBorder,logo,
  mainText, buttonText, logoURL, textSize, buttonURL}) {
  return (

    <div className='preview_container'>
        <div className='banner_container'>
          <Banner boxColor={boxColor} borderColor={borderColor} textColor={textColor} buttonColor={buttonColor} 
            buttonTextColor={buttonTextColor} buttonBorder={buttonBorder} logo={logo} mainText={mainText}
             buttonText={buttonText} logoURL={logoURL} textSize={textSize} />
        </div>
    </div>
  )
}

export default Preview