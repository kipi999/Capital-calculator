import React from "react"
import FormComponent from "./FormComponent"

class FormContainer extends React.Component {

    state = {
        initialCapital: 0,
        monthlyPay: 0,
        percent: 0,
        capitalization: "month",
        inflation: 0,
        years: 0
    }

    handleChange = (event) => {
        var {name,value} = event.target
        this.setState({[name]: value})
    }

    render()
    {
        return(
            <FormComponent handleChange={this.handleChange} initialCapital={this.state.initialCapital} monthlyPay={this.state.monthlyPay} percent={this.state.percent} capitalization={this.state.capitalization} inflation={this.state.inflation} years={this.state.years} />
        )
    }
}

export default FormContainer