import React, { useRef, useState, useEffect } from 'react'
import TshirtImage from '../../../images/tshirt.png'
import { Button } from '@geist-ui/react'

import './tshirt.scss'

const Tshirt = () => {
	const textAreaRef = useRef()
	const textRef = useRef()
	const [text, setText] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	
	const addText = () => {
		textRef.current.innerText = text
		setIsModalOpen(false)
	}
	const handleChange = (e) => {
		setText(e.target.value)
	}

	var active = false
	var currentX = 0
	var currentY =0
	var initialX =0
	var initialY=0
	var xOffset = 0
	var yOffset = 0

	const dragStart = (e) => {
		initialX = e.clientX - xOffset
		initialY = e.clientY - yOffset
		if (e.target === textRef.current) {
			active = true
		}
	}
  
	const dragEnd  = () => {
		initialX = currentX
		initialY = currentY
  
		active = false
	}
  
	const drag =(e) =>{
		if (active) {
			e.preventDefault()
			currentX = e.clientX - initialX
			currentY = e.clientY - initialY
  
			xOffset = currentX
			yOffset = currentY
  
			textRef.current.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)'
		}
	}

	const resetHandeler = () => {
		textRef.current.innerText = ''
		setText('')
	}


	useEffect(() => {
		textAreaRef.current.addEventListener('mousedown', dragStart)
		textAreaRef.current.addEventListener('mouseup', dragEnd)
		textAreaRef.current.addEventListener('mousemove', drag)
	}, [dragStart,dragEnd,drag])

	return (
		<div>
			<div className='button-container'>
				
				<Button
					style={{ marginRight:'10px' }}
					auto 
					shadow 
					type='success'
					onClick={() => setIsModalOpen(!isModalOpen)}>
					Add text
				</Button>

				<Button
					auto 
					shadow 
					type='warning' ghost
					onClick={resetHandeler}>
					Reset
				</Button>
			</div>
			<div className='tshirt-container'>
				<div className='tshirt-area' ref = {textAreaRef}>
					<div className={text? 'text-show text-show-border' : 'text-show'}
						contentEditable
						ref={textRef}>
					</div>
				</div>
				<img src={TshirtImage} alt=''/>
			</div>
			{ isModalOpen ? 
				<>
					<div className='overlay'/>
					<div className='modal-container'>
						<input 
							type='text' 
							name='' 
							id='' 
							value= {text}
							placeholder='Enter your text'
							onChange = {handleChange}/>
						
						<div className='button-container'>
							<Button
								className='addtext-button'
								auto 
								shadow 
								type='success'

								onClick={addText}>
				Save
							</Button>
							<Button

								auto 
								shadow 
								type='secondary' ghost
								onClick={() => {
									setIsModalOpen(false) 
									setText('')}}>
				Cancel
							</Button>

						</div>

					</div>
			
				</> :''
		
			}
			
		</div>
		
	)
}

export default Tshirt
