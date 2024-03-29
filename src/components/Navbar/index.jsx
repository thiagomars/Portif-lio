import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'

import { BsHouseDoorFill, BsTools } from 'react-icons/bs';
import { RiSuitcaseFill, RiMessageFill } from 'react-icons/ri';
import { IoMdSchool, IoMdDocument } from 'react-icons/io';

function Navbar() {
    return (
        <header className="fixed w-min right-0 flex justify-end px-8 py-8 z-50">
            <div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full shadow-xl justify-center rounded-md bg-black bg-opacity-20 px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <CgMenuRightAlt className='w-7 h-7' />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white/70 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/"><button  className={`${active ? 'bg-emerald-500 text-white' : 'text-gray-700' } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            {active 
                                            ? ( <BsHouseDoorFill className="mr-2 h-5 w-5" aria-hidden="true" /> ) 
                                            : ( <BsHouseDoorFill className="mr-2 h-5 w-5" aria-hidden="true" />
                                            )}
                                            Inicio
                                        </button></a>
                                    )}
                                </Menu.Item>
                                
                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/Habilidades"><button  className={`${active ? 'bg-emerald-500 text-white' : 'text-gray-700' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                            {active 
                                            ? ( <BsTools className="mr-2 h-5 w-5" aria-hidden="true" /> ) 
                                            : ( <BsTools className="mr-2 h-5 w-5" aria-hidden="true" />
                                            )}
                                            Habilidades
                                        </button></a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/Projetos"><button  className={`${active ? 'bg-emerald-500 text-white' : 'text-gray-700' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                            {active 
                                            ? ( <RiSuitcaseFill className="mr-2 h-5 w-5" aria-hidden="true" /> ) 
                                            : ( <RiSuitcaseFill className="mr-2 h-5 w-5" aria-hidden="true" />
                                            )}
                                            Projetos e Trabalhos
                                        </button></a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/Formacao"><button  className={`${active ? 'bg-emerald-500 text-white' : 'text-gray-700' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                            {active 
                                            ? ( <IoMdSchool className="mr-2 h-5 w-5" aria-hidden="true" /> ) 
                                            : ( <IoMdSchool className="mr-2 h-5 w-5" aria-hidden="true" />
                                            )}
                                            Formação
                                        </button></a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/Certificados"><button  className={`${active ? 'bg-emerald-500 text-white' : 'text-gray-700' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                            {active 
                                            ? ( <IoMdDocument className="mr-2 h-5 w-5" aria-hidden="true" /> ) 
                                            : ( <IoMdDocument className="mr-2 h-5 w-5" aria-hidden="true" />
                                            )}
                                            Certificados
                                        </button></a>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <a href="/Contato"><button  className={`${active ? 'bg-emerald-500 text-white' : 'text-gray-700' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                            {active 
                                            ? ( <RiMessageFill className="mr-2 h-5 w-5" aria-hidden="true" /> ) 
                                            : ( <RiMessageFill className="mr-2 h-5 w-5" aria-hidden="true" />
                                            )}
                                            Contato
                                        </button></a>
                                    )}
                                </Menu.Item>

                                
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

export default Navbar;