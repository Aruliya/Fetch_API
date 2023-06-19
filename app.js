// Selector
const fetchButton = document.querySelector("button")
const fetchButtonDiv = document.querySelector(".fetch_button")
const fetchDiv = document.querySelector(".fetched_api_div")
const fetchedApi = document.querySelector(".fetched_API")

// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    fetchButton.addEventListener("click", fetching);
});



// Function
function fetching() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        displayData(data);

        // Removing the button
        fetchButton.remove();
        fetchButtonDiv.remove();
    })

    .catch(error => {
        console.log('Error: ', error);
    })

}

function displayData(data) {
    data.forEach(post =>{
        const title = post.title;
        const body = post.body;
        
        const newItem = document.createElement('li');
        newItem.classList.add("fetched-item");
        newItem.innerHTML = `<h3>${title}</h3><p>${body}</p>`;

        fetchDiv.appendChild(fetchedApi);
        fetchedApi.appendChild(newItem);
    })
}




