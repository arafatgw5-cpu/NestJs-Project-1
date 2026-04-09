const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 md:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-primary">Easin Arafat</span> 👋
          </h1>

          <p className="text-gray-500 text-lg mb-6 max-w-xl mx-auto lg:mx-0">
            Aspiring Web Developer from Bangladesh 🇧🇩. I build modern,
            responsive and user-friendly websites using React & Tailwind.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary rounded-full px-6 shadow-md hover:scale-105 transition-transform duration-300">
              View Projects
            </button>

            <button className="btn btn-outline rounded-full px-6 hover:scale-105 transition-transform duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Content (Image / Card) */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center shadow-2xl">
            
            <span className="text-6xl font-bold text-primary">
              EA
            </span>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;