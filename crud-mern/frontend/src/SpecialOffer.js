import React, { Component } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { SpecialOfferProducts} from "./SpecialOfferProduct"
const SpecialOffer = () => {
    return (
        <>
              <Navigation />
              <div className="banner"></div>
              <SpecialOfferProducts/>
              <Footer />
        </>
    )
}

export default SpecialOffer;