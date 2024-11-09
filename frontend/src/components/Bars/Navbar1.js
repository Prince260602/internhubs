// // // // import React, { useState, useEffect } from "react";
// // // // import "../../componentsCss/Bars/navbar1.css";
// // // // import {
// // // //   faBars,
// // // //   faSignOutAlt,
// // // //   faCircleUser,
// // // // } from "@fortawesome/free-solid-svg-icons";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // function Navbar1() {
// // // //   const [dropdownVisible, setDropdownVisible] = useState(false);
// // // //   const [colorChange, setColorChange] = useState(false);
// // // //   const [loggedInUser, setLoggedInUser] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   const togglebtn = () => setDropdownVisible(!dropdownVisible);

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       toast.success("Logged Out!", {
// // // //         position: toast.POSITION.TOP_CENTER,
// // // //       });
// // // //       sessionStorage.clear();
// // // //       setLoggedInUser(null);
// // // //       navigate("/");
// // // //     } catch (error) {
// // // //       console.log("Error logging out:", error);
// // // //     }
// // // //   };

// // // //   const fetchLoggedInUser = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:5500/user/login/verify", {
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           authtoken: sessionStorage.getItem("auth-token"),
// // // //         },
// // // //       });
// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         setLoggedInUser(data.user);
// // // //       } else {
// // // //         console.log("Verification failed");
// // // //       }
// // // //     } catch (error) {
// // // //       console.log("Error fetching logged-in user:", error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchLoggedInUser();
// // // //   }, []);

// // // //   const changeNavbarColor = () => {
// // // //     if (window.scrollY >= 500) setColorChange(true);
// // // //     else setColorChange(false);
// // // //   };

// // // //   useEffect(() => {
// // // //     window.addEventListener("scroll", changeNavbarColor);
// // // //     return () => {
// // // //       window.removeEventListener("scroll", changeNavbarColor);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="navbarsection">
// // // //       <div className={colorChange ? "navbarchangecolor" : "navbar"}>
// // // //         <div className="navbarLeft">
// // // //           <Link
// // // //             to="/"
// // // //             style={{ color: colorChange ? "white" : "black" }}
// // // //           >
// // // //             Ten<span style={{ color: "blue" }}>Internships </span>
// // // //           </Link>
// // // //         </div>

// // // //         <div className="navbarRight">
// // // //           <Link
// // // //             style={{ color: colorChange ? "white" : "black" }}
// // // //             to="/jobs"
// // // //             className="navbarRightbtns"
// // // //           >
// // // //             Find Internships
// // // //           </Link>
// // // //           <Link
// // // //             style={{ color: colorChange ? "white" : "black" }}
// // // //             to="/contactus"
// // // //             className="navbarRightbtns"
// // // //           >
// // // //             Contact Us
// // // //           </Link>

// // // //           {loggedInUser ? (
// // // //             <>
// // // //               <Link
// // // //                 style={{ color: colorChange ? "white" : "black" }}
// // // //                 to="/eprofile"
// // // //                 className="navbarRightbtns"
// // // //               >
// // // //                 My Profile
// // // //               </Link>
// // // //               {loggedInUser.userType !== "admin" && (
// // // //                 <Link
// // // //                   style={{ color: colorChange ? "white" : "black" }}
// // // //                   to="/user/applications"
// // // //                   className="navbarRightbtns"
// // // //                 >
// // // //                   My Applications
// // // //                 </Link>
// // // //               )}
// // // //               <div
// // // //                 style={{ color: colorChange ? "white" : "black", cursor: "pointer" }}
// // // //                 onClick={handleLogout}
// // // //                 className="navbarRightbtns"
// // // //               >
// // // //                 <FontAwesomeIcon icon={faSignOutAlt} />
// // // //                 <div>Logout</div>
// // // //               </div>
// // // //             </>
// // // //           ) : (
// // // //             <>
// // // //               <Link
// // // //                 style={{ color: colorChange ? "white" : "black" }}
// // // //                 to="/user/login"
// // // //                 className="navbarRightbtns"
// // // //               >
// // // //                 Login
// // // //               </Link>
// // // //               <Link
// // // //                 style={{ color: colorChange ? "white" : "black" }}
// // // //                 to="/user/register"
// // // //                 className="navbarRightbtns"
// // // //               >
// // // //                 Register
// // // //               </Link>
// // // //               <div
// // // //                 style={{ color: colorChange ? "white" : "black", cursor: "pointer" }}
// // // //                 onClick={handleLogout}
// // // //                 className="navbarRightbtns"
// // // //               >
// // // //                 <FontAwesomeIcon icon={faSignOutAlt} />
// // // //                 <div>Logout</div>
// // // //               </div>
// // // //             </>
// // // //           )}
// // // //         </div>       
// // // //       </div>
// // // //       <ToastContainer />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Navbar1;



// // // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
// // // // // // import { FaBarsStaggered } from "react-icons/fa6";
// // // // // // // import image from "../assets/logo.jpg";
// // // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // // const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
// // // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // //   const [loggedInUser, setLoggedInUser] = useState(null);  // To store logged-in user info
// // // // // //   const dropdownRef = useRef(null);

// // // // // //   // Handle toggling of the sidebar menu
// // // // // //   const toggleMenu = () => {
// // // // // //     if (isSidebarOpen) {
// // // // // //       handleToggleSidebar(); 
// // // // // //     }
// // // // // //     setIsOpen(!isOpen);
// // // // // //   };

// // // // // //   // Handle dropdown toggle
// // // // // //   const toggleDropdown = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDropdownOpen(prev => !prev);
// // // // // //   };

// // // // // //   // Effect to check user authentication on mount
// // // // // //   useEffect(() => {
// // // // // //     const token = sessionStorage.getItem("auth-token");
// // // // // //     if (token) {
// // // // // //       // Assuming you have an API that checks the token
// // // // // //       fetch("/user/login/verify", {
// // // // // //         headers: { "Authorization": `Bearer ${token}` }
// // // // // //       })
// // // // // //         .then(response => response.json())
// // // // // //         .then(data => {
// // // // // //           if (data && data.user) {
// // // // // //             setLoggedInUser(data.user); // Set logged-in user info
// // // // // //           }
// // // // // //         })
// // // // // //         .catch((error) => {
// // // // // //           console.log("Error verifying user:", error);
// // // // // //           setLoggedInUser(null); // Reset if verification fails
// // // // // //         });
// // // // // //     }
// // // // // //   }, []);

// // // // // //   // Logout function
// // // // // //   const handleLogout = () => {
// // // // // //     sessionStorage.removeItem("auth-token"); // Remove the token
// // // // // //     setLoggedInUser(null); // Reset the user state
// // // // // //     toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
// // // // // //   };

// // // // // //   // Close dropdown if clicked outside
// // // // // //   useEffect(() => {
// // // // // //     const handleClickOutside = (event) => {
// // // // // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // // // // //         setIsDropdownOpen(false);
// // // // // //       }
// // // // // //     };

// // // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <nav className="bg-gray-800 sticky top-0 left-0 w-full z-50">
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         <div className="flex items-center justify-between h-16">
// // // // // //           <div className="flex items-center">
// // // // // //             <div className="flex-shrink-0 flex">

// // // // // //               <Link to="/" className="text-white font-bold text-xl m-3">
// // // // // //                 TEN-Internship
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="hidden md:flex items-center ml-auto space-x-4">
// // // // // //             <Link
// // // // // //               to="/Info"
// // // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //             >
// // // // // //               Info
// // // // // //             </Link>
// // // // // //             <Link
// // // // // //               to="/Courses"
// // // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //             >
// // // // // //               Courses
// // // // // //             </Link>
// // // // // //             <Link
// // // // // //               to="/pap"
// // // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //             >
// // // // // //               PAP
// // // // // //             </Link>

// // // // // //             {loggedInUser ? (
// // // // // //               <>
// // // // // //                 <Link
// // // // // //                   to="/user/profile"
// // // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //                 >
// // // // // //                   My Profile
// // // // // //                 </Link>
// // // // // //                 <button
// // // // // //                   onClick={handleLogout}
// // // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //                 >
// // // // // //                   Logout
// // // // // //                 </button>
// // // // // //               </>
// // // // // //             ) : (
// // // // // //               <>
// // // // // //                 <Link
// // // // // //                   to="/user/login"
// // // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //                 >
// // // // // //                   Login
// // // // // //                 </Link>
// // // // // //                 <Link
// // // // // //                   to="/user/register"
// // // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // // //                 >
// // // // // //                   Sign-Up
// // // // // //                 </Link>
// // // // // //               </>
// // // // // //             )}
// // // // // //             <div className="relative flex items-center">
// // // // // //               <button
// // // // // //                 onClick={toggleDropdown}
// // // // // //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
// // // // // //               >
// // // // // //                 <IoMdArrowDropdown
// // // // // //                   className={`transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
// // // // // //                   aria-hidden="true"
// // // // // //                 />
// // // // // //               </button>
// // // // // //               {isDropdownOpen && (
// // // // // //                 <div className="absolute top-full right-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg" ref={dropdownRef}>
// // // // // //                   <Link
// // // // // //                     to="/Admin/Call"
// // // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // // //                   >
// // // // // //                     Call
// // // // // //                   </Link>
// // // // // //                   <Link
// // // // // //                     to="/Admin/Message"
// // // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // // //                   >
// // // // // //                     Message
// // // // // //                   </Link>
// // // // // //                   {/* Additional Admin Links */}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="md:hidden">
// // // // // //             <button
// // // // // //               onClick={toggleMenu}
// // // // // //               type="button"
// // // // // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
// // // // // //             >
// // // // // //               <span className="sr-only">Open main menu</span>
// // // // // //               {isOpen ? (
// // // // // //                 <IoMdClose className="block h-6 w-6" aria-hidden="true" />
// // // // // //               ) : (
// // // // // //                 <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
// // // // // //               )}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <ToastContainer />
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;






































































// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
// // // // // import { FaBarsStaggered } from "react-icons/fa6";
// // // // // // import image from "../assets/logo.jpg";
// // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // //   const [loggedInUser, setLoggedInUser] = useState(null);  // To store logged-in user info
// // // // //   const dropdownRef = useRef(null);

// // // // //   // Handle toggling of the sidebar menu
// // // // //   const toggleMenu = () => {
// // // // //     if (isSidebarOpen) {
// // // // //       handleToggleSidebar(); 
// // // // //     }
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   // Handle dropdown toggle
// // // // //   const toggleDropdown = (e) => {
// // // // //     e.preventDefault();
// // // // //     setIsDropdownOpen(prev => !prev);
// // // // //   };

// // // // //   // Effect to check user authentication on mount
// // // // //   useEffect(() => {
// // // // //     const token = sessionStorage.getItem("auth-token");
// // // // //     if (token) {
// // // // //       // Assuming you have an API that checks the token
// // // // //       fetch("/user/login/verify", {
// // // // //         headers: { "Authorization": `Bearer ${token}` }
// // // // //       })
// // // // //         .then(response => response.json())
// // // // //         .then(data => {
// // // // //           if (data && data.user) {
// // // // //             setLoggedInUser(data.user); // Set logged-in user info
// // // // //           }
// // // // //         })
// // // // //         .catch((error) => {
// // // // //           console.log("Error verifying user:", error);
// // // // //           setLoggedInUser(null); // Reset if verification fails
// // // // //         });
// // // // //     }
// // // // //   }, []);

// // // // //   // Logout function
// // // // //   const handleLogout = () => {
// // // // //     sessionStorage.removeItem("auth-token"); // Remove the token
// // // // //     setLoggedInUser(null); // Reset the user state
// // // // //     toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
// // // // //   };

// // // // //   // Close dropdown if clicked outside
// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (event) => {
// // // // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // // // //         setIsDropdownOpen(false);
// // // // //       }
// // // // //     };

// // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // // //   }, []);

// // // // //   return (
// // // // //     <nav className="bg-gray-800 sticky top-0 left-0 w-full z-50">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="flex items-center justify-between h-16">
// // // // //           <div className="flex items-center">
// // // // //             <div className="flex-shrink-0 flex">

// // // // //               <Link to="/" className="text-white font-bold text-xl m-3">
// // // // //                 TEN-Internship
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="hidden md:flex items-center ml-auto space-x-4">
// // // // //             <Link
// // // // //               to="/Info"
// // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               Info
// // // // //             </Link>
// // // // //             <Link
// // // // //               to="/Courses"
// // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               Courses
// // // // //             </Link>
// // // // //             <Link
// // // // //               to="/pap"
// // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               PAP
// // // // //             </Link>

// // // // //             {loggedInUser ? (
// // // // //               <>
// // // // //                 <Link
// // // // //                   to="/user/profile"
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   My Profile
// // // // //                 </Link>
// // // // //                 <button
// // // // //                   onClick={handleLogout}
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   Logout
// // // // //                 </button>
// // // // //               </>
// // // // //             ) : (
// // // // //               <>
// // // // //                 <Link
// // // // //                   to="/user/login"
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   Login
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   to="/user/register"
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   Sign-Up
// // // // //                 </Link>
// // // // //               </>
// // // // //             )}
// // // // //             <div className="relative flex items-center">
// // // // //               <button
// // // // //                 onClick={toggleDropdown}
// // // // //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
// // // // //               >
// // // // //                 <IoMdArrowDropdown
// // // // //                   className={`transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
// // // // //                   aria-hidden="true"
// // // // //                 />
// // // // //               </button>
// // // // //               {isDropdownOpen && (
// // // // //                 <div className="absolute top-full right-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg" ref={dropdownRef}>
// // // // //                   <Link
// // // // //                     to="/Admin/Call"
// // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // //                   >
// // // // //                     Call
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     to="/Admin/Message"
// // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // //                   >
// // // // //                     Message
// // // // //                   </Link>
// // // // //                   {/* Additional Admin Links */}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="md:hidden">
// // // // //             <button
// // // // //               onClick={toggleMenu}
// // // // //               type="button"
// // // // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
// // // // //             >
// // // // //               <span className="sr-only">Open main menu</span>
// // // // //               {isOpen ? (
// // // // //                 <IoMdClose className="block h-6 w-6" aria-hidden="true" />
// // // // //               ) : (
// // // // //                 <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
// // // // //               )}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <ToastContainer />
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;





// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
// // // // // import { FaBarsStaggered } from "react-icons/fa6";

// // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // //   const [loggedInUser, setLoggedInUser] = useState(null);  // Track logged-in user
// // // // //   const dropdownRef = useRef(null);

// // // // //   const toggleMenu = () => {
// // // // //     if (isSidebarOpen) {
// // // // //       handleToggleSidebar(); 
// // // // //     }
// // // // //     setIsOpen(!isOpen);
// // // // //   };

// // // // //   const toggleDropdown = (e) => {
// // // // //     e.preventDefault();
// // // // //     setIsDropdownOpen(prev => !prev);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (event) => {
// // // // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // // // //         setIsDropdownOpen(false);
// // // // //       }
// // // // //     };

// // // // //     const timer = isDropdownOpen ? setTimeout(() => {
// // // // //       setIsDropdownOpen(false);
// // // // //     }, 3000) : null;

// // // // //     document.addEventListener("mousedown", handleClickOutside);
// // // // //     return () => {
// // // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // // //       if (timer) {
// // // // //         clearTimeout(timer);
// // // // //       }
// // // // //     };
// // // // //   }, [isDropdownOpen]);

// // // // //   // Check for logged-in user on initial render
// // // // //   useEffect(() => {
// // // // //     const token = sessionStorage.getItem("auth-token");
// // // // //     if (token) {
// // // // //       // Logic to verify user based on token, here we'll mock it with a simple check
// // // // //       setLoggedInUser({ name: "John Doe", userType: "user" });  // Mock user data for now
// // // // //     } else {
// // // // //       setLoggedInUser(null);
// // // // //     }
// // // // //   }, []);

// // // // //   // Logout function
// // // // //   const handleLogout = () => {
// // // // //     sessionStorage.removeItem("auth-token"); // Clear token
// // // // //     setLoggedInUser(null); // Update state to reflect logged-out status
// // // // //     toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
// // // // //   };

// // // // //   return (
// // // // //     <nav className="bg-gray-800 sticky top-0 left-0 w-full z-50">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="flex items-center justify-between h-16">
// // // // //           <div className="flex items-center">
// // // // //             <div className="flex-shrink-0 flex">


// // // // //               <Link
// // // // //   to="/"
// // // // //   className={`text-${colorChange ? "white" : "black"} font-bold text-xl m-3`}
// // // // // >
// // // // //   Ten<span className="text-blue-500">Internships</span>
// // // // // </Link>

      
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="hidden md:flex items-center ml-auto space-x-4">
// // // // //             <Link
// // // // //               to="/Info"
// // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               Info
// // // // //             </Link>
// // // // //             <Link
// // // // //               to="/Courses"
// // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               Courses
// // // // //             </Link>
// // // // //             <Link
// // // // //               to="/pap"
// // // // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //             >
// // // // //               PAP
// // // // //             </Link>

// // // // //             {/* If logged-in, show profile and logout, otherwise show login and signup */}
// // // // //             {loggedInUser ? (
// // // // //               <>
// // // // //                 <Link
// // // // //                   to="/user/profile"
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   My Profile
// // // // //                 </Link>
// // // // //                 {loggedInUser.userType !== "admin" && (
// // // // //                   <Link
// // // // //                     to="/user/applications"
// // // // //                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                   >
// // // // //                     My Applications
// // // // //                   </Link>
// // // // //                 )}
// // // // //                 <div
// // // // //                   onClick={handleLogout}
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
// // // // //                 >
// // // // //                   <FontAwesomeIcon icon={faSignOutAlt} />
// // // // //                   Logout
// // // // //                 </div>
// // // // //               </>
// // // // //             ) : (
// // // // //               <>
// // // // //                 <Link
// // // // //                   to="/user/login"
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   Login
// // // // //                 </Link>
// // // // //                 <Link
// // // // //                   to="/user/register"
// // // // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //                 >
// // // // //                   Sign-Up
// // // // //                 </Link>
// // // // //               </>
// // // // //             )}

// // // // //             {/* Admin Dropdown */}
// // // // //             <div className="relative flex items-center">
// // // // //               <Link
// // // // //                 to="/Admin"
// // // // //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // // // //               >
// // // // //                 Admin
// // // // //               </Link>
// // // // //               <button
// // // // //                 onClick={toggleDropdown}
// // // // //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium focus:outline-none"
// // // // //               >
// // // // //                 <IoMdArrowDropdown
// // // // //                   className={`transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
// // // // //                   aria-hidden="true"
// // // // //                 />
// // // // //               </button>
// // // // //               {isDropdownOpen && (
// // // // //                 <div className="absolute top-full right-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg">
// // // // //                   <Link
// // // // //                     to="/Admin/Call"
// // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // //                   >
// // // // //                     Call
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     to="/Admin/Message"
// // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // //                   >
// // // // //                     Message
// // // // //                   </Link>
// // // // //                   <Link
// // // // //                     to="/Admin/Details"
// // // // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // // // //                   >
// // // // //                     Details
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="md:hidden">
// // // // //             <button
// // // // //               onClick={toggleMenu}
// // // // //               type="button"
// // // // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
// // // // //               aria-controls="mobile-menu"
// // // // //               aria-expanded={isOpen}
// // // // //             >
// // // // //               <span className="sr-only">Open main menu</span>
// // // // //               {isOpen ? (
// // // // //                 <IoMdClose className="block h-6 w-6" aria-hidden="true" />
// // // // //               ) : (
// // // // //                 <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
// // // // //               )}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <ToastContainer />
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;












// // // import React, { useState, useEffect, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
// // // import { FaBarsStaggered } from "react-icons/fa6";
// // // import "../../componentsCss/Bars/navbar1.css";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // //   const [loggedInUser, setLoggedInUser] = useState(null);  // Track logged-in user
// // //   const dropdownRef = useRef(null);

// // //   const toggleMenu = () => {
// // //     if (isSidebarOpen) {
// // //       handleToggleSidebar(); 
// // //     }
// // //     setIsOpen(!isOpen);
// // //   };

// // //   const toggleDropdown = (e) => {
// // //     e.preventDefault();
// // //     setIsDropdownOpen(prev => !prev);
// // //   };

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsDropdownOpen(false);
// // //       }
// // //     };

// // //     const timer = isDropdownOpen ? setTimeout(() => {
// // //       setIsDropdownOpen(false);
// // //     }, 3000) : null;

// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //       if (timer) {
// // //         clearTimeout(timer);
// // //       }
// // //     };
// // //   }, [isDropdownOpen]);

// // //   // Check for logged-in user on initial render
// // //   useEffect(() => {
// // //     const token = sessionStorage.getItem("auth-token");
// // //     if (token) {
// // //       // Logic to verify user based on token, here we'll mock it with a simple check
// // //       setLoggedInUser({ name: "John Doe", userType: "user" });  // Mock user data for now
// // //     } else {
// // //       setLoggedInUser(null);
// // //     }
// // //   }, []);

// // //   // Logout function
// // //   const handleLogout = () => {
// // //     sessionStorage.removeItem("auth-token"); // Clear token
// // //     setLoggedInUser(null); // Update state to reflect logged-out status
// // //     toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
// // //   };

// // //   return (
// // //     <nav className="bg-gray-800 sticky top-0 left-0 w-full z-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex items-center justify-between h-16">
// // //           <div className="flex items-center">
// // //             <div className="flex-shrink-0 flex">


// // //               <Link
// // //   to="/"
// // //   className={`text-font-bold text-xl m-3`}
// // // >
// // //   Ten<span className="text-blue-500">Internships</span>
// // // </Link>

      
// // //             </div>
// // //           </div>
// // //           <div className="hidden md:flex items-center ml-auto space-x-4">
// // //             <Link
// // //               to="/Info"
// // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //             >
// // //               Info
// // //             </Link>
// // //             <Link
// // //               to="/Courses"
// // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //             >
// // //               Courses
// // //             </Link>
// // //             <Link
// // //               to="/pap"
// // //               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //             >
// // //               PAP
// // //             </Link>

// // //             {/* If logged-in, show profile and logout, otherwise show login and signup */}
// // //             {loggedInUser ? (
// // //               <>
// // //                 <Link
// // //                   to="/user/profile"
// // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                 >
// // //                   My Profile
// // //                 </Link>
// // //                 {loggedInUser.userType !== "admin" && (
// // //                   <Link
// // //                     to="/user/applications"
// // //                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                   >
// // //                     My Applications
// // //                   </Link>
// // //                 )}
// // //                 <div
// // //                   onClick={handleLogout}
// // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
// // //                 >
// // //                   <FontAwesomeIcon icon={faSignOutAlt} />
// // //                   Logout
// // //                 </div>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <Link
// // //                   to="/user/login"
// // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                 >
// // //                   Login
// // //                 </Link>
// // //                 <Link
// // //                   to="/user/register"
// // //                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                 >
// // //                   Sign-Up
// // //                 </Link>
// // //               </>
// // //             )}

// // //             {/* Admin Dropdown */}
// // //             <div className="relative flex items-center">
// // //               <Link
// // //                 to="/Admin"
// // //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //               >
// // //                 Admin
// // //               </Link>
// // //               <button
// // //                 onClick={toggleDropdown}
// // //                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium focus:outline-none"
// // //               >
// // //                 <IoMdArrowDropdown
// // //                   className={`transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
// // //                   aria-hidden="true"
// // //                 />
// // //               </button>
// // //               {isDropdownOpen && (
// // //                 <div className="absolute top-full right-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg">
// // //                   <Link
// // //                     to="/Admin/Call"
// // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // //                   >
// // //                     Call
// // //                   </Link>
// // //                   <Link
// // //                     to="/Admin/Message"
// // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // //                   >
// // //                     Message
// // //                   </Link>
// // //                   <Link
// // //                     to="/Admin/Details"
// // //                     className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
// // //                   >
// // //                     Details
// // //                   </Link>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <div className="md:hidden">
// // //             <button
// // //               onClick={toggleMenu}
// // //               type="button"
// // //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
// // //               aria-controls="mobile-menu"
// // //               aria-expanded={isOpen}
// // //             >
// // //               <span className="sr-only">Open main menu</span>
// // //               {isOpen ? (
// // //                 <IoMdClose className="block h-6 w-6" aria-hidden="true" />
// // //               ) : (
// // //                 <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <ToastContainer />
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;













// // import React, { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
// // import { FaBarsStaggered } from "react-icons/fa6";
// // import "../../componentsCss/Bars/navbar1.css"; // External CSS file
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [loggedInUser, setLoggedInUser] = useState(null);  // Track logged-in user
// //   const dropdownRef = useRef(null);

// //   const toggleMenu = () => {
// //     if (isSidebarOpen) {
// //       handleToggleSidebar(); 
// //     }
// //     setIsOpen(!isOpen);
// //   };

// //   const toggleDropdown = (e) => {
// //     e.preventDefault();
// //     setIsDropdownOpen(prev => !prev);
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };

// //     const timer = isDropdownOpen ? setTimeout(() => {
// //       setIsDropdownOpen(false);
// //     }, 3000) : null;

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //       if (timer) {
// //         clearTimeout(timer);
// //       }
// //     };
// //   }, [isDropdownOpen]);

// //   // Check for logged-in user on initial render
// //   useEffect(() => {
// //     const token = sessionStorage.getItem("auth-token");
// //     if (token) {
// //       // Logic to verify user based on token, here we'll mock it with a simple check
// //       setLoggedInUser({ name: "John Doe", userType: "user" });  // Mock user data for now
// //     } else {
// //       setLoggedInUser(null);
// //     }
// //   }, []);

// //   // Logout function
// //   const handleLogout = () => {
// //     sessionStorage.removeItem("auth-token"); // Clear token
// //     setLoggedInUser(null); // Update state to reflect logged-out status
// //     toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <div className="navbar-content">
// //           <div className="navbar-left">
// //             <div className="navbar-logo">
// //               <Link to="/" className="navbar-brand">
// //                 Ten<span className="text-blue-500">Internships</span>
// //               </Link>
// //             </div>
// //           </div>
// //           <div className="navbar-right">
// //             <Link to="/jobs" className="navbar-link"> Find Internships</Link>
// //             <Link to="/contactus" className="navbar-link"> Contact Us</Link>
           

// //             {loggedInUser ? (
// //               <>
// //                 <Link to="/user/profile" className="navbar-link">My Profile</Link>
// //                 {loggedInUser.userType !== "admin" && (
// //                   <Link to="/user/applications" className="navbar-link">My Applications</Link>
// //                 )}
// //                 <div onClick={handleLogout} className="navbar-link logout">
// //                   <FontAwesomeIcon icon={faSignOutAlt} /> Logout
// //                 </div>
// //               </>
// //             ) : (
// //               <>
// //                 <Link to="/user/login" className="navbar-link">Login</Link>
// //                 <Link to="/user/register" className="navbar-link">Sign-Up</Link>
// //               </>
// //             )}
// //           </div>
// //           <div className="navbar-mobile">
// //             <button onClick={toggleMenu} className="mobile-menu-toggle">
// //               <span className="sr-only">Open main menu</span>
// //               {isOpen ? (
// //                 <IoMdClose className="mobile-menu-icon" aria-hidden="true" />
// //               ) : (
// //                 <FaBarsStaggered className="mobile-menu-icon" aria-hidden="true" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </nav>
// //   );
// // };

// // export default Navbar;












// // import React, { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
// // import { FaBarsStaggered } from "react-icons/fa6";
// // import "../../componentsCss/Bars/navbar1.css"; // External CSS file
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [loggedInUser, setLoggedInUser] = useState(null);  // Track logged-in user
// //   const dropdownRef = useRef(null);

// //   const toggleMenu = () => {
// //     if (isSidebarOpen) {
// //       handleToggleSidebar(); 
// //     }
// //     setIsOpen(!isOpen);
// //   };

// //   const toggleDropdown = (e) => {
// //     e.preventDefault();
// //     setIsDropdownOpen(prev => !prev);
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };

// //     const timer = isDropdownOpen ? setTimeout(() => {
// //       setIsDropdownOpen(false);
// //     }, 3000) : null;

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //       if (timer) {
// //         clearTimeout(timer);
// //       }
// //     };
// //   }, [isDropdownOpen]);

// //   // Check for logged-in user on initial render
// //   useEffect(() => {
// //     const token = sessionStorage.getItem("auth-token");
// //     if (token) {
// //       // Logic to verify user based on token, here we'll mock it with a simple check
// //       setLoggedInUser({ name: "John Doe", userType: "user" });  // Mock user data for now
// //     } else {
// //       setLoggedInUser(null);
// //     }
// //   }, []);

// //   // Logout function
// //   const handleLogout = () => {
// //     sessionStorage.removeItem("auth-token"); // Clear token
// //     setLoggedInUser(null); // Update state to reflect logged-out status
// //     toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <div className="navbar-content">
// //           <div className="navbar-left">
// //             <div className="navbar-logo">
// //               <Link to="/" className="navbar-brand">
// //                 Ten<span className="text-blue-500">Internships</span>
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Desktop Navbar Links */}
// //           <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
// //             <Link to="/jobs" className="navbar-link"> Find Internships</Link>
// //             <Link to="/contactus" className="navbar-link"> Contact Us</Link>

// //             {loggedInUser ? (
// //               <>
// //                 <Link to="/user/profile" className="navbar-link">My Profile</Link>
// //                 {loggedInUser.userType !== "admin" && (
// //                   <Link to="/user/applications" className="navbar-link">My Applications</Link>
// //                 )}
// //                 <div onClick={handleLogout} className="navbar-link logout">
// //                   <FontAwesomeIcon icon={faSignOutAlt} /> Logout
// //                 </div>
// //               </>
// //             ) : (
// //               <>
// //                 <Link to="/user/login" className="navbar-link">Login</Link>
// //                 <Link to="/user/register" className="navbar-link">Sign-Up</Link>
// //               </>
// //             )}
// //           </div>

// //           {/* Mobile Menu Toggle */}
// //           <div className="navbar-mobile">
// //             <button onClick={toggleMenu} className="mobile-menu-toggle">
// //               <span className="sr-only">Open main menu</span>
// //               {isOpen ? (
// //                 <IoMdClose className="mobile-menu-icon" aria-hidden="true" />
// //               ) : (
// //                 <FaBarsStaggered className="mobile-menu-icon" aria-hidden="true" />
// //               )}
// //             </button>


// //                   {/* Desktop Navbar Links */}
// //           <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
// //             <Link to="/jobs" className="navbar-link"> Find Internships</Link>
// //             <Link to="/contactus" className="navbar-link"> Contact Us</Link>

// //             {loggedInUser ? (
// //               <>
// //                 <Link to="/user/profile" className="navbar-link">My Profile</Link>
// //                 {loggedInUser.userType !== "admin" && (
// //                   <Link to="/user/applications" className="navbar-link">My Applications</Link>
// //                 )}
// //                 <div onClick={handleLogout} className="navbar-link logout">
// //                   <FontAwesomeIcon icon={faSignOutAlt} /> Logout
// //                 </div>
// //               </>
// //             ) : (
// //               <>
// //                 <Link to="/user/login" className="navbar-link">Login</Link>
// //                 <Link to="/user/register" className="navbar-link">Sign-Up</Link>
// //               </>
// //             )}
// //           </div>


// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </nav>
// //   );
// // };

// // export default Navbar;









import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import "../../componentsCss/Bars/navbar1.css"; // External CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);  // Track logged-in user
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (isSidebarOpen) {
      handleToggleSidebar(); 
    }
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const timer = isDropdownOpen ? setTimeout(() => {
      setIsDropdownOpen(false);
    }, 3000) : null;

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isDropdownOpen]);

  // Check for logged-in user on initial render
  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    if (token) {
      // Logic to verify user based on token, here we'll mock it with a simple check
      setLoggedInUser({ name: "John Doe", userType: "user" });  // Mock user data for now
    } else {
      setLoggedInUser(null);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token"); // Clear token
    setLoggedInUser(null); // Update state to reflect logged-out status
    toast.success("Logged Out!", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="navbar-logo">
              <Link to="/" className="navbar-brand">
                Ten<span className="text-blue-500">Internships</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navbar Links */}
          <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
            <Link to="/jobs" className="navbar-link"> Find Internships</Link>
            <Link to="/contactus" className="navbar-link"> Contact Us</Link>
            <Link to="/aboutus" className="navbar-link"> About Us</Link>

            {loggedInUser ? (
              <>
                <Link to="/user/profile" className="navbar-link">My Profile</Link>
                {loggedInUser.userType !== "admin" && (
                  <Link to="/user/applications" className="navbar-link">My Applications</Link>
                )}
                <div onClick={handleLogout} className="navbar-link logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </div>
              </>
            ) : (
              <>
                <Link to="/user/login" className="navbar-link">Login</Link>
                <Link to="/user/register" className="navbar-link">Sign-Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;










