export default function catalogo(data){
    var productos = [];
    data.forEach(element => {
        productos.push(
            `<div class="col-md-3 col-sm-6">
                
                <span class="thumbnail">
                    <h4>${element.articulo}</h4>
                    <p>${element.descripcion}</p>
                    <div class="img-container">
                        <img src="./assets/products/producto_${element.id}.jpg" alt="...">
                    </div>
                    <hr class="line">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <p class="price">${element.precio}</p>
                        </div>
                    </div>
                </span>
            </div>`
        )
    });
    var list = productos.reverse();
    document.querySelector('#products-container').innerHTML = list;
 }