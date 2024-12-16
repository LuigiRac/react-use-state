import { useState } from 'react'
import HtmlContent from "./Components/HtmlContent.jsx";
import CssContent from "./Components/CssContent.jsx";
import JsContent from "./Components/JsContent.jsx";
import NodeContent from "./Components/NodeContent.jsx";
import ExpressContent from "./Components/ExpressContent.jsx";
import ReactContent from "./Components/ReactContent.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HtmlContent />
        <CssContent />
        <JsContent />
        <NodeContent />
        <ExpressContent />
        <ReactContent />
      </div>

    </>
  )
}

export default App
