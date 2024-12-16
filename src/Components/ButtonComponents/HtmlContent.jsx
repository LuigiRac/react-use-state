import { useState } from 'react'


function HtmlContent() {
    const [count, setCount] = useState(0);
    function incrementa() {
        setCount(count + 1);
        console.log(count);

    }
    return (
        <>

            {/* <div className="counter">{count}</div> */}
            <button className="btn btn-primary" onClick={incrementa}>HTML</button>


        </>
    );
};



export default HtmlContent;
