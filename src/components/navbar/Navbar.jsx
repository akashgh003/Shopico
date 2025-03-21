import { Fragment, useContext, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/data/myContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { auth, fireDB } from "../../firebase/FirebaseConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const context = useContext(myContext);
  const { toggleMode, mode, user } = context;

  const user1 = JSON.parse(localStorage.getItem("user"));
  const admin = user1?.user?.email;

  if (user1) {
    const userid = JSON.parse(localStorage.getItem("user")).user.uid;

    let foundObject = "test";
    let currentUser = user.filter((obj) => obj.uid == userid);
    for (let i = 0; i < user.length; i++) {
      if (user[i].uid === userid) {
        foundObject = user[i];
        break; 
      }
    }
    var photoURL = foundObject.photoURL;
  }

  const [language, setLanguage] = useState("eng");
  const [translations, setTranslations] = useState({});

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    translatePageContent(selectedLanguage);
  };

  const logout = () => {
    localStorage.clear("user1");
    localStorage.clear("user1");
    toast("Logged out successfully", {
      style: {
        border: "2px solid #3d85c6",
        padding: "16px",
        color: "#ffffff",
        fontWeight: "bold",
        background: "#6aa84f",
      },
    });
    window.location.href = "/";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50">
      <Toaster />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>

                  <div className="flow-root">
                    {user1 ? (
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>

                
                  {admin == "akashghosh1906@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user1 ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup/Login
                    </Link>
                  )}
                  {user1 ? (
                    <div className="flow-root">
                      <Link
                        to={"/"}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                      >
                        {photoURL ? (
                          <img
                            className="inline-block w-10 h-10 rounded-full"
                            src={photoURL}
                            alt="Profile"
                            width="50"
                            height="50"
                          />
                        ) : (
                          <img
                            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                            alt="Profile"
                            width="50"
                            height="50"
                          />
                        )}
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    {language == "eng" ? (
                      <img
                        src="https://cdn.wallpapersafari.com/51/1/nVeBg3.jpg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                    ) : (
                      ""
                    )}
                    {language == "th" ? (
                      <img
                        src="https://flagpoles.co.uk/wp-content/uploads/2019/06/Thailand.png"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                    ) : (
                      ""
                    )}

                    {language == "zh-CN" ? (
                      <img
                        src="https://www.worldatlas.com/img/flag/cn-flag.jpg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                    ) : (
                      ""
                    )}
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      <div>
                        <select
                          id="lang"
                          value={language}
                          onChange={handleLanguageChange}
                        >
                          <option value="eng">ENG</option>
                          <option value="IN">हिन्दी</option>
                          <option value="zh-CN">中文</option>
                        </select>
                      </div>
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-sky-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over $500
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className="  text-lg italic font-bold text-[rgb(105, 39, 219)"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Shopico
                      <p className="text-sm italic font-normal text-[rgb(99, 39, 219)]">
                        Gift Delivery in India
                      </p>
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user1 ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )}

                  {admin == "akashghosh1906@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-800"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user1 ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup/Login
                    </Link>
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    {language == "eng" ? (
                      <img
                        src="https://cdn.wallpapersafari.com/51/1/nVeBg3.jpg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                    ) : (
                      ""
                    )}
                    {language == "th" ? (
                      <img
                        src="https://flagpoles.co.uk/wp-content/uploads/2019/06/Thailand.png"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                    ) : (
                      ""
                    )}

                    {language == "zh-CN" ? (
                      <img
                        src="https://www.worldatlas.com/img/flag/cn-flag.jpg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                    ) : (
                      ""
                    )}
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >

                      <div>
                        <select
                          id="lang"
                          value={language}
                          onChange={handleLanguageChange}
                        >
                          <option value="eng">ENG</option>
                          <option value="IN"> हिन्दी</option>
                          <option value="zh-CN">中文</option>
                        </select>

                      </div>
                    </span>
                  </a>
                </div>
                {/* Laptop size image */}

                {user1 ? (
                  <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="flex items-center text-gray-700 ">
                      {photoURL ? (
                        <img
                          className="inline-block w-10 h-10 rounded-full"
                          src={photoURL}
                          alt={user1?.user?.email}
                        />
                      ) : (
                        <img
                          className="inline-block w-10 h-10 rounded-full"
                          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                          alt={user1?.user?.email}
                        />
                      )}
                    </a>
                  </div>
                ) : (
                  ""
                )}

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
