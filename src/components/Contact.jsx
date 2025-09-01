import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnz4abr', 'template_gov2hhi', form.current, 'eWJVylKLCzGa6yoo1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="message" className="bg-gradient-to-br from-gray-50 to-gray-100 text-black py-20 px-6 md:px-20">

      {/* Divider */}
      <hr className="border-black mb-12" />

      <h1 className="py-4 text-4xl text-center font-semibold text-black">Let's build something amazing!</h1>

      <form ref={form} onSubmit={sendEmail} className="max-w-[800px] mx-auto">
        <div className="grid md:grid-cols-2 gap-6 w-full py-4">

          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold text-black py-2">Name</label>
            <input
              className="bg-white border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              name="user_name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold text-black py-2">Phone Number</label>
            <input
              className="bg-white border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              name="phone"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold text-black py-2">Email</label>
            <input
              className="bg-white border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              name="user_email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm font-semibold text-black py-2">Subject</label>
            <input
              className="bg-white border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              name="subject"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="uppercase text-sm font-semibold text-black py-2">Message</label>
            <textarea
              className="bg-white border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              rows="6"
              name="message"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-gray-800 transition duration-300 rounded-lg p-3 mt-4 w-full text-white font-semibold text-lg"
        >
          
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;