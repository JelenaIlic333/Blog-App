import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* BREADCRUMB */}
      <div className="flex gap-4 text-gold">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-gold">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eos?
          </h1>

          <p className="text-gray-400 mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Deserunt impedit ea placeat velit nemo officiis sed obcaecati nesciunt ipsam? Tempore!
          </p>
        </div>
        {/* animated button */}
        <Link to="write"></Link>
      </div>
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  )
}

export default Homepage