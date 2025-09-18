import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="featured1.jpeg" className="rounded-2xl object-cover" w="735"/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/text" className="text-[#D9CAB3] text-4xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className="text-gold">John Doe</Link>
                <span>on</span>
                <Link className="text-gold">Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ea suscipit magnam hic ratione similique veritatis dolorum iusto,
                 saepe aspernatur quaerat.
            </p>
            <Link to="/test" className="underline text">Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem