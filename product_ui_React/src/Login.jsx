import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup" ;
export function Login({setLog}){

    setLog(false);

    const epass = useFormik({
        initialValues : {
            email: "",
            password: ""    
        },
        onSubmit : values => {
            if (values.password === "" || values.email === "") {
                alert("Email or Password not provided");
                return;
            }

            fetch("http://localhost:5105/api/Employee/get/" +values.email)
                .then((res) => res.json())
                .then((result) => {
                setEmployee(result);
                
                
      
                if (values.password === result.password) {
                
                navigate("/dispEmp/"+result.id);
                }
                else{
                    alert("Incorrect email or password entered")
                 }
             })
                .catch((error) => {
                 console.log(error);
            // Handle the error case here
                });
        }
    })

    const [employee, setEmployee] = useState({
        id : "",
        name: "",
        age: "",
        department: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate();

    return(
        <div className="container mt-3"> {/* creates container */}
            <div className="col-md-6 offset-md-3">     {/* 6 - row length/ 3 - offset from left  */}
                <div className="card border-3">                  {/* creates card */}
                    <div className="card-header fs-3 text-center">Employee Login</div>  {/* card header / font size / center text */}
                    <div className="card-body">             
                        <form onSubmit={epass.handleSubmit}>
                            <div>
                                <label>Enter Email </label>
                                <input type="text" name="email" className="form-control" value={epass.values.email} {...epass.getFieldProps("email")} />
                            </div><br/>
                            <div>
                                <label>Enter Password</label>
                                <input type="text" name="password" className="form-control" value={epass.values.password} {...epass.getFieldProps("password")} />
                            </div><br/>
                            
                            <button type="submit" className="btn btn-sm btn-primary ms-5 col-md-5" >Login</button>
                            <Link to={"addEmp"} className="btn btn-sm btn-primary ms-5 col-md-5">Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}