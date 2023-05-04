// import React from "react";

// class Form extends React.Component{


//     state = {
//         firstName : "",
//         lastName : '',
//     }
//     handleChaneFirstName = (event) => {
//         this.setState({
//             firstName : event.target.value,
//         })
//     }
//     handleChaneLastName = (event) => {
//         this.setState({
//             lastName : event.target.value,
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         console.log('>>>> Check data input: ', this.state)
//     }

//     // Re-render
//     render() {
//         console.log(this.state)
//         return (
//             <div>
//                 <form>
//                     <label htmlFor="fname">First name:</label><br></br>
//                     <input 
//                         type="text" 
//                         value={this.state.firsName}
//                         onChange={(event) => this.handleChaneFirstName(event)}
//                     />
//                     <br></br>
//                     <label htmlFor="lname">Last name:</label><br></br>
//                     <input 
//                         type="text" 
//                         value={this.state.lastName}
//                         onChange={(event) => this.handleChaneLastName(event)}
//                     /><br></br>
//                     <input type="button" value="Submit"
//                         onClick={(event) => this.handleSubmit(event)}
//                     />
//                 </form>
//             </div>
//         )
//     }
// }

// export default Form




// Do again
import React from "react";
import ChildComponent from "./Props";
import Stateless from "./Stateless_StateFull-Component";
import Conditional from "./Conditional_Output.js";
import AddComponent from "./Split_Components";
import AddComponents from "./Function_as_props";
import DeletingData from './DeletingData'

class Form extends React.Component{
    state = {
        arrJob: [
            {id : '1', title : 'Deloper', salary : '500'},
            {id : '2', title : 'Testers', salary : '400'},
            {id : '3', title : 'Project managers', salary : '1000'},
        ]   
    }
    addNewJob = (job)  => {
        console.log('check job from parent:' , job)
        let currentJobs = this.state.arrJob;
        currentJobs.push(job)
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJob: currentJobs
        })
    }

    deleteAjob = (job) => {
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        console.log('>>>>>>>>>>>: ', currentJobs)
        this.setState({
            arrJob: currentJobs
        })
    }
    render() {
        // console.log(this.state)
        return(
            <div id='root'>
                {/* <AddComponents 
                    addNewJob= {this.addNewJob}
                /> */}
                <DeletingData
                    addNewJob= {this.addNewJob}
                    
                />
                {/* <ChildComponent
                    name = {this.state.firstName}
                    age = {this.state.lastName}
                    address = {this.state.address}
                    arrJobs = {this.state.arrJob}
                /> */}
                {/* <Stateless
                    name = {this.state.firstName}
                    age = {this.state.lastName}
                    address = {this.state.address}
                    arrJobs = {this.state.arrJob}
                /> */}
                <Conditional
                    arrJobs = {this.state.arrJob}
                    deleteAjob= {this.deleteAjob}
                />
                
            </div>
        )
    }
}

export default Form