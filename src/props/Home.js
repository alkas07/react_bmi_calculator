import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Formz from '../props/form';

class Home extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <div className="outer">
                    <div className="inner">
                       <Formz/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Home;