import React from 'react';
import Genre  from './Genre';


function GenresInDb(){
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        let endpoint = 'http://localhost:7000/api/products';
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if(!data.errors){
                delete data.info.status;
                delete data.info.total;
                delete data.info.url;
                setCategories(data.info);
            }
        })
    })
    let genres = [
        {genre: 'Categoría 1'},
        {genre: 'Categoría 2'},
        {genre: 'Categoría 3'},
        {genre: 'Categoría 4'},
        {genre: 'Categoría 5'},
        {genre: 'Material 1'},
        {genre: 'Material 2'},
        {genre: 'Material 3'}
    ]
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorías de productos</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default GenresInDb;