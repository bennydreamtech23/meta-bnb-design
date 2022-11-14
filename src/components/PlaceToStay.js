

import Navbar from "./Navbar";
import Footer from "./Footer"
import {FaHeart, FaStar, FaSlidersH} from 'react-icons/fa';
import {useState} from "react";
import Categories from "./Categories";

const PlaceToStay = () =>{
  const [data, setData] = useState(Categories)
  
  const filterResult = (catItem) =>{
    const result = Categories.filter((curDate) =>{
      return curDate.category === catItem;
    });
    setData(result)
  }
  return(
<>
<Navbar/>

<header className="grid lg:grid-cols-9 grid-cols-3 md:grid-cols-5 gap-2 m-5">

<button 
className="general bg-transparent lg:text-xl text-base hover:underline"
onClick= {() => filterResult("restaurant")}>
Restaurant
</button>

<button 
className="general bg-transparent lg:text-xl text-base hover:underline"
onClick= {() => filterResult("cottage")}>
Cottage
</button>

<button 
className="general bg-transparent lg:text-xl text-base hover:underline"
onClick= {() => filterResult("castle")}>
Castle
</button>

<button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("fantast city")}>
fantast city
</button>

<button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("beach")}>
beach
</button>

<button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("cabins")}>
Cabins
</button>

<button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("off-grid")}>
Off-grid
</button>

<button className="general bg-transparent lg:text-xl text-base hover:underline" onClick= {() => filterResult("farm")}>
Farm
</button>

<button className="general  lg:text-xl text-base btn-location w-28 lg:w-32">
Location 
<FaSlidersH className="inline-block ml-3 lg:ml-2"/>
</button>
</header>

    <section 
    className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 mt-3 px-6 py-5 mb-3">
{data.map((values) =>{
const {id, image, name, view, ticket, content} = values
  return(
      <article
    className="card-deco flex flex-col items-center justify-center mx-auto" key={id}>
    <div 
    className="relative">
    <img 
    src={image} alt="houseflag" 
    className="card-image"/>
    <FaHeart 
    className="absolute top-3 left-56 text-white text-xl cursor-pointer hover:text-rose-500"/>
    </div>
    <div 
    className="flex flex-row px-2 py-2">
    <div>
    <h3 
    className="text">
    {name}
    </h3>
    <p 
    className="text">
    {view}
    </p>
    <span>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
    <FaStar  style={{display:"inline-block", color:"#a02279"}}/>
     </span>
    </div>
    <div>
    <h3
    style={{fontWeight:"700"}} 
    className="text text-right">
    {ticket}
    </h3>
    <p
    className="text text-right"> 
    {content}
    </p>
    </div>
    </div>
    </article>
  )
})}

    </section>
<Footer/>
</>
    )
}

export default PlaceToStay