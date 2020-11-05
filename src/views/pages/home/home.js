import React from 'react'
import Tech from '../../../images/tech2.svg'
import TeamWork from '../../../images/team_work.svg'
import Bd from '../../../images/bd.png'
import Uber from '../../../images/uber.png'
import Aws from '../../../images/aws.png'
import Fpanda from '../../../images/fp.png'
import Link from 'react-router-dom'
import { Button } from '@geist-ui/react'
import { GoDeviceDesktop, GoDeviceMobile, GoCloudDownload } from 'react-icons/go'
import { FaNetworkWired } from 'react-icons/fa'


import './home.scss'

const Home = () => {
	const handleClient = () => {
			
	}
	return (
		<div className='home-container'>
			<div className='home-wrapper'>
				<div className='home-item'>
					<h1>We&apos;re Buildng Software For Your Business </h1>
					<p>We handle all the annoying details so you can focus on building your product. Customers tell us we save them about a month of dev time per project,you just need to sit back and see your problems solved, business operations accelerated and team productivity boosted.</p>
					<Button style={{ display: 'block', margin:'auto 50px' }} auto shadow type='success'>Get Started</Button>
				</div>
				<div className='banner-img'>
					<img src={Tech} alt='tech'/>
				</div>
				<div className='custom-shape-divider-bottom-1604509427'>
					<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
						<path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill'></path>
					</svg>
				</div>
			</div>
			<div className='why-container'>
				<h2>Why Us</h2>
				<div className='why-item'>
					<div className='why-content'>
						<p>Ktech is a Canadian based company that continually exceeds our clients’ expectations, with our uniquely designed services.
						</p>
						<p>Before providing a quote, we carefully evaluate your requirements, analysing and working together with you, to outline step by step checkpoints for developing exactly what you need.
						</p>
						<p>At Ktech our team has extensive experience, developed over two decades, so no matter what size your enterprise is, whether you are just starting out or have already blossomed into a well established company, we are capable of suiting all your IT needs.
						</p>
						<p>Whether it’s creating a completely new business IT infrastructure or building your business from scratch, we’ve got you covered.
						</p>
						
					</div>
					
					<div className='why-team-image'>
						<img src={TeamWork} alt='teamwork'/>
					</div>

				</div>
				
			</div>


			<div className='service-container'>
				<h2>Our Services</h2>
				<div className='service-content'>
					<div><GoDeviceDesktop color='#3CB5FD' size='56px'/><h3>WEB DEVELOPMENT</h3></div>
					<div><GoDeviceMobile color='#3CB5FD' size='56px'/><h3>MOBILE APPS DEVELOPMENT</h3></div>
					<div><GoCloudDownload color='#3CB5FD' size='56px'/><h3>DEV OPS</h3></div>
					<div><FaNetworkWired color='#3CB5FD' size='56px'/><h3>NETWORKING</h3></div>
				</div>
			</div>
		

			<div className='client-container' id='client'>
				<h2>Our Clients</h2>
				<div className='client-wrapper'>
					<div className='client-item'>
						<img src={Aws} alt=''/>
					</div>
					<div className='client-item'>
						<img src={Bd} alt=''/>
					</div>
					<div className='client-item'>
						<img src={Fpanda} alt=''/>
					</div>
					<div className='client-item'>
						<img src={Uber} alt=''/>
					</div>
				</div>
			</div>

			<div className='footer-container'>
				<div className='container footer-item'>
					<div className='footer-top'>

						<div className='about-container'>
							<h3 className='title'>About Us</h3>
							<p className='description'>
							Ktech is a Canadian based company that continually exceeds our clients’ expectations, with our uniquely designed services.At Ktech our team has extensive experience, developed over two decades, so no matter what size your enterprise is, whether you are just starting out or have already blossomed into a well established company, we are capable of suiting all your IT needs.
							</p>
						</div>
					</div>

					<div className='footer-bottom'>
						<ul className='logo'>
							<li>Ktech</li>
						</ul>
						<ul className='links'>
							<li>@ {new Date().getFullYear()} All right reserved</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
