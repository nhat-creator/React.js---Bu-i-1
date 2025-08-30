import Header from "./header/header";
import Carousel from "./carousel/carousel";
import ListItem from "./listItem/listItem";
import Footer from "./footer/footer";

function Page(){
    return (
        <div>
            <Header/>
            <Carousel/>
            <ListItem/>
            <Footer/>
        </div>
    )
}

export default Page;