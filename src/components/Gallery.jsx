import { useState } from "react"

export default function Gallery({page}){
    const [targetImg, setTargetImg] = useState(null)
    const [toggleDisplay, setToggleDisplay] = useState("none")
        return(
            <>
                <section className="gallery">
                    {page.map((imgElm) => {
                        return(
                            <button className="gallery__btn" key={imgElm.name} onClick={() => {
                                setTargetImg(imgElm.name)
                                setToggleDisplay("grid")
                            }}>
                                <img loading="lazy" className="gallery__img" src={`/${imgElm.name}`} alt={imgElm.name} />
                            </button>
                        )
                    })}
                </section>
                <section className={`modal-section modal-section--${toggleDisplay}`}>
                    <button className="modal-section__btn" onClick={() => {
                        setTargetImg(null)
                        setToggleDisplay("none")
                    }}>X</button>
                    <img className="modal-section__img" src={`/${targetImg}`} alt={targetImg} />
                </section>
            </>
    )
}