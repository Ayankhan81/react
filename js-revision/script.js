import App from "./function.js";
import {Navbar} from "./function.js"

console.log(App());


// Explicit rerurn
const greet=()=>{
    return "Welcome"
}
console.log(greet());

// implicit return

const sum=(n1,n2)=>n1+n2;
console.log(sum(4,7));


function useState(initialState){
    return [initialState, ()=>{}];
}

const[state , setState]=useState("Hello")


let arr=[10,20,30,40]

arr.forEach((ele, idx, array)=>{
    console.log(ele, idx, array);
    
})
arr.map((ele, idx, array)=>{
    console.log(ele, idx, array);
    
})