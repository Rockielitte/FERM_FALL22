import React from "react";

const About = () => {
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About me
              </h2>

              <p className="leading-snug">
                Welcome to FilmMe, your ultimate destination for all things
                film! Immerse yourself in the world of movies as you explore our
                comprehensive collection of films from various genres. From
                timeless classics to the latest blockbusters, FilmMe offers a
                curated selection that caters to every movie lover's taste. Dive
                into detailed movie information, watch trailers, read reviews,
                and discover hidden gems that will keep you entertained for
                hours. With FilmMe, you can stay up-to-date with the latest
                releases, create your personalized watchlist, and interact with
                a community of fellow film enthusiasts. Get ready to unleash
                your passion for cinema and let FilmMe be your go-to platform
                for all your movie cravings!
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://4.bp.blogspot.com/-eqPNLqeDI-w/XI51rOAe22I/AAAAAAAAAts/gBOCnWl70iQc6POs9ORbgAFWip5j-jogACKgBGAs/w2560-h1600-c/avengers-endgame-movie-characters-uhdpaper.com-4K-52.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
