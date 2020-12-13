import React from 'react';
import './bootstrap.min.css'
import './Search.css';


function Search() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
                <div className="container ">
                    <a className="navbar-brand title" href="#">
                        Rally Health India
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <li className="dropdown profileCTA">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret" /></a>
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
                                <input type="text" placeholder="Search for health care providers..." name="search" />
                                <a className="searchBTN">Search<i className="fa fa-search" /></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="container ">
                {/* search reasults*/}
                <div className="searchContainer">
                    <div className="row ProviderList">
                        <div className="col-lg-9">
                            <div className="media">
                                <img className="mr-3" src="pcpIcon.svg" alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h1 className="mt-0"><a href="#" className="showPCPdetails">Bailey, Tanya J, MD</a><span>Pediatrics</span></h1>
                                    <h6>12720 Bass Lake Rd<br />
                                        Maple Grove, MN 55369<br />
                                        (763) 559-2861 PHONE<br />
                                        <a href="#">0.7 Miles Away</a><br />
                                        <a href="#">View Additional Locations (6)</a><br />
                                        <a href="#">View Enrollment Information</a><p />
                                    </h6></div>
                            </div>
                        </div>
                        <div className="col-lg-3 rgtCol my-auto">
                            <h6><a href="#">Not Evaluated For Premium Care</a>
                                <a href="#">Accepting All Patients</a></h6>
                        </div>
                        <div className="col-sm-12 botDetails">
                            Office Visit - Primary Doctor - Established Patient - Moderate Complexity
                        </div>
                    </div>
                    <div className="row ProviderList">
                        <div className="col-lg-9">
                            <div className="media">
                                <img className="mr-3" src="../images/pcpIcon.svg" alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h1 className="mt-0">Meier, Diane M, MD<span>Pediatrics</span></h1>
                                    <h6>12720 Bass Lake Rd<br />
                                        Maple Grove, MN 55369<br />
                                        (763) 559-2861 PHONE<br />
                                        <a href="#">0.7 Miles Away</a><br />
                                        <a href="#">View Additional Locations (6)</a><br />
                                        <a href="#">View Enrollment Information</a><p />
                                    </h6></div>
                            </div>
                        </div>
                        <div className="col-lg-3 rgtCol my-auto">
                            <h6><a href="#">Not Evaluated For Premium Care</a>
                                <a href="#">Accepting All Patients</a></h6>
                        </div>
                        <div className="col-sm-12 botDetails">
                            Office Visit - Primary Doctor - Established Patient - Moderate Complexity
                        </div>
                    </div>
                    <div className="row ProviderList">
                        <div className="col-lg-9">
                            <div className="media">
                                <img className="mr-3" src="../images/pcpIcon.svg" alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h1 className="mt-0">Pflaster, Gregory J, Jr, MD<span>Urgent Care Medicine, Family
                        Practice</span></h1>
                                    <h6>12720 Bass Lake Rd<br />
                                        Maple Grove, MN 55369<br />
                                        (763) 559-2861 PHONE<br />
                                        <a href="#">0.7 Miles Away</a><br />
                                        <a href="#">View Additional Locations (6)</a><br />
                                        <a href="#">View Enrollment Information</a><p />
                                    </h6></div>
                            </div>
                        </div>
                        <div className="col-lg-3 rgtCol my-auto">
                            <h6><a href="#">Not Evaluated For Premium Care</a>
                                <a href="#">Accepting All Patients</a></h6>
                        </div>
                        <div className="col-sm-12 botDetails">
                            Office Visit - Primary Doctor - Established Patient - Moderate Complexity
                        </div>
                    </div>
                    <div className="row ProviderList">
                        <div className="col-lg-9">
                            <div className="media">
                                <img className="mr-3" src="../images/pcpIcon.svg" alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h1 className="mt-0">Phillips, Daniela M, MD<span>Pediatrics</span></h1>
                                    <h6>12720 Bass Lake Rd<br />
                                        Maple Grove, MN 55369<br />
                                        (763) 559-2861 PHONE<br />
                                        <a href="#">0.7 Miles Away</a><br />
                                        <a href="#">View Additional Locations (6)</a><br />
                                        <a href="#">View Enrollment Information</a><p />
                                    </h6></div>
                            </div>
                        </div>
                        <div className="col-lg-3 rgtCol my-auto">
                            <h6><a href="#">Not Evaluated For Premium Care</a>
                                <a href="#">Accepting All Patients</a></h6>
                        </div>
                        <div className="col-sm-12 botDetails">
                            Office Visit - Primary Doctor - Established Patient - Moderate Complexity
                        </div>
                    </div>
                    <div className="row ProviderList">
                        <div className="col-lg-9">
                            <div className="media">
                                <img className="mr-3" src="../images/pcpIcon.svg" alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h1 className="mt-0">Swan, Thomas T, MD<span>Family Practice</span></h1>
                                    <h6>12720 Bass Lake Rd<br />
                                        Maple Grove, MN 55369<br />
                                        (763) 559-2861 PHONE<br />
                                        <a href="#">0.7 Miles Away</a><br />
                                        <a href="#">View Additional Locations (6)</a><br />
                                        <a href="#">View Enrollment Information</a><p />
                                    </h6></div>
                            </div>
                        </div>
                        <div className="col-lg-3 rgtCol my-auto">
                            <h6><a href="#">Not Evaluated For Premium Care</a>
                                <a href="#">Accepting All Patients</a></h6>
                        </div>
                        <div className="col-sm-12 botDetails">
                            Office Visit - Primary Doctor - Established Patient - Moderate Complexity
                        </div>
                    </div>
                </div>
                {/* end */}
                {/* provider details*/}
                <div className="providerContainer" style={{display: 'none'}}>
                    <div className="row ProviderDetails">
                        <div className="col-lg-9">
                            <div className="media">
                                <img className="mr-3" src="../images/pcpIcon.svg" alt="Generic placeholder image" />
                                <div className="media-body">
                                    <h1 className="mt-0">Bailey, Tanya J, MD<span>Pediatrics</span></h1>
                                </div>
                            </div>
                        </div>
                        {/*  <div class="col-lg-3 rgtCol my-auto">
                    <h6><a href="#">Not Evaluated For Premium Care</a>
                        <a href="#">Accepting All Patients</a></h6>
                </div> */}
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link inactiveLink" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="home" aria-selected="false">OVERVIEW</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" id="services-tab" data-toggle="tab" href="#servicesCost" role="tab" aria-controls="profile" aria-selected="true">SERVICES &amp; COSTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link inactiveLink" id="location-tab" data-toggle="tab" href="#location" role="tab" aria-controls="contact" aria-selected="false">LOCATIONS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link inactiveLink" id="patientReview-tab" data-toggle="tab" href="#patientReview" role="tab" aria-controls="contact" aria-selected="false">PATIENT REVIEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link inactiveLink" id="enrollment-tab" data-toggle="tab" href="#enrollment" role="tab" aria-controls="contact" aria-selected="false">ENROLLMENT INFORMATION</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade" id="overview" role="tabpanel" aria-labelledby="contact-tab"> 1 </div>
                                <div className="tab-pane fade show active" id="servicesCost" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row titleHeading">
                                        <div className="col-sm-4">Services</div>
                                        <div className="col-sm-2">Cost Near 55442</div>
                                        <div className="col-sm-2">Estimated Total Cost </div>
                                        <div className="col-sm-2">Insurance Pays </div>
                                        <div className="col-sm-2">Estimated Out-of-Pocket Cost</div>
                                    </div>
                                    <div className="row costDetails">
                                        <div className="col-sm-4">Services Office Visit - Primary Doctor - Established Patient -
                                            High Complexity</div>
                                        <div className="col-sm-2">$302 - $377</div>
                                        <div className="col-sm-2">Below Average Cost </div>
                                        <div className="col-sm-2">* N/A </div>
                                        <div className="col-sm-2">* N/A</div>
                                    </div>
                                    <div className="row costDetails">
                                        <div className="col-sm-4">Office Visit - Primary Doctor - Established Patient - Minimal Complexity</div>
                                        <div className="col-sm-2">$42 - $52</div>
                                        <div className="col-sm-2">Cost Not Available </div>
                                        <div className="col-sm-2">* N/A </div>
                                        <div className="col-sm-2">* N/A</div>
                                    </div>
                                    <div className="row costDetails">
                                        <div className="col-sm-4">Office Visit - Primary Doctor - Established Patient - Moderate Complexity</div>
                                        <div className="col-sm-2">C$145 - $188</div>
                                        <div className="col-sm-2">Below Average Cost </div>
                                        <div className="col-sm-2">* N/A </div>
                                        <div className="col-sm-2">* N/A</div>
                                    </div>
                                    <div className="row costDetails">
                                        <div className="col-sm-4">Office Visit - Primary Doctor - New Patient - High Complexity</div>
                                        <div className="col-sm-2">$420 - $550</div>
                                        <div className="col-sm-2">Below Average Cost </div>
                                        <div className="col-sm-2">* N/A </div>
                                        <div className="col-sm-2">* N/A</div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="location" role="tabpanel" aria-labelledby="contact-tab"> 3 </div>
                                <div className="tab-pane fade" id="patientReview" role="tabpanel" aria-labelledby="profile-tab"> 4 </div>
                                <div className="tab-pane fade" id="enrollment" role="tabpanel" aria-labelledby="contact-tab"> 5
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end*/}
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
export default Search;