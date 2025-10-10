import Header from "../components/Header"
import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import imgData from "../assets/imgData.json"

export default function Explore(){
    const newImgData = new Array(
        imgData.food[0],
        imgData.food[1],
        imgData.food[2],
        imgData.food[3],
        imgData.home[0],
        imgData.home[1],
        imgData.home[2],
        imgData.home[3],
        imgData.travel[0],
        imgData.travel[1],
        imgData.travel[2],
        imgData.travel[3],
        imgData.lifestyle[0],
        imgData.lifestyle[1],
        imgData.lifestyle[2],
        imgData.lifestyle[3]
    )
    const exploreImgs = newImgData.sort(() => Math.random() - .5)

    return(
        <>
            <Header titleName="Explore"/>
            <Nav/>
            <Gallery page={exploreImgs}/>
        </>
    )
}