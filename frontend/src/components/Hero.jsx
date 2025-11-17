import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-construction-gray to-gray-800 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Dreams Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Quality construction services for commercial and residential projects.
            Family-owned, community-focused, excellence-driven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/projects"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-construction-gray text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-construction-orange text-4xl font-bold mb-2">25+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-construction-orange text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Projects Completed</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-construction-orange text-4xl font-bold mb-2">100%</div>
            <div className="text-lg">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
