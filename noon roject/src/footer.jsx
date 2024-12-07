function FOOTER(){
    return(
        <div className="h-[60%] w-full mt-40 bg-black">
            <div className="flex items-center justify-between">
               <div className="ml-8">
                    <h1 className="text-white text-5xl font-bold">Let's turn some heads!</h1>
                    <button className='border border-white rounded-xl hover:rounded-[2rem] text-white transition-all duration-1000 font-semibold text-xl mt-8 pl-6 pr-6 pt-2 pb-2'>Contact</button>
               </div>

                <div className="text-white text-xl ">
                        <ul className="flex mr-20 mt-10">
                        <div className="flex flex-col gap-1 mr-14">
                            <li className="font-bold">Socials</li>
                            <ul className="leading-10">
                                <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                                <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-1 mr-14">
                            <li className="font-bold">Sitemap</li>
                            <ul className="leading-10">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#projecten">Projecten</a></li>
                                <li><a href="#over">Over</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-1 mr-14">
                            <li className="font-bold">Info</li>
                            <ul className="leading-10">
                                <li><a href="#algemene-voorwaarden">Algemene voorwaarden</a></li>
                                <li><a href="#privacybeleid">Privacybeleid</a></li>
                                <li><a href="#cookiebeleid">Cookiebeleid</a></li>
                            </ul>
                        </div>
                        </ul>
                </div>
            </div>


            <div className="mt-28">
                <img src=".\src\assets\images\footerimg.png" alt="" />
            </div>
        </div>
    )
}

export default FOOTER 