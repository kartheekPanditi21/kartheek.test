/*import React, { Component } from 'react';

class Counters extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Counters;*/
import React, { Component } from 'react';  
import Counter from './counter'  
class Counters extends Component {  
render() {  
const {counters,onReset,onIncrement,onDelete}=this.props;  
return (  
<div>  
<button onClick={onReset}>  
Reset  
</button>  
{counters.map(counter=>(  
<Counter  
key={counter.id}  
onDelete={onDelete}  
onIncrement={onIncrement}  
counter={counter}  
/>  
))}  
</div>  
);  
}  
}  
export default Counters;