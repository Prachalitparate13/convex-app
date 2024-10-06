
function NavBar() {
  return (
    <div className="w-full container mx-auto max-w-screen-lg px-6 lg:px-0 flex  flex-col items-center mt-0 py-6">
    <div className="flex flex-row justify-between items-center ">
      <a
        className=" mx-10 tracking-tight no-underline hover:no-underline focus-visible:ring-2 focus:outline-none focus:ring-black font-bold text-orange-500 text-xl"
        href="/"
      >
        Convex App
      </a>
      <a
        className=" mx-10 tracking-tight no-underline hover:no-underline focus-visible:ring-2 focus:outline-none focus:ring-black font-bold  text-orange-500 text-xl"
        href="/about"
      >
        {" "}
        About
      </a>
      <a
        className=" mx-10 tracking-tight no-underline hover:no-underline focus-visible:ring-2 focus:outline-none focus:ring-black font-bold  text-orange-500 text-xl"
        href="/add"
      >
        {" "}
        Add
      </a>
    </div>
    {/* <TableData/> */}
  </div>
  )
}

export default NavBar
