 import React from "react"
 import { Suspense } from "react"
 import About from "../About"
 
 const  LazyLoadingWithSuspense =() =>{

    return(
        <div>
            <Suspense>
                 <h2>This is Lazy Loading components with suspense</h2>
                 <About />
                 </Suspense>
           
        </div>
    )
}
export default LazyLoadingWithSuspense