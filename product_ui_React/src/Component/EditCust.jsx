import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EditCust(){
    const [cust, setCust] = useState({
        _id : "",
        name : "",
        email : "",
        age : "",
    })

    const {id} =  useParams();

    const handleChange = (e) => {
        const value = e.target.value;
        setCust({...cust, [e.target.name] : value})
    }

    const CustRegister = (e) => {
        let demo = JSON.stringify(cust);
        console.log(JSON.parse(demo));
        fetch(("http://localhost:5000/"+id),{
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body : demo
        }).then(r => {console.log(r.json())})
        e.preventDefault();
        alert("Customer Updated Successfully");
        navigate(-1);
    }

    useEffect(()=>{
        fetch("http://localhost:5000/"+id).then(res => res.json()).then(result => setCust(result))
    
    },[])

    const navigate = useNavigate();

    return(
        <div className="container mt-3"> {/* creates container */}
            <div className="col-md-6 offset-md-3">     {/* 6 - row length/ 3 - offset from left  */}
                <div className="card border-3">                  {/* creates card */}
                    <div className="card-header fs-3 text-center">Edit Customer</div>  {/* card header / font size / center text */}
                    <div className="card-body">             
                        <form onSubmit={CustRegister}>
                            <div>
                                <label>Enter Customer Name</label>
                                <input type="text" name="name" className="form-control" onChange={(e)=>handleChange(e)} value={cust.name || ""} />
                            </div><br/>
                            <div>
                                <label>Enter Customer Email</label>
                                <input type="text" name="email" className="form-control" onChange={(e)=>handleChange(e)} value={cust.email || ""} />
                            </div><br/>
                            <div>
                                <label>Enter Customer Age</label>
                                <input type="text" name="age" className="form-control" onChange={(e)=>handleChange(e)} value={cust.age || ""} />
                            </div><br/>
                            
                            <button className="btn btn-primary col-md-12" >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}