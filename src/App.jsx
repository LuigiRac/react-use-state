import { useState } from 'react'
import HtmlContent from "./Components/HtmlContent.jsx";
import CssContent from "./Components/CssContent.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HtmlContent />
        <CssContent />
      </div>

    </>
  )
}

export default App
