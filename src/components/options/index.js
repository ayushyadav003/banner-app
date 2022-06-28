import React, {useState} from 'react';
import './options.css'

export default function Index({ setboxColor, setborderColor, setTextColor, setButtonColor,setButtonTextColor
                                ,setButtonBorder,setLogo, setMainText, setButtonText, setLogoURL, setTextSize,
                                setButtonURL }) {


    const[check, setCheck] = useState(true);
  return (
    <div className='options_main_container'>
        <div className='option_tab'>
            <span style={check===true?{background:'#fff',color:'#000'}:null} onClick={()=>setCheck(!check)}>Colors</span>
            <span style={check===false?{background:'#fff',color:'#000'}:null} onClick={()=>setCheck(!check)}>Values</span>
        </div>
      <div className='option_container'>
        {
            check === true?
        <div className='color_tab'>
            <div className='color_input'>
                <label>Box Color</label>
                <input type='color' onChange={(e)=>setboxColor(e.target.value)} />
            </div>    
            <div className='color_input'>
                <label>Border Color</label>
                <input type='color' onChange={(e)=>setborderColor(e.target.value)} />
            </div>
            <div className='color_input'>
                <label>Text Color</label>
                <input type='color' onChange={(e)=>setTextColor(e.target.value)} />
            </div>
            <div className='color_input'>
                <label>Button Color</label>
                <input type='color' onChange={(e)=>setButtonColor(e.target.value)} />
            </div>
            <div className='color_input'>
                <label>Button Text</label>
                <input type='color' onChange={(e)=>setButtonTextColor(e.target.value)} />
            </div>
            <div className='color_input'>
                <label>Button Border</label>
                <input type='color' onChange={(e)=>setButtonBorder(e.target.value)} />
            </div>
            <div className='file_input'>
                <label>
                    Click to Add logo
                <input type="file" style={{display:'none'}} onChange={(e)=> 
                    setLogo({image: URL.createObjectURL(e.target.files[0])})} />
                </label>
            </div>
        </div>
        
        :
        <div className='value_tab'>

            <div>
                <label>Logo URL</label>
                <input type='text' onClick={(e)=>setLogoURL(e.target.value)}/>
            </div>
            <div className='number_input'>
                <label>Mian Text Size</label>
                <input type='number' onChange={(e)=>setTextSize(e.target.value+'px')} />
            </div>
   
            <div className='number_input'>
                <label>Button Text size</label>
                <input type='number' onChange={(e)=>(e.target.value)} />
            </div>
            <div className=''>
                <label>Button Text </label>
                <input type='text' onChange={(e)=>setButtonText(e.target.value)} />
            </div>  
            <div>
                <label>Button URL</label>
                <input type='text' onChange={(e)=>setButtonURL(e.target.value)} />
            </div>
            <div className='' style={{display:'grid',textAlign:'left'}}>
                <label>Main Text </label>
                <textarea style={{opacity:'0.5'}} name="Text1" cols="30" rows="4" onChange={(e)=>setMainText(e.target.value)}></textarea>
            </div>
        </div>
    }
    </div>
  </div>
  )
}
 