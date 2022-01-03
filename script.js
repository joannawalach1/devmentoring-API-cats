async function fetchApi() {
    const catsAPI = 'https://api.thecatapi.com/v1/breeds/';
    await fetch(catsAPI)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                var wrapper = document.querySelector(".wrapper");
                var card = document.createElement("div");
                card.className = "card";
                wrapper.appendChild(card);
                    var name = document.createElement("p");
                    card.appendChild(name);
                    name.innerText = data[i].name;
                    var description = document.createElement("p");
                    card.appendChild(description);
                    description.innerText = data[i].description;
                    var image = document.createElement("img");
                    card.appendChild(image);
                    image.src = data[i].image.url;
            }
        })
        .catch((err) => {
            console.log(err)
        });
}
 
fetchApi();
