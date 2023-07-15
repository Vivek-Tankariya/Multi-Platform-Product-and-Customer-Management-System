
import { Link } from "react-router-dom";

export function NavBar({isLog}){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Product Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to = "addProduct" class="nav-link active" aria-current="page" href="#">Add Product</Link>
        </li>

        {isLog ? <li class="nav-item">
          <Link to = "customer" class="nav-link active" aria-current="page" href="#">Manage Customers</Link>
        </li> : ""}

        </ul>
        <div class="d-flex">
          <Link to = {"login"} class="nav-link active text-white"  aria-current="page" href="#">{ isLog ? "Logout" : "Employee Login"}</Link>
        </div>

    </div>
  </div>
</nav>
        </div>
    )
}