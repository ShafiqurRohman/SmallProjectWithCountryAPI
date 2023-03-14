
const display = document.getElementById('display');


// function fatchData(){
//     fetch('https://restcountries.com/v2/all').then((response) => {
//         console.log(typeof response);
//         return response.json();
//     }).then((data) => {
//         let output = '';
//         for(let i = 0; i < data.length; i++){
//             output += `
//             <div class="card">
//                 <div class="card-header">
//                     <h2>${data[i].name}</h2>
//                 </div>
//                 <div class="card-body">
//                     <h4>Capital: ${data[i].capital}</h4>
//                     <h4>Region: ${data[i].region}</h4>
//                     <h4>Population: ${data[i].population}</h4>
//                     <h4>Area: ${data[i].area}</h4>
//                     <h4>Timezone: ${data[i].timezones}</h4>
//                     <h4>Flag: <img src="${data[i].flag}" alt="flag"></h4>
//                 </div>
//             </div>
//             `;
//         }
//         display.innerHTML = output;
//         console.log(output);
//     }).catch((error) => {
//         console.log(error);
//     });
// }


// async function fatchData(){
//     const response = await fetch('https://restcountries.com/v2/all');
//     const data = await response.json();
//     let output = '';
//     for(let i = 0; i < data.length; i++){
//         output += `
//         <div class="card">
//             <div class="card-header">
//                 <h2>${data[i].name}</h2>
//             </div>
//             <div class="card-body">
//                 <h4>Capital: ${data[i].capital}</h4>
//                 <h4>Region: ${data[i].region}</h4>
//                 <h4>Population: ${data[i].population}</h4>
//                 <h4>Area: ${data[i].area}</h4>
//                 <h4>Timezone: ${data[i].timezones}</h4>
//                 <h4>Flag: <img src="${data[i].flag}" alt="flag"></h4>
//             </div>
//         </div>
//         `;
//     }
//     display.innerHTML = output;

// }


async function openModal(countryName){

    try{
    const domTittle = document.getElementById('exampleModalLabel');
    const domShowData = document.getElementById('show-data');

    const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
    const data = await response.json();
    [capital, region, population, area, timezones, flag] = [data[0].capital, data[0].region, data[0].population, data[0].area, data[0].timezones, data[0].flag];
    //console.log(data);
    domTittle.innerHTML = data[0].name;
    let output = '';
    output += `
        <div class="card">
            <div class="card-body">
                <h4>Capital: ${capital}</h4>
                <h4>Region: ${region}</h4>
                <h4>Population: ${population}</h4>
                <h4>Area: ${area}</h4>
                <h4>Timezone: ${timezones}</h4>
                <h4>Flag: <img src="${flag}" height="200" width="400" alt="flag"></h4>
            </div>
        </div>
        `;
    console.log(data);
    domShowData.innerHTML = output;
    }
    catch(error){
        console.log(error);
    }
}

async function getData(){
    try{
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        let output = '';
        for(let i = 0; i < data.length; i++){
            output += `
            <div class="card m-3" style="width: 18rem;">
            <img src="${data[i].flag}" class="card-img-top" alt="Flag">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Capital: ${data[i].capital}</li>
            </ul>
            <div class="card-body">
              <button onClick = "openModal('${data[i].name}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
            </div>
          </div>
            `;
        }
        display.innerHTML = output;
    }
    catch(error){
        display.innerHTML = error;
    }
}