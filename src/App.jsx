import { useState } from 'react'
import HtmlContent from "./Components/HtmlContent.jsx";
import CssContent from "./Components/CssContent.jsx";
import JsContent from "./Components/JsContent.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HtmlContent />
        <CssContent />
        <JsContent />
      </div>

    </>
  )
}

export default App
