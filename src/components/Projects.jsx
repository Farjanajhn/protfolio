import chef1 from './../assets/image/chef1.png'
import chef2 from './../assets/image/chef2.png'
import chef3 from './../assets/image/chef3.png'
import chef4 from './../assets/image/chef4.png'
import toy1 from './../assets/image/toy1.png'
import toy2 from './../assets/image/toy2.png'
import toy3 from './../assets/image/toy3.png'
import toy4 from './../assets/image/toy4.png'
import lingo1 from './../assets/image/lingo1.png'
import lingo2 from './../assets/image/lingo2.png'
import lingo3 from './../assets/image/lingo3.png'
import lingo4 from './../assets/image/lingo4.png'


const Projects = () => {
  return (
    <div className='my-6'>
      <h1 className='text-center text-4xl font-semibold text-purple-950'>My Projects</h1>
      <p className='py-4 font-semibold text-lg px-10 text-center  text-purple-950'>I have developed some impressive projects for my portfolio. The third project is a user management system website built with the MERN stack, offering personalized dashboards for different user roles. The second project is an e-commerce website that enables product management for sellers and delivers a seamless buying experience for customers. These projects demonstrate my expertise in full-stack development and creating intuitive user interfaces. And first one is a single page application. Every single chef has a different page where users can select their favorite recipe and this route is  private  and the user must login first.</p>
         <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-44">

        <div className=''>
          <h1 className="text-center mb-2 font-semibold text-lg  text-purple-950">The chefs table</h1>
        <div className="h-64 carousel carousel-vertical rounded-md">
<div className="carousel-item h-full">
<img className="w-[380px]" src={chef1} />
</div> 
<div className="carousel-item h-full">
<img className="w-[380px] " src={chef2} />
</div> 
<div className="carousel-item h-full">
<img className="w-[380px]" src={chef3} />
</div> 
<div className="carousel-item h-full">
<img className="w-[380px]" src={chef4} />
</div> 
          </div>
          <div className='flex flex-cols-1 justify-around font-semibold'>
<div>
  <a href="https://github.com/Farjanajhn/the-chefs-table-client">github_client</a>
</div>
<div>
  <a href="https://github.com/Farjanajhn/the-chefs-table-server">github_server</a>
</div>
<div>
  <a href="https://the-chefs-table.web.app">Live Link</a>
</div>
</div>
<p className='text-center font-semibold py-3 rounded-lg'><span className='bg-gray-400 py-2 rounded-md'>Technology </span>: Node Js, Firebase, React Js. </p>
       
</div>

    
    <div>
        <h1 className="text-center mb-2 font-semibold text-lg  text-purple-950">Toy Story</h1>

        <div className="h-64 carousel carousel-vertical rounded-md">
        
        <div className="carousel-item h-full rounded-md">
        <img className=" w-[380px]" src={toy1} />
        </div> 
        <div className="carousel-item h-full rounded-md">
        <img className=" w-[380px]" src={toy2} />
        </div> 
        <div className="carousel-item h-full rounded-md">
        <img className=" w-[380px]" src={toy3} />
        </div> 
        <div className="carousel-item h-full rounded-md">
              <img className=" w-[380px]" src={toy4} />
              
        </div> 
          </div>
          <div className='flex flex-cols-1 justify-around font-semibold'>
<div>
  <a href="https://github.com/Farjanajhn/the-toy-story-client">github_client</a>
</div>
<div>
  <a href="https://github.com/Farjanajhn/the-toy-story-server">github_server</a>
</div>
<div>
  <a href=" https://toy-story-b1089.web.app">Live Link</a>
</div>
</div>
<p className='text-center font-semibold py-3 rounded-lg'><span className='bg-gray-400 py-2 rounded-md'>Technology </span>: Node Js, Firebase, MongoDB, React Js. </p>
      
</div>

        <div>
        <h1 className="text-center mb-2 font-semibold text-lg  text-purple-950">Lingo Bridge</h1>
          
        <div className="h-64 carousel carousel-vertical rounded-md">
<div className="carousel-item h-full rounded-md">
<img className=" w-[380px]" src={lingo1} />
</div> 
<div className="carousel-item h-full rounded-md">
<img className=" w-[380px]" src={lingo2} />
</div> 
<div className="carousel-item h-full rounded-md">
<img className=" w-[380px]" src={lingo3} />
</div> 
<div className="carousel-item h-full rounded-md">
<img className=" w-[380px]" src={lingo4} />
          
</div> 
</div> 
          
<div className='flex flex-cols-1 justify-around font-semibold'>
 <div>
   <a href="https://github.com/Farjanajhn/LingoBridge-client">github_client</a>
 </div>
 <div>
   <a href="https://github.com/Farjanajhn/LingoBridge-server">github_server</a>
 </div>
 <div>
   <a href=" https://lingobridge-934f9.web.app/">Live Link</a>
 </div>
</div>
<p className='text-center font-semibold py-3 rounded-lg'><span className='bg-gray-400 py-2 rounded-md'>Technology</span> : Node Js, Firebase, MongoDB, React Js.Jwt token </p> 

</div>
</div>
</div>

  );
};

export default Projects;
