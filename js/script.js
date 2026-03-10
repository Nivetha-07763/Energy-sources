var plants = [

    { name: "Kamuthi Solar Power Plant", state: "Tamil Nadu", type: "Solar" },
    { name: "Muppandal Wind Farm", state: "Tamil Nadu", type: "Wind" },
    { name: "Kudankulam Nuclear Power Plant", state: "Tamil Nadu", type: "Nuclear" },
    { name: "Neyveli Thermal Power Plant", state: "Tamil Nadu", type: "Thermal" },

    { name: "Bhadla Solar Park", state: "Rajasthan", type: "Solar" },
    { name: "Jaisalmer Wind Park", state: "Rajasthan", type: "Wind" },

    { name: "Tarapur Nuclear Power Plant", state: "Maharashtra", type: "Nuclear" },
    { name: "Koyna Hydroelectric Plant", state: "Maharashtra", type: "Hydro" },

    { name: "Tehri Hydropower Plant", state: "Uttarakhand", type: "Hydro" },
    { name: "Talcher Thermal Power Plant", state: "Odisha", type: "Thermal" }

];

function displayPlants(list) {

    var container = document.getElementById("plantContainer");

    container.innerHTML = "";

    list.forEach(function (p) {

        container.innerHTML +=

            `<div class="col-md-4">

<div class="card plant-card">

<div class="card-body">

<h5>${p.name}</h5>

<p><b>State:</b> ${p.state}</p>

<p><b>Energy Type:</b> ${p.type}</p>

</div>

</div>

</div>`;

    });

}

displayPlants(plants);

function filterPlants() {

    var searchValue =
        document.getElementById("searchInput").value.toLowerCase();

    var stateValue =
        document.getElementById("stateFilter").value;

    var filtered = plants.filter(function (p) {

        var matchName =
            p.name.toLowerCase().includes(searchValue);

        var matchState =
            (stateValue === "all" || p.state === stateValue);

        return matchName && matchState;

    });

    displayPlants(filtered);

}

document
    .getElementById("searchInput")
    .addEventListener("keyup", filterPlants);

document
    .getElementById("stateFilter")
    .addEventListener("change", filterPlants);