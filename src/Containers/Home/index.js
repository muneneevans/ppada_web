import React, { Component} from "react"

import styles from "./style.css"

import yogurt from "./images/piggy.jpg"
import building from "./images/building.jpeg";
import logo from "./images/ppada.png"

class Home extends Component{
    render(){
        return <div className="body">
            <div className="header">
              <img className="logoImage" src={logo} />
            </div>

            <div className="content">
              <div className="banner">
                <img className="bannerImage" src={building} />
              </div>
              <div className="dummy text" />
            </div>

            <div className="footer">
              <div>
                <div className="connect">
                  <a href="http://freewebsitetemplates.com/go/facebook/" class="facebook">
                    <i class="fa fa-facebook-square" aria-hidden="true" />                    
                  </a>
                  <a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">
                    twitter
                  </a>
                  <a href="http://freewebsitetemplates.com/go/googleplus/" class="googleplus">
                    googleplus
                  </a>
                  <a href="http://pinterest.com/fwtemplates/" class="pinterest">
                    pinterest
                  </a>
                </div>
              </div>
              <div className="connect">
                <p>&copy; 2023 Freeeze. All Rights Reserved.</p>
              </div>
            </div>
          </div>;
    }
}

export default Home