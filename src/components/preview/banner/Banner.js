import React from 'react';


function Banner({boxColor, borderColor, textColor, buttonColor, buttonTextColor, buttonBorder,
   logo, mainText, buttonText,logoURL, textSize,buttonURL}) {
  return (

    <div style={{backgroundColor:boxColor, border:`2px solid ${borderColor}`,display:'flex',padding:'0 5px',
                }}>
      <a style={{margin:'auto'}} href={logoURL}>
        <img src={logo.image} alt='..' width='40px' height='40px' />
      </a>
        <p style={{color:textColor,fontSize:textSize}}>{mainText}</p>
      <a  style={{margin:'auto',textDecoration:'none'}} href='0'>    
        <span style={{backgroundColor:buttonColor,color:buttonTextColor,borderColor:buttonBorder}}>{buttonText}</span>
      </a>
    </div>
  )
}

export default Banner