import { useState } from "react"

export function AddProduct(){
    const [product, setProduct] = useState({
        productName : "",
        productDesc : "",
        price : "",
        status : ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({...product, [e.target.name] : value})
    }

    const ProductRegister = (e) => {
        let demo = JSON.stringify(product);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/save",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body : demo
        }).then(r => {console.log(r.json())})
        e.preventDefault();
        alert("Product Added Successfully");
    }

    

    return(
        <div className="container mt-3"> {/* creates container */}
            <div className="col-md-6 offset-md-3">     {/* 6 - row length/ 3 - offset from left  */}
                <div className="card border-3">                  {/* creates card */}
                    <div className="card-header fs-3 text-center">Add Product</div>  {/* card header / font size / center text */}
                    <div className="card-body">             
                        <form onSubmit={ProductRegister}>
                            <div>
                                <label>Enter Product Name</label>
                                <input type="text" name="productName" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Product Description</label>
                                <input type="text" name="productDesc" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Product Price</label>
                                <input type="text" name="price" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Product Status</label>
                                <input type="text" name="status" className="form-control"  onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <button className="btn btn-primary col-md-12" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}