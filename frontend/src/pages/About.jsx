const About = () => {
  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on the quality of materials or workmanship.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'Honest communication and transparent pricing in all our dealings.',
      icon: '🤝'
    },
    {
      title: 'Safety',
      description: 'Maintaining the highest safety standards on every job site.',
      icon: '🛡️'
    },
    {
      title: 'Innovation',
      description: 'Embracing modern techniques and sustainable building practices.',
      icon: '💡'
    }
  ];

  const team = [
    {
      name: 'Richard D. Craddock',
      role: 'Founder & CEO',
      bio: 'With over 30 years of experience, Richard founded the company on principles of quality and customer service.'
    },
    {
      name: 'Sarah Craddock',
      role: 'Director of Operations',
      bio: 'Sarah brings fresh perspectives and modern project management techniques to the family business.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-construction-gray to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Three generations of construction excellence, building lasting relationships
            one project at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                RD Craddock & Daughter Construction was founded in 1995 by Richard D. Craddock,
                a master builder with a vision to create a construction company that prioritized
                quality, integrity, and customer satisfaction above all else.
              </p>
              <p>
                What started as a small operation focused on residential renovations has grown
                into a full-service construction company handling both commercial and residential
                projects throughout the region. Our success is built on the strong relationships
                we've fostered with clients, subcontractors, and the communities we serve.
              </p>
              <p>
                In 2010, Richard's daughter Sarah joined the business, bringing fresh ideas and
                modern project management techniques. Together, they've continued to build on the
                company's reputation for excellence while embracing innovation and sustainable
                building practices.
              </p>
              <p>
                Today, we're proud to be a family-owned business that treats every client like
                family. We understand that construction projects are significant investments, and
                we're committed to delivering results that exceed expectations while staying on
                time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-construction-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Core Values</h2>
          <p className="section-subtitle text-center">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-construction-gray mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Meet Our Leadership</h2>
          <p className="section-subtitle text-center">
            The family behind the business
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-construction-lightGray rounded-lg p-8 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-construction-orange to-construction-yellow rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-construction-gray mb-2">
                  {member.name}
                </h3>
                <p className="text-construction-orange font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-construction-orange text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-xl">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl">Client Retention</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
