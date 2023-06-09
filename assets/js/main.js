const url = 'https://swapi.dev/api/people'

const consultarAPI = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(resp => resp.json()).then(data => {
            console.log(data);
            resolve(data)
        })
    })
}

function* generador1(){
    yield consultarAPI(`${url}/1?format=json`).then(resp => $("#lista1").append(`
    <div class="col-4">
                <div class="card" id="card1">
                    <div class="card-body d-flex justify-content-evenly m-4">
                        <span class="red-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/2?format=json`).then(resp => $("#lista1").append(`
    <div class="col-4 mt-3 d-flex justify-content-evenly">
            <div class="vr" style="height: 150px;"></div>
                <div class="card mx-3" id="card1">
                    <div class="card-body d-flex justify-content-evenly m-4">
                        <span class="red-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/3?format=json`).then(resp => $("#lista1").append(`
    <div class="col-4 mx-2">
                <div class="card" id="card1">
                    <div class="card-body d-flex justify-content-evenly m-4">
                        <span class="red-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/4?format=json`).then(resp => $("#lista1").append(`
    <div class="col-4 mt-3 d-flex justify-content-evenly">
            <div class="vr" style="height: 150px;"></div>
                <div class="card mx-3" id="card1">
                    <div class="card-body d-flex justify-content-evenly m-4">
                        <span class="red-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/5?format=json`).then(resp => $("#lista1").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card1">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="red-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
}

function* generador2(){
    yield consultarAPI(`${url}/6?format=json`).then(resp => $("#lista2").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card2">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="green-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/7?format=json`).then(resp => $("#lista2").append(`
    <div class="col-4 mt-3 d-flex justify-content-evenly">
            <div class="vr" style="height: 150px;"></div>
                <div class="card mx-3" id="card2">
                    <div class="card-body">
                        <span class="green-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/8?format=json`).then(resp => $("#lista2").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card2">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="green-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/9?format=json`).then(resp => $("#lista2").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card2">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="green-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/10?format=json`).then(resp => $("#lista2").append(
        `<div class="col-4 mt-3">
                <div class="card" id="card2">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="green-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
}

function* generador3(){
    yield consultarAPI(`${url}/11?format=json`).then(resp => $("#lista3").append(
        `<div class="col-4 mt-3">
            
                <div class="card" id="card3">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="blue-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/12?format=json`).then(resp => $("#lista3").append(`
        <div class="col-4 mt-3 d-flex justify-content-evenly">
            <div class="vr" style="height: 150px;"></div>
                <div class="card mx-3" id="card3">
                    <div class="card-body">
                        <span class="blue-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/13?format=json`).then(resp => $("#lista3").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card3">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="blue-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/14?format=json`).then(resp => $("#lista3").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card2">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="blue-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
    yield consultarAPI(`${url}/15?format=json`).then(resp => $("#lista3").append(`
    <div class="col-4 mt-3">
                <div class="card" id="card2">
                    <div class="card-body d-flex justify-content-evenly">
                        <span class="blue-dot"></span>
                        <div class="row col-9 ">
                        <h5>${resp.name}</h5>
                    <p>Altura: ${resp.height} cm. Peso: ${resp.mass} kg.</p>
                    </div>
                </div>
            </div>
        </div>`));
}

const g1 = generador1();
const g2 = generador2();
const g3 = generador3();

$(document).ready(function(){
    $("#card1").mouseenter(function() {
        g1.next()
    })

    $("#card2").mouseenter(function() {
        g2.next()
    })

    $("#card3").mouseenter(function() {
        g3.next();
    })
})