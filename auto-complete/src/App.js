import React, { useState } from "react";
import './App.css';

const corrections = {
  'realy': 'really',
  'wierd': 'weird',
  'abc': 'bc'
};

const TextArea = ({ handleChange, value }) => (
    <textarea rows={20} cols={40} name="input-box" onChange={handleChange} value={value}/>
);

function App() {
    const [parsedString, setParsedString] = useState('');

    const handleChange = (e) => {
      let strArr = e.target.value.split(' ');

      strArr = strArr.map(word => corrections[word] || word);
          
      setParsedString(strArr.join(" "));
    }
    
    return (
        <div className="App">
            <TextArea handleChange={handleChange} value={parsedString}/>
        </div>
    );
}

export default App;
