/*
1. Props : Property
2. Truyền dữ liệu từ thằng cha => thằng con 
*/
// import React from "react";


// class ChildComponent extends React.Component{

//     render() {
//         console.log('>>>> Check props :', this.props )
//         // let name = this.props.name;
//         // let age = this.props.age;
//         // key:value
//         let { name, age } = this.props;
//         return(
//             <div id='root'>
//                 <div>Child component name: {name}</div>
//                 <div>Child component age: {age}</div>
//             </div>
//         )
//     }
// }

// export default ChildComponent



// Do again
import React from "react";
class ChildComponent extends React.Component{
    

    render() {
        console.log('>>>> check props:', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address, arrJobs } = this.props ;
        return (
            <div>
                <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    }
                )}
                </div>
            </div>
        );
    }
}
export default ChildComponent