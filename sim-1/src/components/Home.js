import React, { Component } from "react";
import Shelf from "./Shelf";
import Bin from "./Bin";
import image from "./shelfie.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            shelf: "",
            bin: ""

        }
        this.giveState = this.giveState.bind(this);
    }

    giveState() {
        this.state.shelf;
    }
    render() {
        
    
        return (
            <div className="holdAll">
                <div className="homeHeader shelfHeader">
                    <div className="headerContent">
                        <img className="logo" src={image} alt="logo" />
                        <h1>SHELFIE</h1>
                    </div>{/* end of header content */}
                </div>{/* end of home header */}
                <div className="mainContentHolder">
                    <div className="mainContent">
                        <Link to="/shelf/a"><div className="shelfDiv">
                            <h2>Shelf A</h2>
                            {
                                this.setState({
                                shelf: "a"
                                })
                            }
                        </div></Link>
                        <Link to="/shelf/b"><div className="shelfDiv">
                            <h2>Shelf B</h2>
                            {
                                this.setState({
                                    shelf: "b"
                                })
                            }
                        </div></Link>
                        <Link to="shelf/c"><div className="shelfDiv">
                            <h2>Shelf C</h2>
                            {
                                this.setState({
                                    shelf: "c"
                                })
                            }
                        </div></Link>
                        <Link to="shelf/d"><div className="shelfDiv">
                            <h2>Shelf D</h2>
                            {
                                this.setState({
                                    shelf: "d"
                                })
                            }
                        </div></Link>
                    </div>{/* end of main content */}
                </div>{/* end of main content holder     */}
                
            </div>
        )
    }
}