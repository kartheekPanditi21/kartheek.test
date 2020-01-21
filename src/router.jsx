
import React, { Component } from 'react';  
import {Link,Route,Switch} from 'react-router-dom';  
import Home from './routercomponents/Home';  
import ProductList from './routercomponents/productList';  
import CategoryList from './routercomponents/categoryList';  
class Router extends Component {  
render() {  
return (  
<div>  
<nav>  
<ul>  
<li><Link to="/">Home</Link></li>  
<li><Link to="/product">Products List</Link></li>  
<li><Link to="/category">Category List</Link></li>  
</ul>  
</nav>  
<switch>  
<Route exact path="/" component={Home} />  
<Route path="/product" component={ProductList} />  
<Route path="/category" component={CategoryList} />  
</switch>  
 
</div>  
);  
}  
}  
export default Router;