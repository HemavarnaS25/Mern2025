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
/*function promiseEg(value){
    /*var promise = new Promise(function(resolve,reject){
        resolve("This is a Promise Example");
    });

    return new Promise(function(resolve,reject){
        if(value === 1){
            resolve("This is a resolve Promise Example");
        }
        else if(value === 0){
            reject("This is a reject Promise Example")
        }
        
    });

}

//console.log(promiseEg(7)); //Promise { <pending> }
//console.log(promiseEg(0));
promiseEg(0).then((res)=>{
    console.log(res);
}).catch((rej) =>{
    console.log(rej);
})
*/

//locationfinder

//pass 2 things - melboune , 2000



locationFinder = (location,time)=>{
    return new Promise((locationFound,locationNotFound) =>{
        setTimeout(()=>{
            if(isLocationValid(location,time)){
                locationFound([location,"Found in",time,"millisecs"]);
            }
            else{
                locationNotFound([location,"Not Found in",time,"millisecs"]);
            }
        },time)
        
    })
    
}

function isLocationValid(loc,time){
    location = "melboune";
    t = 2000;
    if(loc === location && time <= t){
        return true;
    }
    else{
        return false;
    }
}

locationFinder("melboune",2001).then((result) =>{
    console.log(result);
}).catch((err) =>{
    console.log(err);
})