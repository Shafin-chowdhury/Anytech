import React from "react";


const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-blue-500 p-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Let's talk</h2>
        <p className="text-gray-600 mb-6">
          Have questions about building the next generation of banking experiences, our pricing, or our customer success stories?
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="p-3 border rounded-md" required />
          <input type="text" placeholder="Last Name" className="p-3 border rounded-md" required />
          <input type="text" placeholder="Job Title" className="p-3 border rounded-md" required />
          <input type="text" placeholder="Company Name" className="p-3 border rounded-md" required />
          <input type="email" placeholder="Email" className="p-3 border rounded-md col-span-2" required />
          <textarea placeholder="Let us know how we can help you!" className="p-3 border rounded-md col-span-2 h-32" required></textarea>
          <p className="text-gray-500 text-sm col-span-2">
            By submitting this form, you confirm that you agree to the processing of your personal data by <span className="font-bold text-blue-600">AnyTech</span> as described in the <a href="#" className="text-blue-600 underline">privacy policy</a>.
          </p>
          <button type="submit" className="col-span-2 bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition">Submit →</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;