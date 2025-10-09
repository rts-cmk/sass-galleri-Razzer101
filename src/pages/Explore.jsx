import Header from "../components/Header"
import Nav from "../components/Nav"
import imgData from "../assets/imgData.json"

export default function Explore(){
    const exploreImgs = imgData.food.sort().concat(imgData.home, imgData.lifestyle)
    
    return(
        <>
            <Header titleName="Explore"/>
            <Nav/>
            <section className="explore-gallery">
                {exploreImgs.map((imgElm) => {
                    return(
                        <img className="explore-gallery__img" key={imgElm.name} src={`/${imgElm.name}`} alt={imgElm.name} />
                    )
                })}
            </section>
        </>
    )
}