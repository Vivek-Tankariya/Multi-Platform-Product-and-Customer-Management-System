import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Cust(){
    const [custList,setcustList] = useState([]);

    const init = ()=> {
        fetch("http://localhost:5000/").then(res => res.json()).then(result => {setcustList(result);});
    }

    useEffect(() => {
        init();
    },[]);

    const deleteCust = (id) => {
       const c = window.confirm("Are you sure ? ")
       if(c){
        fetch(("http://localhost:5000/"+id),{
            method : "DELETE"
        }).then(res => init());
    }
        
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Customer List
                        </div>
                        <div className="card-body">
                        <Link to={"addCust"} className="btn btn-sm btn-primary ms-1">Add Customer</Link>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Customer Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {custList.map(c => (
                                    <tr key={c._id}>
                                        <td>{c._id}</td>
                                        <td>{c.name}</td>
                                        <td>{c.email}</td>
                                        <td>{c.age}</td>
                                        <td>
                                            <Link to={"editCust/"+c._id} className="btn btn-sm btn-primary ms-1">Edit</Link>
                                            <button className="btn btn-sm btn-danger ms-1" onClick={()=> deleteCust(c._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}