import React from 'react';

const Contact = () => {
  return (
    <section className="text-black py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-5 text-center text-orange-700">Contact Us</h2>
        <hr />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
              <p>123 Brew Street, Coffee Town, India 11xxx</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p>+91 98765 44xxx</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p>contact@icafe.com</p>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
