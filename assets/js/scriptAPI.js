const loadtext = () => {
fetch('https://api.chucknorris.io/jokes/random')
.then(response => { return response.json() })
.then(data => {
    let joke = data["value"];
    console.log(joke);
    document.getElementById("text-output").innerHTML = joke;
})}

document.getElementById("get-chuck").addEventListener("click", loadtext);