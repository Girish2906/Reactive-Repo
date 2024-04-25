import User from "./User" ; 
import UserClass from "./UserClass" ; 
import React  from "react" ; 
// const About = () => {
    // return (
    //     <div>
    //         <h1>About us</h1>
    //         <h2>This is Namaste React Web Series</h2>
    //         {/* <User/> */}
    //         <UserClass name={"Girish Class Based Component"} location= {"Dehradun"} />
    //     </div>
    // ) ; 
// } ; 

class About extends React.Component{
    constructor(props){
        super(props) ; 
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent  class componentDidMount") ; 
    }
    render(){
        console.log("Parent render") ; 
        return (
            <div>
                <h1>About us</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* <User/> */}
                <UserClass name={"Girish Component 1"} location= {"Maharashtra"} />
                {/* <UserClass name={"Jeff Component 2"} location= {"Seattle"} />
                <UserClass name={"Bill Component 2"} location= {"Washington DC"} /> */}
            </div>
        ) ; 
    }
}

export default About ; 