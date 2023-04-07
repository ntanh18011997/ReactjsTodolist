
// /*
// Bắt buộc dùng arrow function cho event
// */
import React from "react";


class MyExample extends React.Component {
    
    handleClickButton = () => {
        alert('sss')
    }

    render() {
        return (
            <React.Fragment>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </React.Fragment>  
        )
    }
}
export default MyExample ;
