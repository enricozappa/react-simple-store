export default function Navbar() {
	return (
		<nav className='navbar'>
			<a href='/' className='nav-brand'>
				SuperM
			</a>
			<ul>
				<li className='nav-item'>
					<a className='active' href='/'>
						Home
					</a>
				</li>
				<li className='nav-item'>
					<a href='/about'>About us</a>
				</li>
				<li className='nav-item'>
					<a href='/products'>Products</a>
				</li>
				<li>
					<a href='/cart' className='nav-item nav-cart btn btn-accent'>
						Cart (0)
					</a>
				</li>
			</ul>
		</nav>
	);
}
