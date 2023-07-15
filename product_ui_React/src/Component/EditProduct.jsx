import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EditProduct(){
    const [product, setProduct] = useState({
        id : "",
        productName : "",
        productDesc : "",
        price : "",
        status : ""
    })

    const {id} =  useParams();

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name] : value})
    }

    const ProductRegister = (e) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch(("http://localhost:8080/edit/"+id),{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body : demo
        }).then(r => {console.log(r.json())})
        e.preventDefault();
        alert("Product Updated Successfully");
        navigate("/");
    }

    useEffect(()=>{
        fetch("http://localhost:8080/"+id).then(res => res.json()).then(result => setProduct(result))
    
    },[])

    const navigate = useNavigate();

    return(
        <div className="container mt-3"> {/* creates container */}
            <div className="col-md-6 offset-md-3">     {/* 6 - row length/ 3 - offset from left  */}
                <div className="card border-3">                  {/* creates card */}
                    <div className="card-header fs-3 text-center">Edit Product</div>  {/* card header / font size / center text */}
                    <div className="card-body">             
                        <form onSubmit={ProductRegister}>
                            <div>
                                <label>Enter Product Name</label>
                                <input type="text" name="productName" className="form-control" onChange={(e)=>handleChange(e)} value={product.productName || ""} />
                            </div><br/>
                            <div>
                                <label>Enter Product Description</label>
                                <input type="text" name="productDesc" className="form-control" onChange={(e)=>handleChange(e)} value={product.productDesc || ""} />
                            </div><br/>
                            <div>
                                <label>Enter Product Price</label>
                                <input type="text" name="price" className="form-control" onChange={(e)=>handleChange(e)} value={product.price || ""} />
                            </div><br/>
                            <div>
                                <label>Enter Product Status</label>
                                <input type="text" name="status" className="form-control"  onChange={(e)=>handleChange(e)} value={product.status || ""} />
                            </div><br/>
                            <button className="btn btn-primary col-md-12" >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}