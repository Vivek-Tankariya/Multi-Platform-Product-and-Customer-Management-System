import { useState } from "react"
export function AddEmployee(){
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        department: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name] : value})
    }

    const EmployeeRegister = (e) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("http://localhost:5105/api/Employee",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body : demo
        }).then(r => {console.log(r.json())})
        e.preventDefault();
        alert("Employee Registration Successfull");
    }


    return(
        <div className="container mt-3"> {/* creates container */}
            <div className="col-md-6 offset-md-3">     {/* 6 - row length/ 3 - offset from left  */}
                <div className="card border-3">                  {/* creates card */}
                    <div className="card-header fs-3 text-center">Employee Registration</div>  {/* card header / font size / center text */}
                    <div className="card-body">             
                        <form onSubmit={EmployeeRegister}>
                            <div>
                                <label>Employee Name</label>
                                <input type="text" name="name" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Age</label>
                                <input type="text" name="age" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Department</label>
                                <input type="text" name="department" className="form-control" onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Email</label>
                                <input type="text" name="email" className="form-control"  onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Phone</label>
                                <input type="text" name="phone" className="form-control"  onChange={(e)=>handleChange(e)} />
                            </div><br/>
                            <div>
                                <label>Enter Password</label>
                                <input type="text" name="password" className="form-control"  onChange={(e)=>handleChange(e)} />
                            </div><br/>

                            <button className="btn btn-primary col-md-12" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}