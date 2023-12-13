import React,{ useState} from "react";
import Logo from '../assets/logo.svg';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { fetchProduct } from "../actions/productSlice";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const Navbar = () => {
    const dispatch = useDispatch();
    dispatch(fetchProduct());
    const [activeMenu, setActiveMenu] = useState(null);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return(
        <div>
            <div className="h-20 bg-gray-800 flex justify-between   p-5">
            <Link to="/">
                    <img src={Logo} className="h-10 ml-10"/>
                </Link>
                <Menu as="div" className="relative inline-block text-left">
              <div>
                <div className="flex gap-20 justify-center  mr-20">
                    <Link to="/">
                        <h1 className="text-slate-100">Home</h1>
                    </Link>
                    <Link to="products">
                        <h1 className="text-slate-100">Products</h1>
                    </Link>
                    {/* <Link to="table">
                        <h1 className="text-slate-100">Productstable</h1>
                    </Link> */}
                    <Menu.Button onClick={() => setActiveMenu(activeMenu === 'services' ? null : 'services')} className="text-slate-100">
                    Services
                    </Menu.Button>
                    <Link to="wishlist">
                        <h1 className="text-slate-100">Wishlist</h1>
                    </Link>
                    <Link to="/contact">
                        <h1 className="text-slate-100 ">Request Quotation</h1>
                    </Link>
                </div>
              </div>

            <Transition
            as={Fragment}
            show={activeMenu === 'services'}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="relative z-40 mt-2 w-56 ml-64 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/service-1"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Consultation
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/service-2"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Installing
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/service-2"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Servicing
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/service-2"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Maintenance
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/service-2"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Replacement
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/service-2"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Warranty Claiming
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
            
          </Transition>
            </Menu>
            </div>
        </div>
        )
        }


export default Navbar