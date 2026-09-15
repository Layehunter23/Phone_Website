import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Headers = [{'title':"Phones"},{'title': "Smart Watches"},{'title':"Cameras"},{'title':"Headphones"},{'title':"Computers"},{'title':"Gaming"}]

function HomePage(){

    return(
        
        <>
        
        <NavBar></NavBar>
        <img src='/Banner.svg'></img>
        <img src='/Smaller Banners.svg'></img>
        
        
        <Footer></Footer>
        
        
        </>
    )

}

export default HomePage