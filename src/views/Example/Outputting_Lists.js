import React from "react";

class OutputtingLists extends React.Component {
    
    state = {
        name: "Tuan Anh 1",
        channel: "Vlog",
    }
    handleOnchangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
            <div className="first-name">
                <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                />
                    Hello my component, My name is {this.state.name}
                </div>
                <div className="last-name">
                    My youtube channel {this.state.channel}
                </div>
            </React.Fragment>  
        )
    }
}
export default OutputtingLists;