import { Home, Person, Mail, Explore, Bookmarks, ViewList, Lock } from '@mui/icons-material';
import logo from '../../assets/images/logo.svg'
import './Menu.css';
import { Link } from 'react-router-dom';

const links = [
    {
        to: '/',
        icon: <Home />,
        text: 'Home'
    },
    {
        to: '/somewhere',
        icon: <Mail />,
        text: 'Messages'
    },
    {
        to: '/somewhere',
        icon: <Bookmarks />,
        text: 'Bookmarks'
    },
    {
        to: '/somewhere',
        icon: <Explore />,
        text: 'Explore'
    },
    {
        to: '/somewhere',
        icon: <ViewList />,
        text: 'Lists'
    },
    {
        to: '/profile',
        icon: <Person />,
        text: 'Profile'
    },
    {
        to: '/logout',
        icon: <Lock />,
        text: 'Sign Out'
    }
]

const Menu = () => {
    return (
        <header>
            <nav>
                <img className='logo' src={logo} alt='' />
                <div className='menu'>
                    {
                        links.map((link, i) => {
                            return (
                                <Link className='menuItem' key={i} to={link.to}>
                                    <div className='icon'>
                                        {link.icon}
                                    </div>
                                    <div>{link.text}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </nav>
        </header>
    )
}

export default Menu;
