import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Commercial Construction',
      description: 'From office buildings to retail spaces, we deliver commercial projects that meet your business needs and exceed industry standards.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Industrial Facilities',
        'Warehouses',
        'Mixed-Use Developments'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Residential Building',
      description: 'Custom homes and residential projects built with attention to detail and a focus on creating spaces where families thrive.',
      features: [
        'Custom Home Construction',
        'Multi-Family Housing',
        'Townhouses & Condos',
        'Luxury Residences',
        'Affordable Housing'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: 'Renovations & Remodeling',
      description: 'Transform existing spaces with our expert renovation services, bringing new life to homes and commercial properties.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovations',
        'Basement Finishing',
        'Home Additions',
        'Commercial Updates'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Project Management',
      description: 'Comprehensive project coordination from planning to completion, ensuring your project stays on schedule and within budget.',
      features: [
        'Timeline Management',
        'Budget Control',
        'Contractor Coordination',
        'Quality Assurance',
        'Progress Reporting'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Design & Planning',
      description: 'Expert architectural design and engineering services to bring your vision from concept to detailed plans.',
      features: [
        'Architectural Design',
        'Engineering Services',
        '3D Visualization',
        'Space Planning',
        'Cost Estimation'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Permits & Compliance',
      description: 'Navigate the complex world of building codes and regulations with our expert permit and compliance services.',
      features: [
        'Building Permits',
        'Code Compliance',
        'Inspections',
        'Zoning Applications',
        'Environmental Permits'
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-construction-gray to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive construction solutions backed by decades of experience
            and a commitment to excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-construction-lightGray rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-construction-orange mb-6">{service.icon}</div>
                <h3 className="text-3xl font-bold text-construction-gray mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-construction-gray mb-3">
                    What We Offer:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-construction-orange mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-construction-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Process</h2>
          <p className="section-subtitle text-center">
            A proven approach to successful project delivery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: 'Meet to discuss your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Develop detailed plans and cost estimates' },
              { step: '03', title: 'Construction', desc: 'Execute the project with quality craftsmanship' },
              { step: '04', title: 'Completion', desc: 'Final walkthrough and project handover' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-construction-orange text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-construction-gray mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-construction-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and receive a free consultation.
          </p>
          <Link
            to="/contact"
            className="bg-white text-construction-orange hover:bg-construction-lightGray font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
