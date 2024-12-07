function CONTETNT2 (){
    return (
        <div className="ml-20 mt-10 h-screen ">
            <div className="w-[90%]">
                <h2 className="text-3xl">NiceAtNoon is een fijnschalige design studio voor merken die de hoofden en de harten van hun publiek willen
                veroveren. <br /> Geobsedeerd door de magie van design, geloven we sterk in de kracht van 'story-driven design';
                het geeft jouw unieke merkverhaal geloofwaardigheid, zeggingskracht en een niet te negeren
                aantrekkingskracht. <br /> Raak en verbind jouw doelgroepen als nooit tevoren!</h2>
                <button className="text-start border border-black rounded-xl hover:bg-black hover:text-white hover:rounded-3xl transition-all duration-500 font-semibold text-xl pl-4 pr-4 pt-2 pb-2 mt-10 " >Get to Know Us</button>
            </div>

            <div className="mt-12 flex flex-col items-center">
                <p className="font-semibold texl-2xl mb-5">Cases</p>
                <h1 className="text-9xl font-bold w-[80%] text-center">
                Head Turning Projects
                <div className="">
                   <button className=" inline-block absolute -rotate-12 ml-40 mb-12 border bg-yellow-500 rounded-3xl font-semibold text-xl pl-4 pr-4 pt-4 pb-4">Gotta see 'm all</button>
                </div>
                </h1>
            </div>
            <div className="flex justify-end mr-20">
                <button className="text-start border border-black rounded-xl hover:bg-black hover:text-white hover:rounded-3xl transition-all duration-500 font-semibold text-xl pl-6 pr-6 pt-3 pb-3 mt-10 ">All Project</button>
            </div>
        </div>
    )
}

export default CONTETNT2 