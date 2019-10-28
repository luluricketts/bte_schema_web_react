import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + ", Password: " + this.password.value
            + ", Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                  <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/biothings-explorer-text.png" height="40" width="50"
                            alt="BioThings Explorer" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/idresolver">
                                    ID Resolver
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/singlehop">
                                    Single-Hop Query
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/multihop">
                                     Multi-Hops Query
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/connect">
                                    Connect
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                  </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header justify-content-center">
                            <div className="col-12 col-sm-12 col-md-7">
                                <h1>BioThings Explorer</h1>
                                <p>BioThings Explorer allows users to query a vast amount of biological and chemical databases in a central place by calling APIs which distribute these data on the fly. </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;