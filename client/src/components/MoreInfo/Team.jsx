import React from 'react'
import './Team.css'

const Team = () => {
    return (
        <div>
            <section class="team-page-section">
                <div class="container">
                    <div class="sec-title centered">
                        <h2>DEVELOPERS</h2>
                    </div>

                    <div class="row clearfix">

                        <div class="team-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <ul class="social-icons">
                                    <li><a href="https://github.com/shreya27tripathi"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/shreya-tripathi-89079b241/"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                                <div class="image">
                                    <a href="#"><img src="/assets/images/shreya.jpeg" alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <h3>Shreya Tripathi</h3>
                                </div>
                            </div>
                        </div>

                        <div class="team-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <ul class="social-icons">
                                    <li><a href="https://github.com/kaavyabaranwal"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/kaavya-baranwal/"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                                <div class="image">
                                    <img src="/assets/images/kaavya.jpg" alt="" />
                                </div>
                                <div class="lower-content">
                                    <h3>Kaavya Baranwal</h3>
                                </div>
                            </div>
                        </div>
                        <div class="team-block col-lg-4 col-md-6 col-sm-12">
                            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <ul class="social-icons">
                                    <li><a href="https://github.com/dc-heya"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/dhwani-a9300022a/"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                                <div class="image">
                                    <a href="#"><img src="/assets/images/dhwani.jpeg" alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <h3>Dhwani</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team