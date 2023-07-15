import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export function DisplayEmployee({setLog}){

    setLog(true);

    const {id} = useParams();

    const [employee, setEmployee] = useState({
        id : "",
        name: "",
        age: "",
        department: "",
        email: "",
        phone: "",
        password: ""
    })

    useEffect(()=> {
        fetch("http://localhost:5105/api/Employee/"+id).then(res => res.json()).then(result => {setEmployee(result)})
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card" style={{ width: '30rem' }} >
                        <div className="card-header fs-3 text-center">
                            Details of Employee Id : {id}
                        </div>
                        <div className="card-body text-center">
                            <strong>Employee Name : </strong><span>{employee.name}</span><br/>
                            <strong>Employee Age : </strong><span>{employee.age}</span><br/>
                            <strong>Employee Department : </strong><span>{employee.department}</span><br/>
                            <strong>Employee Phone : </strong><span>{employee.phone}</span><br/>
                            <strong>Employee Email : </strong><span>{employee.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}