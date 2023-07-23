import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src='logo.svg' alt='' />
                <span>Thao Duong Gia</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img
                        src='https://images.pexels.com/photos/17071640/pexels-photo-17071640/free-photo-of-man-in-sunglasses-and-turtleneck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        alt=""
                    />
                    <span>Thao</span>
                </div>
                <img src="/settings.svg " alt="" className="icon" />
            </div>
        </div>

    )
}

export default Navbar