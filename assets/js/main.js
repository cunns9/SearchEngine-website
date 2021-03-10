const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input"); 
const searchData = document.querySelector(".search-data"); 
searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    if (searchInput.value != ""){
        let values = searchInput.value;
        searchData.classList.remove("active");
        searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
    }else{
        searchData.innerHTML = "";
    }
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.add("active");
    searchInput.value = "";   
}

function () {
    var userInput = document.getElementById("search-btn");
    var inputVal = "";
    if (userInput) {
        inputVal = userInput.value;
    }
    console.log(userInput)

    var giphyApiKey = "3ETIiTXeDJi0vF4xILeMB3oUvi4YDn4i"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

    fetch(giphyApiURL).then(function(data) {
        return data.json()
    })
    .then(function(json){
        alert('done');
        console.log(json.data[0].images.fixed_height.url)
        var imgPath =json.data[0].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    })
}


/*const searchinput = document.getElementById('searchBar');
searchinput.addEventListener('input', () => {
console.log('input event fired');
});

//for animation//

const animated = document.querySelector('.wrapper.animated');
animated.addEventListener('animationend', () => {
console.log ('Animation ended');
});

const url = "https://pokeapi.co/api/v2/generation/";
const output = document.querySelector('.output');

fetch(url).then(function(res) {
    console.log(res);
    return res.json()
}).then(function(results) {
    console.log(results.results);
    results.results.forEach(function(val) {
        output.innerHtml += val.name;
    });
}).catch(function(error) {
    console.log(error);
})*/