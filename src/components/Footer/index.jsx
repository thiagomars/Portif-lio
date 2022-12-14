import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { RiCodeBoxFill } from 'react-icons/ri';
import Tags from '../Tags';

function Footer(){
    return(
        <footer className='pt-10 mt-10 bg-white/50'>
            <div className='min-h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.imgur.com/0rDPfTM.png" alt="" className='border-4 rounded-full border-gray-500 w-1/3'></img>
                    <div className='flex flex-row flex-wrap w-2/3 my-5'>
                        <p className='font-semibold mr-2'>Tags: </p>
                        <Tags text="HTML 5"/>
                        <Tags text="CSS 3"/>
                        <Tags text="JAVASCRIPT"/>
                        <Tags text="REACT.JS"/>
                        <Tags text="JAVA"/>
                        <Tags text="C#"/>
                        <Tags text="SASS"/>
                        <Tags text=".NET"/>
                        <Tags text="POSTGRESQL"/>
                        <Tags text="JQUERY"/>
                        <Tags text="MYSQL"/>
                        <Tags text="GIT"/>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center my-5'>
                    <h2 className='text-sm tracking-[.22em]'>ENVIE UM EMAIL PARA</h2>
                    
                    <a href="mailto:r15.thiagomarques@gmail.com?subject=Hello%20again" className='rounded-md cursor-pointer text-xl font-semibold mt-2 mb-8'>r15.thiagomarques@gmail.com</a>
                    
                    <a href="https://www.linkedin.com/in/thiago-marques-sousa-b22627152/">
                        <IoLogoLinkedin className='w-10 h-10 drop-shadow-lg cursor-pointer my-2 hover:scale-110 duration-300 ease-in-out delay-100'/>
                    </a>

                    <a href="https://github.com/thiagomars">
                        <IoLogoGithub className='w-10 h-10 drop-shadow-lg cursor-pointer my-2 hover:scale-110 duration-300 ease-in-out delay-100'/>
                    </a>

                    <a href="https://github.com/thiagomars/Portif-lio">
                        <RiCodeBoxFill className='w-10 h-10 drop-shadow-lg cursor-pointer my-2 hover:scale-110 duration-300 ease-in-out delay-100'/>
                    </a>
                </div>
            </div>

            <div className='w-full flex justify-center py-4 border'>
                <p className='text-sm font-medium'>Site criado por Thiago Mars &middot; 2022 &#169;</p>
            </div>
        </footer>
    )
}

export default Footer;