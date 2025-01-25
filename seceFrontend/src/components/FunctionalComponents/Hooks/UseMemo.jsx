 import { useMemo,useState } from "react";

var slowFunction=(num)=>{
    for(var slow=0; slow<100000;slow++){
        return num*2;
    }
};
const UseMemo =() =>{
    var [num,SetNum] =useState(0);
    var [dark,setDark]=useState(false);
    var styling ={
        backgroundColor : dark ? "black" : "white",
        color:dark ? "white" :"black"
    }
    var doublingUpNumber = useMemo(()=>{
        return slowFunction(num)
    },[num])
    // var doublingUpNumber = useMemo(()=>{
    //     return num*2
    // }
    
return(
    <div style={styling}>
        <h3>This page is ment for useMemo Hook</h3>
        <input type="number " value={num} onChange={(e)=>SetNum(e.target.value)}></input>
        <button onClick={()=>setDark(curTheme => !curTheme)}>Toogle Theme</button>
        <h4 style={styling}>The number is {doublingUpNumber}</h4>
    </div>
)
} 
export default UseMemo;