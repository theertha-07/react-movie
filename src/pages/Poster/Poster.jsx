import React from 'react'
import './Poster.css'



function Poster() {
  return (
    <div>
      
      {/* <!-- Home Section: Slider with Movie Highlights --> */}
    <section class="home swiper" id="home">
            {/* <!-- Swiper Wrapper: Contains all movie slides --> */}
            <div class="swiper-wrapper">
                
                {/* <!-- Slide 1: Alien: Romulus --> */}
                <div class="swiper-slide container">
                    <img src="image/home slide 1.webp" alt="" />
                    <div class="home-text" data-aos="fade-right" data-aos-duration="1000">
                    <h1>Alien: Romulus</h1>
                    <h3> 2024 ‧ Horror/Sci-fi ‧ 1h 59m</h3>
                    <a href="#" class="btn" >Watch Now</a>
                    </div>
                    <a href="#" class="play">
                        <i class='bx bx-play'></i>
                    </a>
                </div>
      
                {/* <!-- Slide 2: Godzilla x Kong: The New Empire--> */}
                <div class="swiper-slide container">
                    <img src="image/home slide 2.jpeg" alt="" />
                    <div class="home-text">
                    <h1>Godzilla x Kong:<br/>The New Empire</h1>
                    <h3>2024 ‧ Action/Sci-fi ‧ 1h 55m</h3>
                    <a href="#" class="btn" >Watch Now</a>
                    <a href="#" class="play">
                        <i class='bx bx-play'></i>
                    </a>
                    </div>
                </div>

                {/* <!-- Slide 3: Exhuma--> */}
                <div class="swiper-slide container">
                    <img src="image/home slide 3.jpg" alt="" />
                    <div class="home-text">
                    <h1>Exhuma</h1>
                    <h3>2024 ‧ Horror/Mystery ‧ 2h 14m</h3>
                    <a href="#" class="btn" >Watch Now</a>
                    <a href="#" class="play">
                        <i class='bx bx-play'></i>
                    </a>
                    </div>
                </div>

            
                
            
            </div>
            {/* <!-- Swiper Pagination Control -->   */}
            <div class="swiper-pagination"></div>
    </section>
     {/* <!-- End of Home Section with Movie Slides -->  */}

    </div>
  )
}

export default Poster
