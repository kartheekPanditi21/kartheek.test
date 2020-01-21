import React, { Component } from 'react';  
const Product=({match,data})=>{  
var product=data.find(p=>p.id===Number(match.params.productId));  
var pdata;  
if(product)  
pdata=<div>  
<h3>{product.name}</h3>  
<p>{product.description}</p>  
<hr></hr>  
<h4>{product.status}</h4> </div>;  
else  
pdata=<h2>sorry product not available</h2>  
return(  
<div>{pdata}</div>  
)  
}  
export default Product;