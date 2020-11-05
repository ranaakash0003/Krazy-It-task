import React,{ useRef, useState } from 'react'
import { MdClose, MdFileUpload } from 'react-icons/md'
import './upload.scss'

const Upload = () => {
	const imageUploaderRef = useRef()
	const [files, setFiles] = useState([])
    
	const fileListToArray = (fileList) => {
		const fileArray = Array.from(fileList)
		return fileArray
	}
	
	const openFileDialog = () => {
		imageUploaderRef.current.click()
	}
	const onFilesAdded = (e) => {
		const fileArray = fileListToArray(e.target.files)
		const files = fileArray.map((file) => {
			file.src = URL.createObjectURL(file)
			return file
		})
		setFiles(files)
	}
	const onDelete = (index) => {
		const updatedFiles = [...files]
		updatedFiles.splice(index,1)
		setFiles(updatedFiles)
	}
	return (
		<div>
			<div className='upload-container' onClick={openFileDialog}>
				<input 
					accept='image/*' 
					ref = {imageUploaderRef} 
					style={{ display: 'none' }}
					type='file' 
					multiple 
					onChange={onFilesAdded}/>
				<MdFileUpload size='28px' color='#1456E4'/>
			</div>
			<div className='preview-container'>
				{files.map((file , index) => (
					<div className='image-item' key={index}>
						<MdClose className='close-icon' size='20px' onClick={() => onDelete(index)}/>
						<img src={file.src} alt={file.name} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Upload
