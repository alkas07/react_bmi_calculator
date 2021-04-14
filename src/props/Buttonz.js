import React from 'react';

import '../App.css';

class Buttonz extends React.Component {

    render() {
        return (
        
                    <div>
                        <button className="button" onClick={this.props.onClick}>
                        {this.props.label}
                        </button>
                    </div>
          
        )
    }
}

export default Buttonz;