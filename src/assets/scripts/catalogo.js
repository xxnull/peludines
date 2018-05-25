export default function catalogo(data) {
    const element = document.createElement('div');
    const attribute = element.setAttribute("class", "peluditosClass")
    let body = document.querySelector('.peludines');
    body.prepend(element);
    
    const peludinesList = `
        ${data.map(peludin =>
            `
                
                <ul>
                    <li>
                    <div class="peludin_image">
                    </div>
                    </li>
                    <li>${peludin.name}</li> 
                    <li>${peludin.size}</li>
                    <li>${peludin.color}</li>
                    <li>${peludin.raza}</li>
                    <li>${peludin.status}</li>
                    <li>${peludin.geo}</li>
                    <li>${peludin.email}</li>
                    <li>${peludin.responsable}</li>
                    <li>${peludin.pais}</li>
                    <li>${peludin.barrio}</li>
                    <li>${peludin.descripcion}</li>
                </ul>
                
           `
        ).join('')}`;


    document.querySelector('.peludines').innerHTML = peludinesList;
}

