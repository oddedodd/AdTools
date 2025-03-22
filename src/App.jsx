import { useState } from 'react';

import ScriptInput from './components/ScriptInput';
import ScriptPreview from './components/ScriptPreview';

import './App.css'

function App() {
  const [scriptContent, setScriptContent] = useState('');

  const handleScriptSubmit = (content) => {
    setScriptContent(content);
  };

  return (
    <>
      <ScriptInput onScriptSubmit={handleScriptSubmit} />
      <ScriptPreview scriptContent={scriptContent} />
    </>
  )
}

export default App
