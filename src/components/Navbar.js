
import {FaBars} from 'react-icons/fa';
import {useState} from "react";
import {IoClose} from 'react-icons/io5';
import {BsChevronRight} from "react-icons/bs";
const Navbar = () =>{
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const NavImg = "./vectors/logo.svg";
  const MetaImg ="./vectors/image 66.png";
  const Wallet = "./vectors/image 69.png"
  
  return(
    <>
      <nav className="relative flex flex-wrap items-center justify-center px-2 py-5 bg-white">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
    <div className="w-full relative flex justify-between lg:w-auto
    lg:static lg:block lg:justify-start">
    <a className="text-sm inline-block mr-4 py-5 whitespace-nowrap"   
    href="/">
    <img src={NavImg} alt="brandlogo"
    className="md:w-24 w-64"/>
    </a> 
    <button className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    type="button" 
    onClick={() => setNavbarOpen(!navbarOpen)}>
    <FaBars/>
    </button>
    </div>
    <div className={ "lg:flex flex-grow items-center" + 
    (navbarOpen ? " flex" : " hidden") }
    id="example-navbar-danger" >
    
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto"> 
    <li className="nav-item md:mr-10">
    <a className="general px-3 py-2 flex items-center text-xl font-normal
    leading-snug hover:opacity-75"
    href="/"> 
    Home
 </a>
 </li> 
  
    <li className="nav-item lg:mr-20">
    <a href="/placetostay"
    className=" general px-3 py-2 flex items-center text-xl font-normal
    leading-snug hover:opacity-75">
    Place to stay
    </a>
    </li>
   
     <li className="nav-item lg:mr-20">
    <a href="" 
    className="general px-3 py-2 flex items-center text-xl font-normal
    leading-snug hover:opacity-75">
    NFTs
    </a>
    </li>
    
    <li className="nav-item lg:mr-36">
    <a href="" 
    className="general px-3 py-2 flex items-center text-xl font-normal leading-snug hover:opacity-75">
    Community
    </a>
    </li>
    
    <li>
    <button onClick={() => setShowModal(true)}
    className="px-3 py-3 flex items-center text-xl font-normal leading-snug hover:opacity-75 text-white mx-auto justify-center"
    style={{backgroundImage:"linear-gradient(90deg, #A02279 11.54%, #A02279 11.45%)", borderRadius:10}}>
    Connect Wallet
    </button>
    </li>
    </ul>
    </div>
    </div>
    </nav>
    
    {/*modal code*/}
    
  {showModal ? ( 
    <> 
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
    <div className="relative w-auto my-6 mx-auto lg:max-w-md max-w-sm">
    
    {/*content*/} 
    
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> 
    {/*header*/} 
    
    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"> 
    
    <h3 className="text-2xl" style={{fontFamily:"Red Rose", color:"#333333"}}> 
    Connect Wallet
    </h3>
    <button className="p-1 ml-auto text-md leading-none font-semibold" 
    onClick={() => setShowModal(false)}> 
    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none" style={{fontFamily:"Red Rose", color:"#333333"}}> 
    <IoClose/>
    </span>
    </button>
    </div> 
    {/*body*/} 
    
    <div className="relative p-6 flex-auto"> 
    <p className="my-4 font-normal text-xl leading-5"
    style={{color:"#333333"}}>
    Choose your preffered wallet:
    </p>
    
   <div className="flex items-start justify-around p-5 modal-box mb-3"> 
   <div className="flex flex-row items-start justify-between">
   <img src={MetaImg} alt="metamask"/>
   <p className="my-2 text-black text-lg leading-6 font-semibold" style={{fontFamily:"sora"}}>Metamask</p>
   </div>
   
   <div className="flex flex-row items-start justify-between p-5">
   <BsChevronRight/>
   </div>
    </div>

   <div className="flex items-start justify-around p-5 modal-box"> 
   <div className="flex flex-row items-start justify-between">
   <img src={Wallet} alt="metamask"/>
   <p className="my-2 text-black text-lg leading-6 font-semibold">Metamask</p>
   </div>
   
   <div className="flex flex-row items-start justify-between p-5">
   <BsChevronRight/>
   </div>
    </div>
 </div> 
    </div>
    </div>
    </div> 
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    ) : null} 
    </>
    )
}
export default Navbar