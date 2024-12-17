import HtmlContent from "./ButtonComponents/HtmlContent.jsx";
import CssContent from "./ButtonComponents/CssContent.jsx";
import JsContent from "./ButtonComponents/JsContent.jsx";
import NodeContent from "./ButtonComponents/NodeContent.jsx";
import ExpressContent from "./ButtonComponents/ExpressContent.jsx";
import ReactContent from "./ButtonComponents/ReactContent.jsx";
import DisplayContent from "./DisplayComponent/DisplayContent.jsx";




function MainContent() {

    return (
        <main className="container">
            <div className="d-flex Justify-content-start gap-3 mb-3">
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