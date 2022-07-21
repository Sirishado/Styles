import React from 'react';
import './mystyle.css';


function Style(props)
{
    let primary =props.primary?'primary':'';
return(
    
<div>
<h1 className={'${primary} font-xl'}>Learn React JS</h1>
</div>
)
}
export default Style;
