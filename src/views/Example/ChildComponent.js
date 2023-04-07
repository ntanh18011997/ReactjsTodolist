/*
1. Quan he cha con 
2. Truyen data từ thằng cha xuống thằng con 
*** Test o file Form.js
*/

import React from "react";


class ChildComponent extends React.Component{

    render() {
        console.log(this.state)
        return(
            <div id='root'>
                <div>Child component : {this.props.name}</div>
            </div>
        )
    }
}

export default ChildComponent