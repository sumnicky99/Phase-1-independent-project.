let btn = document.getElementById("search").addEventListener("click", function(e) 
{
    e.preventDefault()
        fetch("http://api.citybik.es/v2/networks") 
            .then(response => 
{
                if (!response.ok) {
                    throw new Error("Failed to fetch data from the API");
}
                return response.json(fetch);
})
            .then(data => {
// Process and display data
                console.log(data)
                displayData(data);
})
            .catch(error => {
console.error(error);
});
});
function displayData(data) {
    const resultDiv = document.getElementById("search-result");
    resultDiv.innerHTML = ""; // Clear previous results

// Iterate over the networks and display information
    data.networks.forEach(network => {
    const networkDiv = document.createElement("div");
        networkDiv.textContent = network.name;
        resultDiv.appendChild(networkDiv);
});
}
console.log(displayData)
console.log(btn)

function buttonMouseOver(){let search = document.getElementById("search")
    search.addEventListener("mouseover",()=>{
        search.style.background = "maroon";
        search.style.opacity = 0.8
})}
buttonMouseOver()
function buttonMouseOut(){
    let search= document.getElementById("search")
    search.addEventListener("mouseout",()=>{
        search.style.background = "pink"; 
        search.style.opacity = 0.8
})}
buttonMouseOut()
const apiUrl = "http://api.citybik.es/v2/networks";
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch data from the API");
        }
        return response.json();
    })
    .then(data => {
        const specificItem = data.networks.find(item => 
            item.id === "bbbike" && 
            item.name === "BBBike" && 
            item.href === "/v2/networks/bbbike"
);
        if (specificItem) {
            console.log("found the item:", specificItem);
        } else {
            console.log("item not found");
        }
    })
    .catch(error => {
        console.error("error fetched:", error);
    });
