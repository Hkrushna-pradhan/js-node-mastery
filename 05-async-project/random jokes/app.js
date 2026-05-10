let url = "https://icanhazdadjoke.com/";

let btn = document.querySelector("button");

async function getJokes() {
    try{
        const config = {headers:{ accept: "application/json"}};
        let res =await axios.get(url, config);
        console.log(res.data.joke);

    }
    catch{

    }
}