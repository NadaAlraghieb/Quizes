import React, {component} from 'react'

class Main extends component{
constructor(){
    super();
    this.state ={
        message:"",
        message2:"",
    }
}
componentDidMount() {
    // Changing the state after 600ms
    setTimeout(() => {
      this.setState({ message: 'welcome to the jungle' });
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.message2 === this.state.message2) {
      this.setState({
        message2: "quiz are awesome :)",
      });
    }
  }
render(){
    return(
        <div>
           <h1> {this.state.message}</h1>
           <h1> {this.state.message2}</h1>
        </div>
    )
}
}
