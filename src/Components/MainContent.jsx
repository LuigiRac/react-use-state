import HtmlContent from "./ButtonComponents/HtmlContent.jsx";
import CssContent from "./ButtonComponents/CssContent.jsx";
import JsContent from "./ButtonComponents/JsContent.jsx";
import NodeContent from "./ButtonComponents/NodeContent.jsx";
import ExpressContent from "./ButtonComponents/ExpressContent.jsx";
import ReactContent from "./ButtonComponents/ReactContent.jsx";
import DisplayContent from "./DisplayComponent/DisplayContent.jsx";

import { useState } from 'react'

import languages from "../data/languages.js";

function MainContent() {

    return (
        <main className="container">
            <div>
                <HtmlContent />
                <CssContent />
                <JsContent />
                <NodeContent />
                <ExpressContent />
                <ReactContent />
            </div>

            <div>
                <DisplayContent />
            </div>

        </main>
    )
};



export default MainContent;