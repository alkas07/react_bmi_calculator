import React from 'react';

import '../App.css';
import Buttonz from '../props/Buttonz';

class Formz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    weightChange = (weightValue) => {
        this.setState({ weight: weightValue.target.value });
    }



    heightChange = (heightValue) => {
        this.setState({ height: heightValue.target.value });
        console.log(heightValue.target.value)
    }
    


    render() {
        return (
            <div>

                <label>
                    <h2 className="h2-style">BMI CALCULATOR</h2>
                    <p> &emsp;  <input type="text" placeholder="Name" name="name"  value = {this.state.name} size="25" /> </p>
                    <p> &emsp;  <input type="text" placeholder="Age" name="age"  value = {this.state.age} size="25"/> &ensp; years </p>
                    <p> &emsp;  <input type="text" placeholder="Enter your height in meter" name="height" onChange={this.heightChange} value = {this.state.height} size="25"/> &ensp; m </p>
                    <p> &emsp;  <input type="text" placeholder="Enter your weight in kilogram" name="weight" onChange={this.weightChange} value = {this.state.weight} size="25" /> &ensp; kg</p>
                    <Buttonz label="SUBMIT" onClick={this.computeBmi} /><br></br>
                    <div>
                        {
                            isNaN(this.state.bmi) ? null : <p>Your BMI = {this.state.bmi} kg/m<sup>2</sup></p>
                        }

                    </div>
                    <div>
                        <h4 style={{ color: 'red', textAlign : 'center' }} >{this.state.bmiClass}</h4>
                    </div>
                    
                    <div>
                    <img className ="bmi-img" src={this.getBmiImage(this.state.bmiClass)} alt="bmiImage"></img>
                    </div>
                </label>
            </div>

        )
    }
    computeBmi = () => {

        let bmiValue = (this.state.weight / (this.state.height * this.state.height));
        this.setState({ bmi: bmiValue });
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass: bmiClass });
        this.setState({ weight: "" });
        this.setState({ height: "" });
        console.log("bmiValue : " + bmiValue);
        console.log("bmiClass : " + bmiClass);
    }

    getBmi(bmi) {
        if (bmi < 20) {
            return "Underweight";
        }
        if (bmi >= 20 && bmi < 25) {
            return "Normal weight";
        }
        if (bmi >= 25 && bmi < 30) {
            return "Overweight";
        }
        if (bmi >= 30) {
            return "Obese";
        }
    }

    getBmiImage(bmiImg) {
        switch(bmiImg) {
            case 'Normal weight':
              return 'normalweight.jpg';
              case 'Obese':
              return 'obesity.jpg';
              case 'Overweight':
              return 'over-weight.png';
              case 'Underweight':
              return 'underweight.jpg';
            default:
              return 'bmi.jpg';
          }
    }
}



export default Formz;



