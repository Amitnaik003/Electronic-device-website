 const About = () => {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto space-y-16">
      
      {/* Company Introduction */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 text-lg">
          Xpertism is a pioneering company focused on designing, developing, and delivering high-quality electronic components and systems.
          Our team of engineers and domain experts work across industries including automotive, aerospace, healthcare, and industrial automation.
        </p>
      </section>

      {/* Vision & Mission */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Vision & Mission</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li><strong>Vision:</strong> To be a global leader in next-gen electronic innovations that power progress and sustainability.</li>
          <li><strong>Mission:</strong> To provide reliable, efficient, and advanced electronic solutions tailored to industry needs.</li>
        </ul>
      </section>

      {/* Company History */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Journey</h2>
        <p className="text-gray-700 text-lg">
          Founded in 2015, Xpertism began as a small R&D unit. Over the years, we’ve scaled to serve global clients, launched 50+ successful product lines,
          and built long-term partnerships across 10+ industries.
        </p>
      </section>

      {/* Certifications / Quality Standards */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Certifications & Quality</h2>
        <p className="text-gray-700 text-lg">
          We adhere to ISO 9001:2015 standards and comply with RoHS and CE directives. Our commitment to quality ensures
          every product meets international benchmarks for safety and performance.
        </p>
      </section>

    </div>
  );
};

export default About;


