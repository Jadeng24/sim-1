import React, { Component } from "react";
import image from "./shelfie.png";
import { Link } from "react-router-dom";
import Bin from "./Bin.js";
export default class Shelf extends Component {


    ComponentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="homeHeader">
                    <Link to="/"><img className="logo shelfLogo" src={image} alt="logo" /></Link>
                    <div className="headerContent shelfHeader">

                        <h1>Shelf {this.props.shelf}</h1>

                    </div>{/* end of header content */}
                </div>{/* end of home header */}


                <div className="mainContentHolder">
                    <div className="mainContent">
                        <Link to=""><div className="shelfDiv">
                            <h2>Bin 1</h2>
                            {
                                this.setState({
                                    bin: 1
                                })
                            }
                        </div></Link>
                        <Link to=""><div className="shelfDiv">
                            <h2>Bin 2</h2>
                            {
                                this.setState({
                                    bin: 2
                                })
                            }
                        </div></Link>
                        <Link to=""><div className="shelfDiv addBin">
                            <h2>+ Add inventory to bin</h2>
                            {
                                this.setState({
                                    bin: 3
                                })
                            }
                        </div></Link>
                        <Link to=""><div className="shelfDiv">
                            <h2>Bin 4</h2>
                            {
                                this.setState({
                                    bin: 4
                                })
                            }
                        </div></Link>
                        <Link to=""><div className="shelfDiv">
                            <h2>Bin 5</h2>
                            {
                                this.setState({
                                    bin: 5
                                })
                            }
                        </div></Link>
                    </div>{/* end of main content */}
                </div>{/* end of main content holder     */}
            </div>
        )
    }
}