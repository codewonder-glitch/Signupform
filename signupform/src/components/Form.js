import React, { Component } from 'react'
import FormRender from './FormRender';
export default class FormParent extends Component{
    constructor(props)
    {
      super(props)
      this.state={
        name1:" ",
        password:' ',
        age:" ",
        occupation:" ",
        gender:" ",
        renderchild:false
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleGenderClick=this.handleGenderClick.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target.name,event.target.value)
    }
    handleGenderClick(event) {
        this.setState({gender: event.target.value});
        
    }
    handleSubmit=(e)=> {
      e.preventDefault();
        //this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
      this.setState({renderchild:true})
       
    }
  
    render(){
    return (
        <form id="form1" onSubmit={this.handleSubmit}>
      <div className="App">
        <label>  
        Name: 
        <br />
        <input name="name1" type="text"  value={this.state.name1} onChange={this.handleChange}/>
        </label>
        <br />

        <label>
        Password:
        <br />
        <input name="password" type="password"  value={this.state.password} onChange={this.handleChange}/>
        </label>
        <br />

        <label> 
        Age:
        <br />
        <input name="age" type="number"  value={this.state.age} onChange={this.handleChange}/>
        </label>
        <br />

        <label> 
        Gender:
        <br />
        <select className='twoOptions' size="2" onClick={this.handleGenderClick}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          </select>
        </label>
        <br />
          
        <label> 
        Occupation:
        <br />
        <input name="occupation" type="text"  value={this.state.occupation} onChange={this.handleChange}/>
        </label>
        <br />

        <input type="submit"  />
  {this.state.renderchild===true && <FormRender Details={this.state} />}
       
      </div>
      </form>
    );
    }
  }