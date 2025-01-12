import React from "react";
import { useState,useRef } from "react";
import LogoImg from "../../assets/pngs/logo.png";
import { menulists } from "../../assets/data/data";
import { CustomNavLink,CustomLink,Badges } from "./CustomComponents";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

export const Header = () => {

const [isOpen, setIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);  
const menuRef = useRef(null);


const toggleMenu = () => {
    setIsOpen(!isOpen);
}

const closeMenuOutside = (event) =>{
  if (menuRef.current && !menuRef.current.contains(event.target)) {
    setIsOpen(false);
  }

}
  return (
    //  <div className='lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10'></div>
    <>
      <header className="px-12 py-3 bg-white-100 relative z-20">
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={LogoImg} alt="LogoImg" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path}> {list.link} </CustomNavLink>
                </li>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomNavLink href="/">Login</CustomNavLink>
              <span className="">/</span>
              <CustomNavLink href="Register">Register</CustomNavLink>
            </div>

            <div className="icon flex items-center justify-center gap-6">
              <IoSearchOutline size={23} />

              <div className=" relative z-20">
                <IoCartOutline size={23} />

                <div className=" absolute -top-2 -right-2.5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};


