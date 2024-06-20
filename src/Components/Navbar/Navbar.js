import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
import logo from './logo.png'
import './Navbar.css'


export function Navbar() {
    return (

        <>

            <nav class="navbar  fixed-top">
                <div class="container-fluid">

                    <img className='logo' src={logo}/>
                    <h4 className='name'>LIVSPACE INTERIORS</h4>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Livspace Interiors</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="page nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="page nav-link inactive" aria-current="page" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="page nav-link inactive" aria-current="page" href="/About">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="page nav-link inactive" aria-current="page" href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>



            


        </>
    );
}