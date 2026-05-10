let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");


btn.addEventListener("click" ,async ()=>{
    let imageUrl = await getImage();
    let dogImage = document.querySelector("#dogImage");
    dogImage.src = imageUrl;
})


async function getImage(){
    try{
        let fetch =await axios.get(url);
        console.log(fetch.headers); 
        return fetch.data.message;
        
    }
    catch(err){
        return "/";
    }
}