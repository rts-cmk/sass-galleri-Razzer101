import Header from "../components/Header"
import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import imgData from "../assets/imgData.json"

export default function Lifestyle(){
    return(
        <>
            <Header titleName="Lifestyle"/>
            <Nav/>
            <Gallery page={imgData.lifestyle}/>
        </>
    )
}