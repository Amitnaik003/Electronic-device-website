const Support = () => {
  const faqs = [
    {
      question: "How can I request a custom solution?",
      answer: "You can fill out our contact form or email us with your specific requirements. Our engineering team will get back to you within 24 hours.",
    },
    {
      question: "Do your products come with warranty?",
      answer: "Yes, all our products come with a 1-year standard warranty covering manufacturing defects.",
    },
    {
      question: "Can I download product datasheets online?",
      answer: "Yes. Go to the respective product page and you'll find a datasheet download button.",
    },
  ];

  const docs = [
    { title: "Company Profile PDF", link: "/assets/company-profile.pdf" },
    { title: "Product Catalog", link: "/assets/product-catalog.pdf" },
    { title: "User Guide - Sensor Modules", link: "/assets/sensor-guide.pdf" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      
      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-blue-700">{faq.question}</h3>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Docs */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Documentation Downloads</h2>
        <ul className="space-y-4 text-lg text-blue-700 text-center">
          {docs.map((doc, index) => (
            <li key={index}>
              <a
                href={doc.link}
                download
                className="hover:underline"
              >
                📄 {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Customer Support */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Need More Help?</h2>
        <p className="text-lg text-gray-700">
          Reach out to our technical support team at{" "}
          <a href="mailto:support@xpertism.com" className="text-blue-700 font-medium underline">
            support@xpertism.com
          </a>{" "}
          or call us at <strong>+91 98765 43210</strong>
        </p>
      </section>
    </div>
  );
};

export default Support;
