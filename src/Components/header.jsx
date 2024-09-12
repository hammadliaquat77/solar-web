import logo from '../assets/logo.png'

function Header( ) {
    return(
        <div>
    <header className="text-gray-600 body-font bg-transparent w-full">
  <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center -mt-4">
   
    <img className='w-28' src={logo} alt="" />
    <nav className="md:ml-64 gap-4 md:mr-auto text-white flex flex-wrap items-center justify-center space-x-7 text-sm">
      <a className="mr-5 hover:text-[#EB7F25]" href="#price">Pricing</a>
      <a className="mr-5 hover:text-[#EB7F25]" href="#about">About</a>
      <a className="mr-5 hover:text-[#EB7F25]" href="#tool">Tools</a>
      <a className="mr-5 hover:text-[#EB7F25]">How It Works</a>
      <a className="mr-5 hover:text-[#EB7F25]">Testimonials</a>
      <a className="mr-5 hover:text-[#EB7F25]">FAQ</a>
    </nav>
    <button className="inline-flex items-center bg-[#EB7F25] text-white font-bold text-sm  border-0 py-2 px-3 focus:outline-none hover:bg-[white] hover:text-[#EE8023] rounded  mt-4 md:mt-0 ">
      Calculate Solar
    </button>
  </div>
</header>

    </div>
    )
}


export default Header;