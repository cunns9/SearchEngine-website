// search button
   let APIKEY = "3ETIiTXeDJi0vF4xILeMB3oUvi4YDn4i";

   // https://developers.giphy.com/dashboard/
   document.addEventListener("DOMContentLoaded", init);
   function init() {
     document.getElementById("btnSearch").addEventListener("click", ev => {
       ev.preventDefault(); //to stop the page reload
       alert();



       let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=5&q=`;
       let str = document.getElementById("search").value.trim();
       url = url.concat(str);
       fetch(url)
         .then(response => response.json())
         .then(content => {
           //  data, pagination, meta
           console.log(content.data)
           console.log('META', content.meta)
           
           let fig = document.createElement("figure");
           let img = document.createElement("img");
           let fc = document.createElement("figcaption");
           img.src = content.data[0].images.downsized.url;
           img.alt = content.data[0].title;
           fc.textContent = content.data[0].title;
           fig.appendChild(img);
           fig.appendChild(fc);
           let out = document.querySelector(".out");
           out.insertAdjacentElement("afterbegin", fig);
           document.querySelector("#search").value = "";
         })
         .catch(err => {
           console.error(err);
         });
     });
   }

//bottom of page display
   const data =  [
    {
      name: "Dog",
      id: "eeUJaTwsHh3tswkaYm",
      url: "https://media1.giphy.com/media/eeUJaTwsHh3tswkaYm/200.gif",
      slug: "on-skateboard",
    },
    {
      name: "Cat",
      id: "3o6Zt481isNVuQI1l6", 
      url: "https://media1.giphy.com/media/l4KibK3JwaVo0CjDO/200.gif", 
      slug: "cat-in-a-box",
    },
    {
      name: "Hamster", 
      id: "DZpCatccCBsGI", 
      url: "https://media1.giphy.com/media/DZpCatccCBsGI/200.gif", 
      slug: "funny-mom-hamster", 
    },
    {
      name: "Wolf",
      id: "iQd8LQFSTsN4Q",
      url: "https://media1.giphy.com/media/iQd8LQFSTsN4Q/200.gif", 
      slug: "wolf-absinthius",
    }
  ]

  function animalToNode (animal) {
      return`
      <div class= "text-label">
      <h2>${animal.name}</h2>
      <p>${animal.slug}</p>
      <img src="${animal.url}" alt="img of ${animal.name}" class="animals-img"/>
      </div>
      `;
  }

  const nodes = [];
  for (let animal of data) {
    nodes.push(animalToNode(animal) );
  }
  const markup = nodes.join("");

  document.querySelector ('.js-container').innerHTML = markup;