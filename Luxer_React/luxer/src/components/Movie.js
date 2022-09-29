import React from 'react';

import MovieList from './MovieList';

function Movie(){
	const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        let endpoint = "http://localhost:7000/api/products";
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (!data.error){
                setProducts(data.data);
            }else{
                setProducts([]);
            }
        })
        .catch(e => console.log(e));
    })
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los productos en la Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										{products.map((product, index) => {
											return <tr>
												<th>{product.id}</th>
												<th>{product.name}</th>
												<th>{product.description}</th>
												<th>{product.images}</th>
												<th>{product.material_id}</th>
												<th>{product.category_id}</th>
												<th>{product.price}</th>
										</tr>
										})}
									</thead>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;