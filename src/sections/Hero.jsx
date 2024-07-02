import { person } from "../assets/images";

const Hero = () => {
  return (
    <section id="hero" className="relative py-5">
      {/* blob */}
      <div className="absolute right-0 top-[-20%] h-80 w-80 rounded-full bg-primaryColorLight opacity-50 mix-blend-screen blur-[150px]"></div>

      <div className="wrapper">
        {/* bg animation */}
        <div className="absolute left-[30%] top-0 hidden animate-scaleAnimation md:block lg:left-[30%]">
          <p className="-z-10 font-Londrina text-[400px] uppercase text-primaryColorLight opacity-5 lg:text-[450px]">
            Hi
          </p>
        </div>

        {/* Hero-content */}
        <div className="flex items-center gap-5">
          <div className="space-y-2 md:w-1/2">
            <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              I am Chukwuemeka
            </h3>
            <h1>
              <span className="title">Web Developer +</span>
              <br />
              <span className="title">UI/UX Designer</span>
            </h1>

            <div className="relative flex justify-center md:hidden">
              {/* blob */}
              <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primaryColorLight opacity-50 mix-blend-screen blur-[150px]"></div>

              <img
                src={person}
                alt="person"
                className="my-10 max-w-[90%] origin-center rotate-[4.5deg] rounded-[38px] border-2 border-primaryColor duration-300 hover:rotate-0 hover:border-primaryColorLight"
              />
            </div>

            <p className="max-w-xl pb-5 text-xl">
              I dissect intricate user experience issues to craft solutions
              focused on integrity, linking billions of individuals.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button className="btn_outline">
                Download CV <i className="fa-solid fa-download"></i>
              </button>

              <div className="flex items-center gap-5">
                <div className="social_icon">
                  <i className="fa-brands fa-twitter z-10"></i>
                </div>
                <div className="social_icon">
                  <i className="fa-brands fa-linkedin z-10"></i>
                </div>
                <div className="social_icon">
                  <i className="fa-brands fa-youtube z-10"></i>
                </div>
                <div className="social_icon">
                  <i className="fa-brands fa-github z-10"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden justify-center md:flex md:w-1/2">
            {/* blob */}
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primaryColorLight opacity-50 mix-blend-screen blur-[150px]"></div>

            <img
              src={person}
              alt="person"
              className="my-10 origin-center rotate-[4.5deg] rounded-[38px] border-2 border-primaryColor duration-300 hover:rotate-0 hover:border-primaryColorLight md:w-full lg:max-w-[80%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
