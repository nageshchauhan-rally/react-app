import React, {Component} from 'react'
import './bootstrap.min.css'
import './Search.css';
import {Provider} from "./contact";


class Search extends Component {

    componentDidMount() {
        fetch('http://localhost:9000/providers')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
                console.log(data)
            })
            .catch(console.log)
    }

    state = {
        contacts: [] = []
    }

    render() {
        const data = this.state.contacts
        console.log("data"+data)
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
                    <div className="container ">
                        <a className="navbar-brand title" href="#">
                            Rally Health India
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <form className="form-inline mt-2 mt-md-0">
                                <li className="dropdown profileCTA">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">Profile <span className="caret"/></a>
                                    <ul className="dropdown-menu" aria-labelledby="about-us">
                                        <li><a href="#">Settings</a></li>
                                        <li><a href="../login.html">Logout</a></li>
                                    </ul>
                                </li>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="container topHeader">
                    {/* Search */}
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Who are you looking for?</h1>
                        </div>
                    </div>
                </div>
                <div className="jumbotron feature">
                    <div className="container showSearchContainer">
                        {/* Search */}
                        <div className="row">
                            <div className="col-lg-12">
                                <form className="example" action="action_page.php">
                                    <input type="text" placeholder="Search for health care providers..."
                                           name="search"/>
                                    <a className="searchBTN">Search<i className="fa fa-search"/></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="container ">
                    {/* search reasults*/}
                    <div className="searchContainer">
                        {data.map((contact:Provider) => (
                        <div className="row ProviderList">
                            <div className="col-lg-9">
                                <div className="media">
                                    <img className="mr-3" src="pcpIcon.svg" alt="Generic placeholder image"/>
                                    <div className="media-body">
                                        <h1 className="mt-0"><a href="#" className="showPCPdetails">{contact.name}</a><span>{contact.speciality}</span></h1>
                                        <h6>{contact.locations[0].addressLine}<br/>
                                            {contact.locations[0].city}, {contact.locations[0].state}, {contact.locations[0].country}<br/>
                                            {contact.phone}<br/>
                                            <a href="#">{contact.distance} Miles Away</a><br/>
                                            <a href="#">View Additional Locations (6)</a><br/>
                                            <a href="#">View Enrollment Information</a><p/>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 rgtCol my-auto">
                                <h6><a href="#">{contact.premiumCareEvaluation}</a>
                                    <a href="#">{contact.patientPreference}</a></h6>
                            </div>
                            <div className="col-sm-12 botDetails">
                                Office Visit - Primary Doctor - Established Patient - Moderate Complexity
                            </div>
                        </div>
                        ))}
                    </div>
                    {/* end */}
                </div>
                {/* /.container */}
                {/* 	<footer>
        <div class="footerDiv">
        	<div class="container">
        		<p>Rally Health, Inc. &copy; 2019 </p>
        	</div>
        </div>
	</footer> */}
            </div>
        );
    }
}

export default Search;