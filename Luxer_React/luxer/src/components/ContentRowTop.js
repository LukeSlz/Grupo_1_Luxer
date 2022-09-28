import React from 'react';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

function ContentRowTop(){
	const [lastProduct, setLastProduct] = React.useState([]);
	React.useEffect(() => {
		let endpoint = "http://localhost:7000/api/products";
		fetch(endpoint)
		.then(response => response.json())
		.then(data => {
			let lastIndex = data.data.length - 1;
			setLastProduct(data.data[lastIndex]);
		})
	})
	const [productPic, setProductPic] = React.useState([]);
	React.useEffect(() => {
		let endpoint = `http://localhost:7000/api/products/${lastProduct.id}`;
		fetch(endpoint)
		.then(response => response.json())
		.then(data => {
			if(!data.error){
				setProductPic(data.data.linkToImage);
			}else{
				setProductPic([]);
			}
		})
	})
	let linkToLastProduct = `http://localhost:7000/products/${lastProduct.id}`
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={productPic} style={{width: 40 +'rem'}} alt={lastProduct.name} />
									</div>
									<h5>{lastProduct.name}</h5>
									<p>{lastProduct.description}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href={linkToLastProduct}>Ver detalle del producto</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;