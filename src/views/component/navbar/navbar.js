import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<h3><Link to='/'>kTech</Link></h3>
			</div>
			
  
			<ul className='nav-content'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='upload'>Image upload</Link>
				</li>
				<li>
					<Link to='tshirt'>Tshirt</Link>
				</li>
			</ul>
		</div>
	)
}
  
export default Navbar
