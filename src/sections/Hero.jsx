import { cv, profile } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center py-5"
    >
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
        <div className="hero_content flex items-center gap-5">
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
                src={profile}
                alt="person"
                className="my-10 max-w-[90%] origin-center rotate-[4.5deg] rounded-[38px] border-2 border-primaryColor duration-300 hover:rotate-0 hover:border-primaryColorLight"
              />
            </div>

            <p className="max-w-xl pb-5 text-xl">
              An innovative Frontend Developer, a connoisseur in designing and
              building amazing custom web application
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href={cv} className="btn_outline" download="">
                Download CV <i className="fa-solid fa-download"></i>
              </a>

              <div className="flex items-center gap-5">
                <a href="https://x.com/code__emmy" className="social_icon">
                  <i className="fa-brands fa-twitter z-10"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/chukwuemeka-eziagulu-61820825b/"
                  className="social_icon"
                >
                  <i className="fa-brands fa-linkedin z-10"></i>
                </a>
                <a
                  href="https://www.instagram.com/_emmygram?igsh=MXVvNjUzcm5pY2Uydg%3D%3D&utm_source=qr"
                  className="social_icon"
                >
                  <i className="fa-brands fa-instagram z-10"></i>
                </a>
                <a href="https://github.com/EmmyRecent" className="social_icon">
                  <i className="fa-brands fa-github z-10"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hero_image relative hidden justify-center md:flex md:w-1/2">
            {/* blob */}
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primaryColorLight opacity-50 mix-blend-screen blur-[150px]"></div>

            <img
              src={profile}
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
