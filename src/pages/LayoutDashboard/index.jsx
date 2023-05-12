import { Outlet } from "react-router-dom";
import BarraLateral from "../../components/BarraNavegacaoLateral";
import Fundo from "../../components/Fundo";
import Navbar from "../../components/Navbar";

import { AiFillHome } from "react-icons/ai";
import { BsFillPersonLinesFill, BsTools } from 'react-icons/bs';
import { RiSuitcaseFill, RiMessageFill } from 'react-icons/ri';
import { IoMdSchool, IoMdDocument } from 'react-icons/io';

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'; 

export default function LayoutDashboard() {
    return (
        <div>
            <ToastContainer />
            <Fundo />
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-screen">
                    <Navbar />
                    <Outlet />
                </div>

            </div>
        </div>
    )
}