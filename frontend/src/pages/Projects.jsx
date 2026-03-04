import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Downtown Office Complex',
      category: 'commercial',
      description: '50,000 sq ft modern office building with retail space',
      year: '2023',
      value: '$8.5M'
    },
    {
      id: 2,
      title: 'Riverside Luxury Homes',
      category: 'residential',
      description: 'Custom 4-bedroom homes with waterfront views',
      year: '2023',
      value: '$2.3M'
    },
    {
      id: 3,
      title: 'Manufacturing Facility Expansion',
      category: 'commercial',
      description: '30,000 sq ft warehouse and production facility',
      year: '2022',
      value: '$5.2M'
    },
    {
      id: 4,
      title: 'Historic Home Renovation',
      category: 'residential',
      description: 'Complete restoration of 1920s Victorian home',
      year: '2022',
      value: '$850K'
    },
    {
      id: 5,
      title: 'Retail Shopping Center',
      category: 'commercial',
      description: '20-unit retail complex with parking structure',
      year: '2021',
      value: '$12M'
    },
    {
      id: 6,
      title: 'Lakeside Estate',
      category: 'residential',
      description: 'Luxury 6-bedroom estate with guest house',
      year: '2021',
      value: '$3.5M'
    },
    {
      id: 7,
      title: 'Community Center',
      category: 'commercial',
      description: 'Multi-purpose facility with gymnasium and classrooms',
      year: '2020',
      value: '$6.8M'
    },
    {
      id: 8,
      title: 'Modern Townhouse Development',
      category: 'residential',
      description: '12-unit townhouse complex with sustainable design',
      year: '2020',
      value: '$4.2M'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-construction-gray to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Our Projects</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore our portfolio of successfully completed projects that showcase
            our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-construction-orange text-white'
                  : 'bg-construction-lightGray text-construction-gray hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'commercial'
                  ? 'bg-construction-orange text-white'
                  : 'bg-construction-lightGray text-construction-gray hover:bg-gray-300'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === 'residential'
                  ? 'bg-construction-orange text-white'
                  : 'bg-construction-lightGray text-construction-gray hover:bg-gray-300'
              }`}
            >
              Residential
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-construction-lightGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-construction-orange to-construction-yellow flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.category === 'commercial'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-construction-gray mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-construction-orange font-bold text-lg">
                      {project.value}
                    </span>
                    <button className="text-construction-gray hover:text-construction-orange font-semibold transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Project Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-construction-orange mb-2">500+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-construction-orange mb-2">$250M+</div>
              <div className="text-gray-600">Total Value Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-construction-orange mb-2">95%</div>
              <div className="text-gray-600">On-Time Completion</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-construction-orange mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-construction-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-construction-orange text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">
                RD Craddock & Daughter exceeded our expectations. They delivered our office
                complex on time and within budget, and the quality of work is outstanding.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-construction-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JM
                </div>
                <div>
                  <div className="font-bold text-construction-gray">John Martinez</div>
                  <div className="text-gray-500 text-sm">CEO, Tech Solutions Inc.</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-construction-orange text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">
                Building our dream home was a pleasure with this team. Their attention to
                detail and communication throughout the process was exceptional.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-construction-orange rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SJ
                </div>
                <div>
                  <div className="font-bold text-construction-gray">Sarah Johnson</div>
                  <div className="text-gray-500 text-sm">Homeowner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
