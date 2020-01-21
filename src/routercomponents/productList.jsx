import React, { Component } from 'react';  
import {Link,Route,Switch} from 'react-router-dom';  
import Product from './Product';  
const ProductList=({match}) =>{  
const pdata=[  
{ 'id':1,'name':'NIKE','description':'GOOD SHOES','status':'Available' },  
{ 'id':2,'name':'US POLO','description':'BAD SHOES','status':'Available' },  
{ 'id':3,'name':'ADIDAS','description':'GOOD','status':'Available' },  
{ 'id':4,'name':'LEE','description':'FORMAL','status':'OUT OF STOCK' }  
];  
var linkList=pdata.map((product)=>{  
return(  
<li key={product.id}>  
<Link to={`${match.url}/${product.id}`}>  
{product.name}  
</Link>  
</li>  
)  
})
return (  
    <div>  
    <h3>  
    <ul>{linkList}</ul>  
    </h3>  
    <Route path={`${match.url}/:productId`} render={(props)=><Product data={pdata}{...props} />}/>  
    <Route exact path={match.url}  
    render={()=>(  
    <div>please select product</div>  
    )}  
    />  
    </div>  
    )  
    }  
    export default ProductList;