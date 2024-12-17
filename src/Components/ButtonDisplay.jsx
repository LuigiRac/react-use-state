import languages from "../data/languages"

function ButtonDisplay() {
    // console.log(languages);

    const languagesList = [...languages];
    return (
        <>
            <section className="container">
                <ul className="d-flex gap-2">
                    {
                        languagesList.map((languages) => <button className="btn btn-primary" type="submit" key={languages.id}>{languages.title}</button>
                        )
                    }
                </ul>
                <div className="box">

                </div>
            </section>
        </>
    )
}

export default ButtonDisplay