import { useState } from "react"

export function AddCustomer(){
    const [cust, setCust] = useState({
        name : "",
        email : "",
        age : "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setCust({...cust, [e.target.name] : value})
    }

    const CustomerRegister = (e) => {
        let demo = JSON.stringify(cust);
        console.log(JSON.parse(demo));
        fetch("http://localhost:5000/add",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body : demo
        }).then(r => {console.log(r.json())})
        e.preventDefault();
        alert("Customer Added Successfully");
    }

    

    return(
        <div className="container mt-3"> {/* creates container */}
            <div className="col-md-6 offset-md-3">     {/* 6 - row length/ 3 - offset from left  */}
                <div className="card border-3">                  {/* creates card */}
                    <div className="card-header fs-3 text-center">Add Customer</div>  {/* card header / font size / center text */}
                    <div className="card-body">             
                        <form onSubmit={CustomerRegister}>
                            <div>
                                <label>Enter Cutomer Name</label>
                                <input type="text" name="name" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Customer Email</label>
                                <input type="text" name="email" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Customer Age</label>
                                <input type="text" name="age" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            
                            <button className="btn btn-primary col-md-12" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}