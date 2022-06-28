import React,{ useState } from 'react';
import './App.css';
import Header from './components/header';
import Option from './components/options';
import Preview from './components/preview/Preview';
import ens from './components/preview/banner/enslogo.png'


function App() {

  const[boxColor, setboxColor] = useState('#A9C9FF');
  const[borderColor, setborderColor] = useState('gray');
  const[textColor, setTextColor] = useState('black');
  const[buttonColor, setButtonColor] = useState('#fff');
  const[buttonTextColor, setButtonTextColor] = useState('#000');
  const[buttonBorder, setButtonBorder] = useState('#000');
  const[logo, setLogo] = useState({image:ens});
  const[mainText, setMainText] = useState('Follow us on Instagram and download our App and get upto 30% off');
  const[buttonText, setButtonText] = useState('Download');
  const[logoURL, setLogoURL] = useState('null');
  const[buttonURL, setButtonURL] =useState(null);
  const[textSize, setTextSize] = useState(12);

  return (
    <div className="App">
      <Header />
      <div style={{display:'flex'}}>
        <Option setboxColor={setboxColor} setborderColor={setborderColor} setTextColor={setTextColor}
           setButtonColor={setButtonColor} setButtonTextColor={setButtonTextColor} setButtonBorder={setButtonBorder} 
           setLogo={setLogo} setMainText={setMainText} setButtonText={setButtonText} setLogoURL={setLogoURL}
           setTextSize={setTextSize} setButtonURL={setButtonURL}/>

        <Preview boxColor={boxColor} borderColor={borderColor} textColor={textColor} buttonColor={buttonColor} 
            buttonTextColor={buttonTextColor} buttonBorder={buttonBorder} logo={logo} mainText={mainText} 
            buttonText={buttonText} logoURL={logoURL} textSize={textSize} buttonURL={buttonURL} />
      </div>
    </div>
  );
}

export default App;
