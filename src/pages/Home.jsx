import Header from "../components/Header"
import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import imgData from "../assets/imgData.json"

export default function Home(){
    return(
        <>
            <Header titleName="Home"/>
            <Nav/>
            <Gallery page={imgData.home}/>
        </>
    )
}