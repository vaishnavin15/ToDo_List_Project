import React,{useState} from 'react'

function Todoinput(props) {
    const [inputText, setInputText]= useState('')
    const handleEnter = (e) => {
      if (e.keyCode === 13 && inputText.trim() !== '') {
        props.addList(inputText.trim());
        setInputText('');
      }
    };
    

  return (
    <div className='input-container'>
        <input
  type="text"
  name="input"
  className="input-box-todo"
  placeholder="Enter your todo task"
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
  onKeyDown={handleEnter}
/>
        <button className='add-btn'
         onClick={()=>{
            props.addList(inputText);
            setInputText("");
        }}>Save</button>
      
    </div>
  );

}
export default Todoinput
