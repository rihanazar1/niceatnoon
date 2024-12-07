function NAV() {

  return (
      <div className='w-full h-25 flex mt-5 '>
        <div className=' h-full w-[50%] flex items-center justify-between'>
          <h1 className='ml-14 text-4xl font-bold font-serif[Georgia]'>NiceAtNoon</h1>
          <img className='h-12 animate-slowSpin' src=".\src\assets\images\645505004e4ec0e72b8fc921_webclip-niceatnoon.webp" alt="" />
        </div>


          <div className=' w-[50%] flex justify-end'>
                <div className=' flex items-center gap-8 h-[100%] w-[50%] '>
                  <button className='border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-500 text-xl pl-4 pr-4 pt-2 pb-2' >Projection</button>
                  <button className='border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-500 text-xl pl-4 pr-4 pt-2 pb-2' >Over</button>
                  <button className='border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-500 font-semibold underline text-xl pl-4 pr-4 pt-2 pb-2' >Contact</button>
                </div>
          </div>
        
      </div>
  )
}

export default NAV