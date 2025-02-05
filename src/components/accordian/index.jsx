import data from "./data";
import { useState } from "react";
import './style.css';


export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection]= useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

function handleMultiSelection(getCurrentId){
  let cpyMultiple = [...multiple];
  const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);

  console.log(findIndexofCurrentId);
  if(findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
  else cpyMultiple.splice(findIndexofCurrentId, 1);

  setMultiple(cpyMultiple);

}


  return (
    <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? "Disable Multi-Selection" : "Enable Multi-Selection"}</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id)
                     : () => handleSingleSelection(dataItem.id)
                   
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
         
                {
                    enableMultiSelection  ? 
                    multiple.indexOf(dataItem.id) !== -1 && 
                        <div className="content">{dataItem.answer}</div> :
                        selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                    
                }

                {/* {selected === dataItem.id || multiple.indexOf.of(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
      
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
