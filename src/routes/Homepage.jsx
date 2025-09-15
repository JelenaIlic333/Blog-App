import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostList from "../components/PostList"

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
          {/* <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
          Lorem ipsum dolor sit amet 
          </h1> */}

          {/* <p className="text-gray-400 mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Deserunt impedit ea placeat velit nemo officiis sed obcaecati nesciunt ipsam? Tempore!
          </p> */}
        </div>
        {/* animated button */}
        <Link to="write"></Link>
      </div>

      <section className=" py-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* Tekst levo */}
    <div className="max-w-lg text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
        Dobrodošla na moj blog
      </h2>
      <p className="text-xl font-semibold bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
        “Rad na sebi je najlepši dar koji sebi možeš dati.”
      </p>
    </div>

    {/* Slika desno */}
    <div className="relative w-56 h-56 md:w-72 md:h-72">
      <img 
        src="https://ik.imagekit.io/jelenablog/profile_img.png?updatedAt=1757454758756" 
        alt="Profile" 
        className="rounded-full border-4 border-[#FFD700] shadow-[0_0_25px_#FFD700]"
      />
    </div>

  </div>
</section>

    {/* CATEGORIES */}
    <MainCategories/>
    {/* FEATURED POSTS */}
    <FeaturedPosts/>
    {/* POST LIST */}
    <div className="">
      <h1 className="my-8 text-gray-400">Recent Posts</h1>
      <PostList/>
    </div>
</div>
  )
}

export default Homepage