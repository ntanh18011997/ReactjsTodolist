// import React from "react";
// Viết theo function 
// const Conditional = (props) => {
//     let {arrJobs } = props ;
//         return (
//             <div>
//                 <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     }
//                 )}
//             </div>
//         </div>
//     )
// }
// export default Conditional

import React from "react";
class Conditional extends React.Component{
    state = { 
        showJobs : false
    }
    handleShowHide = () => {
        this.setState({
            showJobs : !this.state.showJobs
        })
    }
    handleOnclikDelete = (job) =>{
        console.log(job)
        this.props.deleteAjob(job)
    }
    render() {
        let { arrJobs } = this.props;
        console.log('this is arrJobs:', arrJobs)
        let { showJobs } = this.state;
        let check = showJobs === true ? 'ShowJob = true' : ' ShowJob =  false';
        console.log('>>>> check conditional : ', check)
        return (
            <div>
                {showJobs === false ?
                <div>
                    <button onClick={() => this.handleShowHide()}>Show</button>
                </div>
                :
                <>
                    <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary} <></> 
                                <span 
                                onClick={
                                    () => this.handleOnclikDelete(item)}>x</span>
                            </div>
                        )
                    }
                )}
                    </div>
                <div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                </div>
                </>}
            </div>
        );
    }
}
export default Conditional