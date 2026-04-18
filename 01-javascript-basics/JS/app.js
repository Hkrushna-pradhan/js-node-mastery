let r = Math.floor(Math.random() *10)+1;
while (true){
    let a = prompt("Enter the number");
    if(r==a){
        console.log("right guess good job");
        break;
    }
    else{
        console.log("try again");
    }
}