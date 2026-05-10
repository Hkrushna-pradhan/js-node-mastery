let url = "https://catfact.ninja/fact";

let button = document.querySelector("button");
button.addEventListener("click",async ()=>{
    let p = document.querySelector("p");
    let fact = await getfacts();
    p.innerText = fact;
    console.log("button was clicked");
})

 async function getfacts(){
    try{
        let res = await axios.get(url)
        return res.data.fact;
    }
    catch{
        return "no facts";
    }
    
}
