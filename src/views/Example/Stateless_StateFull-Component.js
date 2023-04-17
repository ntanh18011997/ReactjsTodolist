import React from "react";

// Do again
// class Stateless extends React.Component{
    

//     render() {
//         console.log('>>>> check props:', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         let { name, age, address, arrJobs } = this.props ;
//         return (
//             <div>
//                 <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     }
//                 )}
//                 </div>
//             </div>
//         );
//     }
// }
// export default Stateless



// Viết theo function 
const Stateless = (props) => {
    let {arrJobs } = props ;
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
    )
}
export default Stateless
        