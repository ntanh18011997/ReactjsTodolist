/*

*/

// import React from "react";

// class MyState extends React.Component {
    
//     state = {
//         name: "",
//         channel: "Vlog",
//     }
//     handleOnchangeName = (event) =>{
//         console.log(event.target.value , 'Event target', event.target, 'Event', event)
//         this.setState({
//             name: event.target.value,
//             channel: "abc"
//         })
//     }

//     render() {
//         console.log('>>> Call render : ', this.state)
//         return (
//             <React.Fragment>
//             <div className="first">
//                 <input value={this.state.name} type="text"
//                         onChange={(event) => this.handleOnchangeName(event)}
//                 />
//                     Hello my component, My name is {this.state.name}
//                 </div>
//             </React.Fragment>  
//         )
//     }
// }
// export default MyState;


//Test again
import React from "react";

class MyState extends React.Component{
    state = {
        name : '',
        channel : 'Youtube',
    }
    
    handleOnChange = (event) => {
        this.setState({
            name : event.target.value,
        })
    }

    render() {
        return(
            <div id="root">
                <input type="text"
                    onChange={(event) => this.handleOnChange(event)}
                />
                My name is {this.state.name}
            </div>
        ) 
    }
}

export default MyState