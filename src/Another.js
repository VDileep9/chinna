import React, { Component } from 'react'

export class Another extends Component {
  render(props) {
    return (
      <div > 
        <p> Javascript is a scripting programing languag {this.props.bike} </p>
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.age}</p>
      </div> 
    )
  } 
}

export default Another