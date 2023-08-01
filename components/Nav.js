//  links
import {HiHome, HiUser} from "react-icons/hi";
import {HiChatBubbleBottomCenterText, HiEnvelope, HiRectangleGroup, HiViewColumns} from "react-icons/hi2";

export const navData = [
    {name: 'home', path: '/', icon: <HiHome/>},
    {name: 'about', path: '/about', icon: <HiUser/>},
    {name: 'services', path: '/services', icon: <HiRectangleGroup/>},
    {name: 'work', path: '/work', icon: <HiViewColumns/>},
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText/>,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope/>,
    },
];

// next link
import Link from 'next/link';

// next router
import {useRouter} from 'next/router';

const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <nav>
            {/* inner */}
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10'>
                {
                    navData.map((link, index) => {
                        return <Link href={link.path} key={index}>{link.icon}</Link>
                    })
                }
            </div>
        </nav>
)
};

export default Nav;
