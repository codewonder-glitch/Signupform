import React, { Component } from 'react'

 const FormRender=(props)=>{

return(
<div>
    <h1>Form input values are</h1>
<p> User name is {props.Details.name1}</p>
<p> Password is {props.Details.password}</p>
<p> Age is {props.Details.age}</p>
<p>Gender is {props.Details.gender}</p>
<p> Occupation is {props.Details.occupation}</p>
</div>
)
}
export default FormRender;