import React from 'react';
import HomePage from "./HomePage";

class HomeContainer extends React.Component{
  render(){
    return(
      <div>
        <HomePage history={this.props.history} />
      </div>
    )
  }
}

export default HomeContainer;