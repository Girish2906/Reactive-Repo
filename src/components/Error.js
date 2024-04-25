import { useRouteError } from "react-router-dom"; 

const Error = () => {
    const msg = useRouteError()                                                                                 ; 
    console.log(msg) ; 
    console.log(typeof(msg)) ; 
    console.log(msg.status) ; 
    console.log(msg.statusText) ; 
    return (
        <div>
            <h1>OOPS!</h1>
            <h2>{msg.status}</h2>
            <h2>{msg.statusText}</h2>
        </div>
    )
} ; 

export default Error ; 