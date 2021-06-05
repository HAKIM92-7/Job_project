import React from 'react'


const Home = () => {

    return (
        <section id="intro" class="section-intro">
          <div class="logo-menu">
         
          <div class="navmenu navmenu-default navmenu-fixed-left offcanvas"> 
         
            <div class="close" data-toggle="offcanvas" data-target=".navmenu">
                <i class="ti-close"></i>
            </div>
              <h3 class="title-menu">All Pages</h3>
              <ul class="nav navmenu-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="index-02.html">Home Page 2</a></li>
                <li><a href="index-03.html">Home Page 3</a></li>
                <li><a href="index-04.html">Home Page 4</a></li>
                <li><a href="about.html">About us</a></li>            
                <li><a href="job-page.html">Job Page</a></li>             
                <li><a href="job-details.html">Job Details</a></li>    
                <li><a href="resume.html">Resume Page</a></li> 
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="pricing.html">Pricing Tables</a></li>
                <li><a href="browse-jobs.html">Browse Jobs</a></li>
                <li><a href="browse-categories.html">Browse Categories</a></li>
                <li><a href="add-resume.html">Add Resume</a></li>
                <li><a href="manage-resumes.html">Manage Resumes</a></li> 
                <li><a href="job-alerts.html">Job Alerts</a></li> 
                <li><a href="post-job.html">Add Job</a></li>  
                <li><a href="manage-jobs.html">Manage Jobs</a></li>
                <li><a href="manage-applications.html">Manage Applications</a></li>
                <li><a href="browse-resumes.html">Browse Resumes</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="faq.html">Faq</a></li>
                <li><a href="my-account.html">Login</a></li>
            </ul>
          </div> 
        
      </div>
     

      <div class="search-container">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Find the job that fits your life</h1><br/><h2>More than <strong>12,000</strong> jobs are waiting to Kickstart your career!</h2>
              <div class="content">
                <form method="" action="">
                  <div class="row">
                    <div class="col-md-4 col-sm-6">
                      <div class="form-group">
                        <input class="form-control" type="text" placeholder="job title / keywords / company name"/>
                        <i class="ti-time"></i>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="form-group">
                        <input class="form-control" type="email" placeholder="city / province / zip code"/>
                        <i class="ti-location-pin"></i>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                      <div class="search-category-container">
                        <label class="styled-select">
                          <select class="dropdown-product selectpicker">
                            <option>All Categories</option>
                            <option>Finance</option>
                            <option>IT & Engineering</option>
                            <option>Education/Training</option>
                            <option>Art/Design</option>
                            <option>Sale/Markting</option>
                            <option>Healthcare</option>
                            <option>Science</option>                              
                            <option>Food Services</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-1 col-sm-6">
                      <button type="button" class="btn btn-search-icon"><i class="ti-search"></i></button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="popular-jobs">
                <b>Popular Keywords: </b>
                <a href="#">Web Design</a>
                <a href="#">Manager</a>
                <a href="#">Programming</a>
              </div>
    </div>
          </div>
        </div>
      </div>
    </section>
   
    



        
    )
}

export default Home
