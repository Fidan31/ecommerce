import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ href, className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green`
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};

const CustomLink = ({className, children }) => {
  const linkStyles =
    "text-[15px] font-medium text-gray-600 cursor-pointer list-none";

  return (
    <NavLink
    
      className={ 
 
          `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};


const Badges = ({color, children }) => {


  return (
    <div className={`w-[18px] h-[18px] ${color} flex justify-center rounded-full text-[12px] text-white`}>

       {children}

    </div>
     
   
  );
};

CustomNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomLink.propTypes={
className:PropTypes.string.isRequired,
children:PropTypes.node.isRequired,  
}

Badges.propTypes={
  color:PropTypes.node.isRequired,
  children:PropTypes.node.isRequired,
}

export { 
  CustomNavLink,
  CustomLink,
  Badges 
};
