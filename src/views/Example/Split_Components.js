import React from "react";

class AddComponent extends React.Component{
    state = {
        titleJob : '',
        salary : '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob : event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary : event.target.value,
        })
    }
    handleSubmit = (event) => {
        console.log(this.state)
    }
    render() {
        return(
            <form >
                    <label htmlFor="fname">Job's title: </label><br></br>
                    <input 
                        type="text" 
                        value={this.state.titleJob}
                        onChange={(event) => {this.handleChangeTitleJob(event)}}
                    />
                    <br></br>
                    <label htmlFor="lname">Salary: </label><br></br>
                    <input 
                        type="password" 
                        value={this.state.salary}
                        onChange={(event) => {this.handleChangeSalary(event)}}
                    />
                    <br></br>
                    <input 
                        type="button" 
                        value="Submit"
                        onClick={(event) => {this.handleSubmit(event)}}
                    />
            </form> 
        )
    }
}
export default AddComponent