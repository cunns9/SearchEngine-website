
/*this.state = {
  searchBar: false
}

searchBar = () => {
    this.setState({ openSearch: false });
  }

  {
    this.state.searchBar ? (<div className={styles.searchBox}>
      <input type="text" placeholder="Search Inventory" onChange={(e) => this.searchMyInventory(e.target.value)} />
      <img alt="" src={require('../close1.png')} className={styles.closeSearch} onClick={() => this.searchBar()} />
    </div>) : (<div className={styles.search} onClick={() => this.setState({ searchBar: true })}>
      <img alt="" src={require("https://pokeapi.co/api/v2/pokemon/1/")} />
    </div>
  )}




$('#btn-area').click(function() {
    console.log("clicked");
    $('.wrapper').toggleClass('animate');

});*/

  /* 
    const data =  [
      {
        name: "DOG",
        id: "eeUJaTwsHh3tswkaYm",
        url: "https://media1.giphy.com/media/eeUJaTwsHh3tswkaYm/200.gif",
        slug: "on-skateboard",
      },
      {
        name: "Cat",
        id: "3o6Zt481isNVuQI1l6", 
        url: "https://media1.giphy.com/media/3o6Zt481isNVuQI1l6/200.gif", 
        slug: "cat-smoking",
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
    debugger;
    for (let animal of data) {
      nodes.push(animalToNode(animal) );
    }
    const markup = nodes.join("");

    document.querySelector ('.js-container').innerHTML = markup;
    */