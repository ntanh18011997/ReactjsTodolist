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


class Form extends React.Component{
    state = {
        firstName : '',
        lastName : '',
        arrJob: [
            {id : 'abcJob1', title : 'Deloper', salary : '500 $'},
            {id : 'abcJob2', title : 'Testers', salary : '400 $'},
            {id : 'abcJob3', title : 'Project managers', salary : '1000 $'},
        ]
    }



    handleFirstName = (event) => {
        this.setState({
            firstName : event.target.value,
        })
    }
    handleLastName = (event) => {
        this.setState({
            lastName : event.target.value,
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
    }
    render() {
        console.log(this.state)
        return(
            <div id='root'>
                <form >
                    <label htmlFor="fname">First name:</label><br></br>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => {this.handleFirstName(event)}}
                    />
                    <br></br>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={(event) => {this.handleLastName(event)}}
                    />
                    <br></br>
                    <input 
                        type="button" 
                        value="Submit"
                        onClick={(event) => {this.handleSubmit(event)}}
                    />
                </form> 
                <ChildComponent
                    name = {this.state.firstName}
                    age = {this.state.lastName}
                    address = {this.state.address}
                    arrJobs = {this.state.arrJob}
                />
                
            </div>
        )
    }
}

export default Form