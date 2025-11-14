import Header from "../components/Header"
import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import imgData from "../assets/imgData.json"

export default function Food(){
    return(
        <>
            <Header titleName="Food"/>
            <Nav/>
            <Gallery page={imgData.food}/>
        </>
    )
}