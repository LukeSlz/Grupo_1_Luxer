import React from 'react';
import SmallCard from './SmallCard';

function ContentRowTop(){

    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        let endpoint = "http://localhost:7000/api/products";
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (!data.error){
                setProducts(data.info.total);
            }else{
                setProducts([]);
            }
        })
        .catch(e => console.log(e));
    })
    let totalProducts = {
        color:   "success",
        titulo: "Total Productos",
        valor: products,
        icono: "fas fa-award"
    }
    ////////////////////////////////
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        let endpoint = "http://localhost:7000/api/users";
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (!data.error){
                setUsers(data.info.total);
            }else{
                setUsers([]);
            }
        })
        .catch(e => console.log(e));
    })
    let totalUsers = {
        color:   "success",
        titulo: "Total Usuarios",
        valor: users,
        icono: "fas fa-award"
    }
    ////////////////////////////////
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        let endpoint = "http://localhost:7000/api/products";
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (!data.error){
                setCategories(8); //Sum of the categories
            }else{
                setCategories([]);
            }
        })
        .catch(e => console.log(e));
    })
    let totalCategories = {
        color:   "success",
        titulo: "Total Categorías",
        valor: categories,
        icono: "fas fa-award"
    }
    

let cardProps = [totalProducts, totalUsers, totalCategories];


    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;