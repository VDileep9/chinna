import React, { Component } from 'react'
import Another from './Another'
import Function from './Function'

export class State extends Component {
  state={
   
   arr: [1,2,3,4,5,],

   name:"Raghu",
    location:"Hyderabad",
    age:25, 

    name1: "Mani",
    location1:"Bihar",
   age1:33, 
   
   name2:"Mahi",
   location2:"Vizag",
   age2:24,

   name3:"Chinna",
   location3:"Tenali",
   age3:32
  }
  render(props) {    
    return (
      <div>        
        <h1>{this.state.name}</h1>
        <h1>{this.state.location}</h1>
        <h1>{this.state.age}</h1> 
        <hr/>
        <h1>{this.state.name1}</h1>
        <h1>{this.state.location1}</h1>
        <h1>{this.state.age1}</h1>       
        <hr/>
        <h1>{this.state.name2}</h1>
        <h1>{this.state.location2}</h1>
        <h1>{this.state.age2}</h1> 
        <hr/>
        <h1>{this.state.name3}</h1>
        <h1>{this.state.location3}</h1>
        <h1>{this.state.age3}</h1> 
        <hr/>
        {this.state.arr.map((item,index)=>{
          return(
            <ul  key={index}>
              <li>{item}</li>
           </ul>
          )
        })} 
        <Another bike="pulser" 
        name= "Manu"
        location="Hyderabad"
        age="23"
        /> <hr/> 
                
      </div>
      
    )
  }
}

export default State  