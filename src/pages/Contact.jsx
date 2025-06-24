const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      
      {/* Contact Form */}
      <section>
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Get in Touch</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg p-6 rounded-xl">
          <input type="text" placeholder="Your Name" className="border p-3 rounded" required />
          <input type="email" placeholder="Your Email" className="border p-3 rounded" required />
          <input type="tel" placeholder="Your Phone" className="border p-3 rounded md:col-span-2" required />
          <textarea placeholder="Your Message" rows="5" className="border p-3 rounded md:col-span-2" required></textarea>
          <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 md:col-span-2">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info & Map */}
      <section className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-800">Contact Information</h3>
          <p><strong>Address:</strong> 123 Xpertism Park, Tech City, India</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> contact@xpertism.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            <a href="#" className="text-blue-600 hover:underline">Instagram</a>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div>
          <iframe
            title="Xpertism Location"
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991083!2d72.74110133217297!3d19.0821978396527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU2LjAiTiA3MsKwNDcnMDguMCJF!5e0!3m2!1sen!2sin!4v1679053798771!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
