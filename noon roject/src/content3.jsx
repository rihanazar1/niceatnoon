function CONTETNT3 (){
    return (
        <div>
            <div className="group flex justify-center items-center">
                <img className="absolute w-[20%] border group-hover:opacity-100 transition-opacity duration-500 rounded-[6rem] border-transparent opacity-0" src=".\src\assets\images\backimg2.jpg" alt="" />
                <img className="h-[600px] w-[90%] cursor-pointer object-cover border rounded-[3rem] hover:rounded-[8rem] duration-500" src=".\src\assets\images\backimg1.jpg" alt="" />
            </div>

            <div className="ml-20 mt-5">
                <h2 className="text-2xl font-semibold text-zinc-400">New Schaijk</h2>
                <h2 className="text-3xl font-bold text-black">The taste of home</h2>
                <div className="flex gap-10 mt-3">
                    <button className="border-black border-[1.5px] rounded-xl pl-2 pr-2 pt-2 pb-2 font-semibold">BRAND STORY</button>
                    <button className="border-black border-[1.5px] rounded-xl pl-2 pr-2 pt-2 pb-2 font-semibold" >BRAND IDENTITY</button>
                </div>
            </div>
        </div>
    )
}

export default CONTETNT3 