import React  from "react" ;

class UserClass extends React.Component{
    constructor(props ){
        super(props) ; 
        this.state = {
            userInfo : 0 
        }


        console.log("Child constructor") ; 
    }
    async componentDidMount(){
        console.log("Component Did mount function called") ; 
        // console.log(this.props.name +   "Child class componentDidMount") ; 
        const data = await fetch("https://api.github.com/users/akshaymarch7") ; 
        const json = await data.json() ; 
        console.log(json) ; 
        this.setState({
            userInfo: json
        }) ; 

    }
    async componentDidUpdate(){
        console.log("Component did update")
    }
    async componentWillUnmount(){
        console.log("Component will unmound462453!@$#!%$@") ; 
    }
    render(){

        console.log("Child render") ; 
        // console.log("Child rendered " + this.props.name) ; 
        const {name , location , avatar_url} = this.state.userInfo ; 
        return (
            <div class = "user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Best teacher: {avatar_url}</h3>
                <h3>Contact @Girish_2906</h3>
                <img src={avatar_url} alt="" />
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1 , 
                        count2: this.state.count2 + 1 
                    })
                }}>Shit1</button> */}
                 {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1 , 
                        count2: this.state.count2 + 1 
                    })
                }}>Shit2</button> */}
                {/* <h1>This is {this.props.name}</h1>
                <h2>Class based {this.props.location}</h2> */}
                {/* <h2 >Best React developer in the world</h2>
                <h3>Contact Girish_2906@instagram</h3> */}
            </div>
        )
    }
}

export default UserClass ; 