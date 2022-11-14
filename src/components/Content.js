
//content image section

import {FaHeart, FaStar} from 'react-icons/fa';
const Content = () =>{
  const bgNft = "./assets/Frame 59546.svg";
  const image1 = "./assets/druid6.png";
  const image2 = "./assets/aise.png";
  const image3 = "./assets/s1.png";
  const image4 = "./assets/aise1.png";
  const image5 = "./assets/dvn1.png";
  const image6 = "./assets/s5.png";
  const image7 = "./assets/s16.png";
  const image8 = "./assets/s11.png";
  
  return(
    <main>
    
    <div className="p-9">
    <h1 
    className="font-bold lg:text-5xl text-4xl text-center leading-10"
    style={{fontFamily:"Red Rose"}}>
    Inspiration for your next adventure
    </h1>
    </div>
    {/*gallery image section*/}
    
    <section 
    className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-3 px-6 py-5 mb-3">

{/*card1*/}
    <article
    className="card-deco flex flex-col items-center justify-center mx-auto">
    
    <div 
    className="relative">
    <img 
    src={image1} alt="houseflag" 
    className="card-image"/>
    <FaHeart 
    className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    
    <div 
    className="flex flex-row px-2 py-2">
    <div>
    <h3 
    className="text">
    Desert King
    </h3>
    <p 
    className="text">
    23345km away
    </p>
    <span>
    <FaStar
    style={{display:"inline-block", color:"#a02279"}}/>
    
    <FaStar
    style={{display:"inline-block", color:"#a02279"}}/>
    
    <FaStar
    style={{display:"inline-block", color:"#a02279"}}/>
    
    <FaStar
    style={{display:"inline-block", color:"#a02279"}}/>
    
    <FaStar
    style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>
    <div>
    
     <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    
    <p
    className="text text-right"> 
    available for 2weeks stay
    </p>
    </div>
    </div>
    </article>
    
    {/*card2*/}
       <article 
       className="card-deco flex flex-col items-center justify-center mx-auto">
    <div 
    className="relative">
    <img src={image2} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    
    <div 
    className="flex flex-row px-2 py-2">
    <div>
    <h3 
    className="text">
    Desert King
    </h3>
    <p className="text">23345km away</p>
    
    <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
     
    </div>
    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    
    {/*card3*/}
    <article className="card-deco flex flex-col items-center justify-center mx-auto">
    <div className="relative">
    <img src={image3} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    <div className="flex flex-row px-2 py-2">
    <div>
    <h3 className="text">Desert King</h3>
    <p className="text">23345km away</p>
    <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>

    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    
    {/*card4*/}
        <article className="card-deco flex flex-col items-center justify-center mx-auto">
    <div className="relative">
    <img src={image4} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    <div className="flex flex-row px-2 py-2">
    <div>
    <h3 className="text">Desert King</h3>
    <p className="text">23345km away</p>
    <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>

    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    </section>

{/*second section*/}
     <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-3">

{/*card5*/}
    <article className="card-deco flex flex-col items-center justify-center mx-auto">
    <div className="relative">
    <img src={image5} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    <div className="flex flex-row px-2 py-2">
    <div>
    <h3 className="text">Desert King</h3>
    <p className="text">23345km away</p>
   <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>
    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    
    {/*card6*/}
       <article className="card-deco flex flex-col items-center justify-center mx-auto">
    <div className="relative">
    <img src={image6} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    
    <div className="flex flex-row px-2 py-2">
    <div>
    <h3 className="text">Desert King</h3>
    <p className="text">23345km away</p>
      <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>
    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    
    {/*card7*/}
    <article className="card-deco flex flex-col items-center justify-center mx-auto">
    <div className="relative">
    <img src={image7} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    <div className="flex flex-row px-2 py-2">
    <div>
    <h3 className="text">Desert King</h3>
    <p className="text">23345km away</p>
    <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>

    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    
    {/*card8*/}
        <article className="card-deco flex flex-col items-center justify-center mx-auto">
    <div className="relative">
    <img src={image8} alt="houseflag" className="card-image"/>
    <FaHeart className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    <div className="flex flex-row px-2 py-2">
    <div>
    <h3 className="text">Desert King</h3>
    <p className="text">23345km away</p>
    <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>
    <div>
    <h3 style={{fontWeight:"700"}} className="text text-right">IMBT per night</h3>
    <p className="text text-right"> available for 2weeks stay</p>
    </div>
    </div>
    </article>
    </section>

{/*metabnb nft section*/}

<section className="bg grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 text-white px-5 py-5 mt-3">

<article className="flex flex-col items-start justify-start">
<h1 style={{fontFamily:"Red Rose"}} className="font-bold text-5xl leading-10 lg:pt-48 
md:pt-36 pt-28 pb-10">Metabnb NFTs</h1>

<p className="text-start font-normal text-lg leading-9" style={{fontFamily:"Red Rose"}}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.
</p>

<button className="btn text-rose-900">Learn more</button>
</article>

<article className="lg:mt-0 md:mt-20 mt-5">
<img src={bgNft} alt="BgNft"/>
</article>

</section>
     
    </main>
    )
}

export default Content 