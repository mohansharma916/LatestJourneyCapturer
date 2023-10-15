import Link from "next/link";
import Button from "./Button";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = ({ toggle,fontColor }) => {
  return (
    <>
      {/* <NavItem page={"/"} /> */}
      <div className="  w-full h-15 bg-transparent absolute  top-5 ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className={`hidden md:flex gap-x-6 ${fontColor?fontColor:"text-white"} text-[18px] `}>

            <li >
                <Link href="/home">
                  <div className="flex items-center gap-x-3">
                  <BsFillTelephoneFill/>
                  <p>+91-9971627910</p>
                  </div>
                </Link>
              </li>
              <li >
                <Link href="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li >
                <Link href="/trips">
                  <p>Trips</p>
                </Link>
              </li>
              <li>
                <Link href="/aboutUs">

                  <p>About Us</p>
                </Link>
              </li>

              <li>
                <Link href="/about-us">
                  <p>Blog</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block flex text-white gap-3">
              <Link href="/signup">
              <Button text="Sign Up" />
              </Link>


              <Link href="/login" >
              <Button text="Log In"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
