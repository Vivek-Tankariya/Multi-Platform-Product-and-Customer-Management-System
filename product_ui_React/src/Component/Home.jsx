import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Home(){

    const [productList,setProductList] = useState([]);

    const init = ()=> {
        fetch("http://localhost:8080/").then(res => res.json()).then(result => {setProductList(result);});
    }

    useEffect(() => {
        init();
    },[]);

    const deleteProduct = (id) => {
       const c = window.confirm("Are you sure ? ")
       if(c){
        fetch(("http://localhost:8080/"+id),{
            method : "DELETE"
        }).then(res => init());
    }
        
    }

    return(
        <div className="container my-2">
            <h2 className="text-center">All Products</h2>
            <div className="row">
            {productList.map((prod) => (
                <div key={prod.id} className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{prod.productName}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{prod.productDesc}</h6>
                            <p className="text-muted">Rs. {prod.price}</p>
                            <Link to={"dispProduct/"+prod.id} className="btn btn-sm btn-primary">Display</Link>
                            <Link to={"editProduct/"+prod.id} className="btn btn-sm btn-primary ms-1">Edit</Link>
                            <button className="btn btn-sm btn-danger ms-1" onClick={()=> deleteProduct(prod.id)}>Delete</button>

                        </div>
                    </div>    
                </div>
            ))}
            </div>
           
        </div>
    )
}