import React, { Component } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { HotToursProducts } from "./HotToursProducts";
const HotTours = () => {
    return (
        <>
              <Navigation />
              <div className="banner"></div>
            <HotToursProducts/>
              <Footer />
        </>
    )
}

export default HotTours;