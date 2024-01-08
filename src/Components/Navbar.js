import world2 from '../Components/Images/Fill213.svg'


function Navbar() {
    return (
        <nav>
            
            <img className='nav--logo' src={world2} alt="logo" />
            <h1 className='nav--title'>travel journal</h1>
            
        </nav>
    )
}

export default Navbar;