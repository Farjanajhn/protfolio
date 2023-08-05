
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

    <div id='message' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl text-center font-semibold  text-purple-950">Send me an email!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2  text-purple-950">Name</label>
            <input className="border-2 flex rounded-lg p-3 border-gray-300" type="text" name="user_name"  />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2  text-purple-950">Phone number</label>
            <input className="border-2 flex rounded-lg p-3 border-gray-300" type="text" name="phone"/>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2  text-purple-950">Email</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="user_email"/>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2  text-purple-950">Subject</label>
            <input className="border-2 rounded-lg p-3 border-gray-300" type="text" name="subject"/>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2  text-purple-950">Massage</label>
            <textarea className="border-2 rounded-lg p-3 border-gray-300 flex"rows='10'name="message"/>
          </div>
          
        </div>
        <button className="bg-purple-950 rounded-lg p-3 mt-4 w-full  text-white">
            Send Massage
          </button>
      </form>
      
    </div> 
  );
};

export default Contact;