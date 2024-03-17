import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice.js";
import { toggleTheme } from "../redux/theme/themeSlice.js";
export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector(state => state.theme)
  const dispatch = useDispatch()





const handleSignOut = async() =>{
  try {
    const res  = await fetch('/api/user/signout', {
      method: "POST"
    })
    const data = res.json()
    if(!res.ok){
      console.log(data.message);
    }else{
      dispatch(signOutSuccess())
    }
  } catch (error) {
    console.log(error.message);
  }
}








  return (
    <div>
      <Navbar className="border-b-2">
        <Link to="/" className="bg-gray-200 font-semibold px-2 py-1 rounded-md">
          <p className="dark:text-black">MERNB</p>
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-12 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-4 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill
            onClick={()=> dispatch(toggleTheme())}
          >
            {theme === 'light' ? <FaMoon/> : <FaSun/>}
          </Button>
          {currentUser ? (
              <Dropdown
                arrowIcon = {false}
                inline
                label={
                  <Avatar alt="user" img={currentUser.profilePicture} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">@{currentUser.username}</span>
                  <span className="block text-sm font-medium truncate">{currentUser.email}</span>
                </Dropdown.Header>
                <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>
                      Profile
                    </Dropdown.Item>
                </Link>
                <Dropdown.Divider/>
                <Dropdown.Item onClick={handleSignOut} >Sign Out</Dropdown.Item>
              </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button className="bg-gray-300" color="gray">
                Sign In
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
