import Header from "../components/Header"
import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import imgData from "../assets/imgData.json"

export default function Explore(){
    const exploreImgs = imgData.food.concat(imgData.lifestyle, imgData.travel)
    
    return(
        <>
            <Header titleName="Explore"/>
            <Nav/>
            <Gallery page={exploreImgs}/>
        </>
    )
}