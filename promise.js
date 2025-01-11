function promiseExample(flag){
    return new Promise(function(resolve,reject){
        if(flag===1){
        resolve("This is a promise resolve example")
        }else if(flag===0){
            reject("This is a promise rejection example")
        }
    })
}
promiseExample(1).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})
