// links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiPinterestFill,
  RiHeading
} from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiGithubLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiHeading />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiYoutubeLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300" >
      <RiPinterestFill />
    </Link>
  </div>;
};

export default Socials;
