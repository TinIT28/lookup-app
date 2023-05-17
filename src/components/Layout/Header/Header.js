<<<<<<< HEAD
import { HiMenu, HiTranslate, HiOutlineChatAlt2 } from "react-icons/hi";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink} from 'react-router-dom';
import NotFound from "../Error/NotFound";

const navigation = [
  { name: 'Login', href: '/Login' },
]

export default function Header(props) {
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/*className={classNames(
                          item.current 
                          ? 'no-underline bg-gray-900 text-white' 
                          : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}*/}
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          return 'px-3 py-2 rounded-md text-sm font-medium no-underline ' +
                          (!isActive 
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                          : 'bg-gray-900 text-white')
                        }}                       
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => {
                  return 'px-3 py-2 rounded-md text-sm font-medium no-underline ' +
                  (!isActive 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-900 text-white');
                }} 
                >
                  {item.name}
                </NavLink>          
                
              ))}
            </div>
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
    <div className="bg-gray-300">
      <div className = "max-w-7xl mx-auto bg-gray-300 min-h-screen px-2 py-2">
        {props.children}
=======
import HeaderPage from "../../../images/HeaderPage.png";
import "./Header.css";
import { HiTranslate } from "react-icons/hi";

function Header() {
  return (
    <div>
      <div className="header_top">
        <a className="header_lookup" href="">
          LookUp.com
        </a>
        <div>
          {" "}
          <HiTranslate />
          <a className="header_help" href="">
            Trợ giúp
          </a>
        </div>
>>>>>>> 4349c8e87466274eaa3839b3f1ef67c088df991a
      </div>
      <div className="header_body">
        <img className="header_img" src={HeaderPage} alt="" />
        <h3 className="header_title">
          Khám phá và kết nối với các doanh nghiệp <br /> địa phương trong khu
          vực của bạn
        </h3>
      </div>
    </div>
    </>
  );
}

