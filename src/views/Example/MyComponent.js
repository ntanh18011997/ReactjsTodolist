/*
1. 2 components: class component / function component ( function, arrow )
2. JSX : Code HTML bên trong javascript, 1 hàm sẽ trả ra 1 đống HTML
3. React.Fragment : Tag không cần bọc gì ở ngoài
4. <> </> : Tag không cần bọc gì ở ngoài
5. State: Trải nghiệm người dùng , realtime
*/


import React from "react";

class MyComponent extends React.Component {
    
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
export default MyComponent;