import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css'

export default function QRCodeGenerator(){
  
  const [qrCode, setQrCode] = useState("");
  const [input , setInput] = useState("");

  function handleGenerateQrCode(){
    setQrCode(input);
    setInput('');
  }
  
  
    return(
        <div>
        <div>
            <input onChange={(e)=> setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="enter your value here" />
            <button disabled={input && input.trim() !== " " ? false : true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"  />
        </div>
        </div>
    )
}