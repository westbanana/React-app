import React from "react";
import Header from "./HeaderComponents/Header";
import MainContainer from "./MainComponents/MainContainer";
import FooterContainer from "./FooterComponents/FooterContainer";
import VideoSmoke from "./SmokeBg.mov"

const App = () => {
    return(
        <>
            {/* <video src={VideoSmoke} autoPlay className="video"></video> */}
            <Header/>
            <MainContainer/>
            <FooterContainer/> 
        </>
    )
}

export default App;