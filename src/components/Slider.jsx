import React from 'react';

function Slider() {
  return (
    <>
      <section className="home swiper" id="home">
        {/* Swiper Wrapper: Contains all movie slides */}
        <div className="swiper-wrapper">
          
          {/* Slide 1: Alien: Romulus */}
          <div className="swiper-slide container">
            <img src="image/home slide 1.webp" alt="Alien: Romulus" />
            <div className="home-text" data-aos="fade-right" data-aos-duration="1000">
              <h1>Alien: Romulus</h1>
              <h3>2024 ‧ Horror/Sci-fi ‧ 1h 59m</h3>
              <a href="#" className="btn">Watch Now</a>
            </div>
            <a href="#" className="play">
              <i className='bx bx-play'></i>
            </a>
          </div>

          {/* Slide 2: Godzilla x Kong: The New Empire */}
          <div className="swiper-slide container">
            <img src="image/home slide 2.jpeg" alt="Godzilla x Kong: The New Empire" />
            <div className="home-text">
              <h1>Godzilla x Kong:<br />The New Empire</h1>
              <h3>2024 ‧ Action/Sci-fi ‧ 1h 55m</h3>
              <a href="#" className="btn">Watch Now</a>
              <a href="#" className="play">
                <i className='bx bx-play'></i>
              </a>
            </div>
          </div>

          {/* Slide 3: Exhuma */}
          <div className="swiper-slide container">
            <img src="image/home slide 3.jpg" alt="Exhuma" />
            <div className="home-text">
              <h1>Exhuma</h1>
              <h3>2024 ‧ Horror/Mystery ‧ 2h 14m</h3>
              <a href="#" className="btn">Watch Now</a>
              <a href="#" className="play">
                <i className='bx bx-play'></i>
              </a>
            </div>
          </div>

          {/* Slide 4: Fast X */}
          <div className="swiper-slide container">
            <img src="image/home slide 4.jpg" alt="Fast X" />
            <div className="home-text">
              <h1>Fast X</h1>
              <h3>2023 ‧ Action/Crime ‧ 2h 21m</h3>
              <a href="#" className="btn">Watch Now</a>
              <a href="#" className="play">
                <i className='bx bx-play'></i>
              </a>
            </div>
          </div>

          {/* Slide 5: Oppenheimer */}
          <div className="swiper-slide container">
            <img src="image/home slide 5.jpg" alt="Oppenheimer" />
            <div className="home-text">
              <h1>Oppenheimer</h1>
              <h3>2023 ‧ Thriller/Historical drama ‧ 3 hours</h3>
              <a href="#" className="btn">Watch Now</a>
              <a href="#" className="play">
                <i className='bx bx-play'></i>
              </a>
            </div>
          </div>

          {/* Slide 6: Avatar: The Way of Water */}
          <div className="swiper-slide container">
            <img src="image/home slide 6.jpg" alt="Avatar: The Way of Water" />
            <div className="home-text">
              <h1>Avatar: The Way of Water</h1>
              <h3>2022 ‧ Sci-fi/Action ‧ 3h 12m</h3>
              <a href="#" className="btn">Watch Now</a>
              <a href="#" className="play">
                <i className='bx bx-play'></i>
              </a>
            </div>
          </div>

        </div>
        {/* Swiper Pagination Control */}
        <div className="swiper-pagination"></div>
      </section>
    </>
  );
}

export default Slider;
