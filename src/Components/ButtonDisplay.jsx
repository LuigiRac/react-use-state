import { useState } from "react";
import languages from "../data/languages"

function ButtonDisplay() {
    // console.log(languages);
    const languagesList = [...languages];
    const [activeLanguages, setActiveLanguages] = useState(languagesList[0]);


    return (
        <>
            <section className="container">
                <ul className="d-flex gap-2">
                    {
                        languagesList.map((languages) =>
                            <button className="btn btn-primary" type="submit" onClick={() => setActiveLanguages(languages)} key={languages.id}>{languages.title}
                            </button>
                        )
                    }
                </ul>
                <div className="box d-flex flex-wrap p-3">
                    <h4>{activeLanguages.title}</h4>
                    {activeLanguages.description}
                </div>
            </section>
        </>
    )
}

export default ButtonDisplay