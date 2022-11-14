 
 const Hero = () =>{
  const HeroImg = "./assets/heroImg.svg"
  
  //hero section code
  return(
    <section className="flex lg:flex-row md:flex-col flex-col lg:items-start md:mb-32 mb-0 lg:mb-10">
    
    <article className="grid grid-cols-1 gap-5 py-5 hero-section px-12">
    <h1 
   className="general font-normal lg:text-6xl md:text-6xl text-3xl tracking-tight leading-10"> 
    Rent a  <span 
    style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold"> 
     Place </span> away from 
    <span style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold"> Home 
    </span> in the
    <span style={{background:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", WebkitBackgroundClip:"text", webkitTextFillColor:"transparent"}} className="font-bold"> Metaverse 
    </span>
    </h1>
    
    <p
    className="general font-normal text-2xl lg:leading-9 md: leading-9 leading-8 p-5">
    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
    </p>
    
    <div>
    <input type="text"
    placeholder="Search for location"
    className="input-box px-5 py-3 lg:w-80 md:w-80 w-60 h-14"/>
    
    <input type="submit" value="search"
    className="search-btn text-white px-5 py-3 w-56 mt-3 h-14"/>
    </div>
    </article>
    
    {/*image section*/}
    <article 
    className="items-center justify-center mx-auto h-full hero-img md:mt-20 mt-0 lg:mt-0">
    
    <img 
    src={HeroImg} alt="image1"/>
      </article>
    </section>
    )
    }
    
    export default Hero