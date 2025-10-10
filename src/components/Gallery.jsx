export default function Gallery({page}){
        return(
        <section className="gallery">
                {page.map((imgElm) => {
                    return(
                        <figure className="gallery__figure" key={imgElm.name}>
                            <img loading="lazy" className="gallery__img" src={`/${imgElm.name}`} alt={imgElm.name} />
                        </figure>
                    )
                })}
        </section>
    )
}