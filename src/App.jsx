import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80 transition-opacity">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-7xl font-bold mb-8">Vite + React</h1>
      <div className="p-6 rounded-lg bg-gray-800 mb-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors mb-4"
        >
          count is {count}
        </button>
        <p className="text-gray-300">
          Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
