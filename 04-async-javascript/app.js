// function hello(){//3
//     console.log("hello ");//4
// }

// function demo(){//1
//     hello();//2
// }

// demo();

function savetoDb(){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed >4){
            resolve("success : data was saved");
        } else{
            reject("failure : weak connection");
        }
    });
}

savetoDb("Hk Pradhan")
  .then((result)=>{
    console.log("promise was resolved");
    console.log("result 1 of promise: ", result);
    return savetoDb("Hello world");
  })
  .then((result)=> {
    console.log("data 2 is saved");
    console.log("result 2 of promise: ", result);
    return savetoDb("Swadhin");
  })
  .then((result)=>{
    console.log("data3 is saved");
    console.log("result 3 of promise: ", result);
  })
  .catch((error)=>{
    console.log("result of promise: ", error);
    console.log("promise was rejected");
  });