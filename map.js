const MAP_URL = "https://countries.plaul.dk/api/countries"


// Get parent element
const mapElement = document.body;

// Add event listener that console logs target.id
mapElement.addEventListener('mouseover', async function(evt){
    const target = evt.target;

    if(target.id === "dk"){
        const country = await fetchCountryByID(target.id);
        console.log(country)
        countryAsHtml = convertCountryToString(country)
        console.log(countryAsHtml)

        const infoClass = document.getElementById("showInfo")

        infoClass.innerHTML = countryAsHtml;

    }
});


async function fetchAllContries(){
    const response = await fetch(MAP_URL)
        .then(res => res.json())
        .then(data => data);

    console.log(response);
    return await response
}

async function fetchCountryByID(id){
    const response = await fetch(MAP_URL + "/" + id)
    return await response.json();
}

function convertCountryToString(countryObject){
    return "<h2>" + countryObject.name.common + "</h2>";
}
