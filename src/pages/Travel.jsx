import Header from "../components/Header"
import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import imgData from "../assets/imgData.json"

export default function Travel(){
    return(
        <>
            <Header titleName="Travel"/>
            <Nav/>
            <Gallery page={imgData.travel}/>
        </>
    )
}