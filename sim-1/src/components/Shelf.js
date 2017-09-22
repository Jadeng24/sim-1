import React, { Component } from "react";
import image from "./shelfie.png";
import { Link } from "react-router-dom";
import Bin from "./Bin.js";
export default class Shelf extends Component {
    render() {
        return (
            <div>
                <div className="homeHeader">
                    <Link to="/"><img className="logo" src={image} alt="logo" /></Link>
                    <div className="headerContent shelfHeader">

                        <h1>Shelf #</h1>

                    </div>{/* end of header content */}
                </div>{/* end of home header */}


                <div className="mainContentHolder">
                    <div className="mainContent">
                        <div className="shelfDiv">
                            <h2>Bin 1</h2>
                        </div>
                        <div className="shelfDiv">
                            <h2>Bin 2</h2>
                        </div>
                        <div className="shelfDiv">
                            <h2>Bin 3</h2>
                        </div>
                        <div className="shelfDiv">
                            <h2>Bin 4</h2>
                        </div>
                        <div className="shelfDiv">
                            <h2>Bin 5</h2>
                        </div>
                    </div>{/* end of main content */}
                </div>{/* end of main content holder     */}
            </div>
        )
    }
}