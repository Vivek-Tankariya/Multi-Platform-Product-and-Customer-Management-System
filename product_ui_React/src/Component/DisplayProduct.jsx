import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export function DisplayProduct(){
    
    const {id} = useParams({});

    const [product,setProduct] = useState({
        productName : "",
        productDesc : "",
        price : "",
        status : ""
    });

    useEffect(()=> {
        fetch("http://localhost:8080/"+id).then(res => res.json()).then(result => {setProduct(result)})
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card" style={{ width: '30rem' }} >
                        <div className="card-header fs-3 text-center">
                            Details of Product Id : {id}
                        </div>
                        <img src= {"/"+id+".jpg"} class="card-img-top" alt="/default.png" width={12}></img>
                        <div className="card-body text-center">
                            <strong>Product Name : </strong><span>{product.productName}</span><br/>
                            <strong>Product Description : </strong><span>{product.productDesc}</span><br/>
                            <strong>Product Price : </strong><span>{product.price}</span><br/>
                            <strong>Product Status : </strong><span>{product.status}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}