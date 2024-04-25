import { type } from "os";
import React from "react" ; 
import ReactDOM from "react-dom/client" ;


const jsxHeading = <h1   id = "heading" className="head" tabIndex="1">Namaste React using JSX 🚀</h1>

console.log(jsxHeading) ; 

const root = ReactDOM.createRoot(document.getElementById("root")) ; 

root.render(jsxHeading) ; 

const HeadingComponent1 = () => {
     <h1>Namaste React Functional Component</h1>
}

const Title = () => {
    return (
       <h1 className="turn"> This is a functional Component with return statement</h1>
   )
}

const HeadingComponent = () => (
   <div> 
        <Title/>
        <h1 id = "container">Namaste React Functional Component</h1>
    </div>
) ; 
// console.log(typeof(HeadingComponent)); 
// console.log(HeadingComponent) ; 

root.render(<HeadingComponent/> ) ; 

const element = React.createElement("h1" , {} , "This is a normal heading") ; 
console.log(typeof(element)) ; 
console.log(element) ; 


// const rturn = () => {
//      return (
//         <h1 className="turn"> This is a functional Component with return statement</h1>
//     )
// }