export default function catalogo(data) {
    const element = document.createElement('div');
    const attribute = element.setAttribute("class", "peluditosClass")
    let body = document.querySelector('.peludines');
    body.prepend(element);

    const images = [
        "caticon.png",
        "dogicon.png"
    ];

    const peludinesList = `
        ${data.map(peludin =>
            `<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card">
                <img src="./assets/images/${peludin.pictures}" />   
                 
                <div class="card-block">
                    <div class="col-sm-3 col-md-3 col-lg-3 mt-3">
                        <h4 class="card-title">
                        <img src="./assets/im/${ peludin.especie == "gato" ? images[0] : images[1]}" /> 
                            ${peludin.name}
                        </h4>
                    </div>
                    <div class="col-sm-9 col-md-9 col-lg-9 mt-9">
                        <div class="meta">
                            ${peludin.name} es un ${peludin.especie} ${peludin.genero} de raza ${peludin.raza} que se encuentra ${peludin.status}
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                        <small>Last updated 3 mins ago</small>
                        <button class="btn btn-secondary float-right btn-sm checkbutton pull-right">Check</button>
                </div>
            </div>
        </div>`
        ).join('')}`;


    document.querySelector('.peludines').innerHTML = peludinesList;
}





