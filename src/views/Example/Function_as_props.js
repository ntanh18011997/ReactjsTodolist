import React from "react";


class AddComponents extends React.Component{
    state = {
        title : '',
        salary : '',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title : event.target.value,
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary : event.target.value,
        })
    }
    handleSubmit = (event) => {
        console.log(this.state)
        if(!this.state.title || !this.state.salary){
            alert('Missing required params')
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: '',
        })
    }
    render() {
        return(
            <form >
                    <label htmlFor="fname">Job's title: </label><br></br>
                    <input 
                        type="text" 
                        value={this.state.title}
                        onChange={(event) => {this.handleChangeTitleJob(event)}}
                    />
                    <br></br>
                    <label htmlFor="lname">Salary: </label><br></br>
                    <input 
                        type="text" 
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
export default AddComponents