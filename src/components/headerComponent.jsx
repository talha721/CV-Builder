import {Button, Nav, Navbar, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";


export default function Header(){
    return(
        // <div>
        //     <Navbar className='navbar navbar-expand-lg navbar-light bg-light' expand='lg'>
        //             <Nav className="mr-auto" navbar>
        //                 <NavItem>
        //                     <NavLink className="nav" to="/">Home</NavLink>
        //                 </NavItem>
        //                 <NavItem>
        //                     <NavLink to="/form">Add</NavLink>
        //                 </NavItem>
        //             </Nav>
        //     </Navbar>
        // </div>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CV Builder</a>
                    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Add CV</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cv">Show CV</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
)
}