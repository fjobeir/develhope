import './Head.css'
import { Home, Lock, Person } from '@mui/icons-material';

const Head = ({title}) => {
    return (
        <div className="head">
            <h4 className='m-0'>{title}</h4>
            <div className='d-flex d-md-none'>
                <div className='headIcon'>
                    <a href='/'>
                        <Home />
                    </a>
                </div>
                <div className='headIcon'>
                    <a href='/profile'>
                        <Person />
                    </a>
                </div>
                <div className='headIcon'>
                    <a href='/logout'>
                        <Lock />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Head