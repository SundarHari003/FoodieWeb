import React, { useState,useEffect } from 'react'
import {Link as ScrollLink} from 'react-scroll'
import { Link } from 'react-router-dom';
import { IoClose, IoFastFood, IoPeopleSharp, IoRestaurantSharp } from "react-icons/io5";
import { MdArrowDropDown, MdArrowDropUp, MdHome, MdOutlinePersonSearch, MdOutlineTravelExplore } from "react-icons/md";
import {  BiLogoBlogger, BiSolidFoodMenu } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";
import { GiFruitBowl, GiMeat } from "react-icons/gi";
import Buttons from '../layout/Buttons';
const Navbar = () => {
    const[menu,setMenu]=useState(true);
    const[drop,setDrop]=useState(false);
    const[drops,setDrops]=useState(false);
    const[navdrop,setNavdrop]=useState(false);
    const[navdrops,setNavdrops]=useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    const MainChange=(x)=>{
        if(x!=1)
        {
            Change();
        }
        menuChanging(false);
        menuChanged(false);
    }
    const menuChange=(x)=>{
        if(x==1)
        {
            x=!drop;
        }
        setDrop(x);
    }
    const menuChanges=(x)=>{
        if(x==1)
        {
            x=!drops;
        }
        setDrops(x);
    }
    const menuChanging=(x)=>{
        if(x==1)
        {
            x=!navdrop;
        }
        setNavdrop(x);
        setNavdrops(false);
    }
    const menuChanged=(x)=>{
        if(x==1)
        {
            x=!navdrops;
        }
        setNavdrops(x);
        setNavdrop(false);
    }
    const Change=()=>{
        let x=menu?false:true;
        setMenu(x);
    }
    const[activeItem,setActiveItem]=useState(0);
    const Activeted=(x)=>{
        setActiveItem(x)
    }

  return (
    <div>
        <nav className={` z-50 fixed top-0 w-full ${isScrolled ? 'nav-black' : 'nav-transparent'}`}>
            <div  className='flex justify-between py-3 px-7 items-center'>
                <div>
                    <h1 className=' flex items-center font-semibold lg:text-3xl text-2xl cursor-pointer'>
                        <IoRestaurantSharp/><span className=" text-orange-600">Foodie</span>Web
                    </h1>
                </div>
                <div className=' hidden lg:flex w-3/4 justify-between items-center'>
                    <ul className='flex gap-7 items-center text-xl'>
                        <li>
                            <Link to="/" onClick={()=>Activeted(1)} className={`NavItems ${activeItem==1?'active':' '}`}><MdHome/>Home</Link>
                        </li>
                        <li className=' relative'>
                            <ScrollLink  to="Dishes" spy={true} smooth={true} duration={500} className={`NavItems ${activeItem==2?'active':' '}`} onClick={()=>{menuChange(1); Activeted(2)}}><BiSolidFoodMenu/>Dishes{drop?<MdArrowDropUp className=' pt-1' size={30}/>:<MdArrowDropDown className=' pt-1' size={30}/>}</ScrollLink >
                            <div className={`${drop?'block':'hidden'} bg-gray-400 bg-opacity-50 rounded dropdown absolute top-7 w-full flex flex-col gap-1`} onMouseLeave={()=>menuChange(false)}>
                                <ScrollLink to="vegetarian" spy={true} smooth={true} duration={500} className='NavItems'><GiFruitBowl/>Veg</ScrollLink ><hr />
                                <ScrollLink  to="non-vegetarian" spy={true} smooth={true} duration={500} className='NavItems'><GiMeat/>Non Veg</ScrollLink >
                            </div>
                        </li>
                        <li>
                            <ScrollLink to="About" spy={true} smooth={true} duration={500} onClick={()=>Activeted(3)} className={`NavItems ${activeItem==3?'active':' '}`}><IoPeopleSharp/>AboutUs</ScrollLink >
                        </li>
                        <li>
                            <Link to="/order" onClick={()=>Activeted(4)} className={`NavItems ${activeItem==4?'active':' '}`}><IoFastFood/>Orders</Link >
                        </li>
                        <li className=' relative'>
                            <Link to="/" className={`NavItems ${activeItem==5?'active':' '}`} onClick={()=>{menuChanges(1); Activeted(5)}}><MdOutlineTravelExplore/>Explore{drops?<MdArrowDropUp className=' pt-1' size={30}/>:<MdArrowDropDown className=' pt-1' size={30}/>}</Link>
                            <div className={`${drops?'block':'hidden'}  bg-gray-400 bg-opacity-50 rounded dropdown absolute top-7 w-full flex flex-col gap-1`} onMouseLeave={()=>menuChanges(false)}>
                                <Link to="/blog" className='NavItems'><BiLogoBlogger/>Blog</Link><hr />
                                <Link to="/" className='NavItems'><MdOutlinePersonSearch/>Careers</Link>
                            </div>
                        </li>
                    </ul>
                    <div className=' cursor-pointer flex items-center'>
                        <Buttons title="Login"/>
                    </div>
                </div>
                <div className='lg:hidden block text-2xl'>
                    {
                        menu?<RiMenu3Fill size={32} onClick={Change}/>:<IoClose size={32} onClick={MainChange}/>
                    }  
                </div>
            </div>
            <div className={`${menu?'translate-x-full':'translate-x-0'} transition-transform duration-300 lg:hidden navmenu absolute top-13 w-full`}>
                <ul className={` navmenu w-full text-xl text-white bg-black bg-opacity-95 text-center flex flex-col items-center z-10`}>
                    <li>
                        <Link to="/" className='NavItems' onClick={()=>MainChange(1)}><MdHome/>Home</Link> <hr />
                    </li>
                    <li className=' relative p-0 flex flex-col'>
                        <ScrollLink spy={true} smooth={true} duration={500} to="Dishes" className='NavItems' onClick={()=>menuChanging(1)}><BiSolidFoodMenu/>Dishes{navdrop?<MdArrowDropUp size={30}/>:<MdArrowDropDown  size={30}/>}</ScrollLink>
                        <div className={`${navdrop?' block':'hidden'}  flex w-full flex-col items-center gap-2 bg-slate-800  border-x-8 border-b-8 p-3 border-black border-opacity-70 bg-opacity-50`}>
                            <ScrollLink spy={true} smooth={true} duration={500} to="vegetarian" className='NavMenus flex items-center'><GiFruitBowl className=' pr-1'/>Veg</ScrollLink><hr />
                            <ScrollLink spy={true} smooth={true} duration={500} to="non-vegetarian" className='NavMenus flex items-center'><GiMeat className=' pr-1'/>Non Veg</ScrollLink>
                        </div><hr/>
                    </li><hr />
                    <li>
                        <ScrollLink spy={true} smooth={true} duration={500} to="/" className='NavItems' onClick={()=>MainChange(1)}><IoPeopleSharp/>About Us</ScrollLink><hr />
                    </li>
                    <li>
                        <Link to="/order" className='NavItems' onClick={()=>MainChange(1)}><IoFastFood/>Orders</Link><hr />
                    </li>
                    <li className=' relative p-0 flex flex-col'>
                        <Link to="/" className='NavItems ' onClick={()=>menuChanged(1)}><MdOutlineTravelExplore/>Explore{navdrops?<MdArrowDropUp size={30}/>:<MdArrowDropDown  size={30}/>}</Link>
                        <div className={`${navdrops?'block':'hidden'}  flex w-full flex-col items-center gap-2 bg-slate-800 bg-opacity-50 border-black border-opacity-70  border-x-8 border-b-8 p-3`}>
                            <Link to="/blog" className='NavMenus flex items-center'><BiLogoBlogger className=' pr-1'/>Blog</Link><hr />
                            <Link to="/" className='NavMenus flex items-center'><MdOutlinePersonSearch className=' pr-1'/>Careers</Link>
                        </div><hr />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar