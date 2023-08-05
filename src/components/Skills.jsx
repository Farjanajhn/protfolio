import html from './../assets/image/html.png'
import css from './../assets/image/css3.jpeg'
import javascript from './../assets/image/javascript.png'
import node from './../assets/image/node js.png'
import react from './../assets/image/react.webp'
import boostrap from './../assets/image/boostrap.jpeg'
import tailwind from './../assets/image/tailwind.png'
import mongodb from './../assets/image/mongodb.png'
import c from './../assets/image/c++.png'

const Skills = () => {
  return (
    <div id="skills">
          <div className="py-24">
        <h1 className="text-4xl text-center font-bold  text-purple-950">Check out My Skills here</h1>
        <p className="py-4 font-semibold text-lg px-10 text-center  text-purple-950">I possess a diverse skill set that encompasses HTML5, CSS3, Bootstrap, Tailwind, React.js, C#, C++, and JavaScript. With a strong foundation in computer science, I am adept at leveraging these skills to develop compelling and responsive web applications. My expertise extends to technologies such as Node.js, Firebase, MongoDB, and Express.js, enabling me to create robust server-side functionalities. Alongside my technical abilities, I also excel in communication and time management, contributing effectively to collaborative environments.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 items-center justify-center ">
        <div>
          <img className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px]" src={html} alt="" />
          <p className='text-center font-semibold  text-purple-950'>HTML 5</p>
  </div>
        <div ><img className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px] " src={css} alt="" />
        <p className='text-center font-semibold  text-purple-950'>CSS 3</p></div>
  <div ><img  className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px]" src={javascript} alt="" /><p className='my-4 text-center font-semibold  text-purple-950'>Javascript</p></div>
        <div ><img className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px]" src={node} alt="" />
        <p className='text-center font-semibold  text-purple-950'>Node js</p></div>
        <div ><img className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px]" src={react} alt="" />
        <p className='text-center font-semibold  text-purple-950'>React</p></div>
        <div ><img className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px]" src={boostrap} alt="" />
        <p className='text-center font-semibold  text-purple-950'>Boostrap</p></div>
        <div ><img className="shadow-xl shadow-gray-400 my-4 mx-auto rounded-lg w-[200px] h-[150px]" src={tailwind} alt="" />
        <p className='text-center font-semibold  text-purple-950'>Tailwind</p></div>
        <div ><img className="my-4 mx-auto rounded-lg w-[200px] h-[150px] shadow-lg shadow-gray-400" src={mongodb} alt="" />
        <p className='text-center font-semibold  text-purple-950'>MongoDb</p></div>
        <div ><img className="my-4 mx-auto shadow-lg shadow-gray-400 rounded-lg w-[200px] h-[150px]" src={c} alt="" />
        <p className='text-center font-semibold  text-purple-950'>C++</p></div>
 

</div>
</div>
</div>
  );
};

export default Skills;