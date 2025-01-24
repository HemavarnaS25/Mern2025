import { useState } from "react";
import UpdateNumber1 from "./UpdateNumber1";
import UpdateNumber2 from "./UpdateNumber2";

const Memo=()=>{
        var[num1,setNum1]= useState(0);
        var[num2,setNum2]= useState(0);
return(
    <div>
        <h1>This page is ment for Optimization Process using React.Memo</h1>
        <UpdateNumber1 value={num1}/>
        <button onClick={()=>setNum1(num1 +1)}>+</button>
        <UpdateNumber2 value={num2}/>
        <button onClick={()=>setNum2(num2 +1)}>+</button>
        {/* <UpdateText /> */}
    </div>
);
};
export default Memo