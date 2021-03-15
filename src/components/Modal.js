import React from 'react';


const Modal = ({ selectedImg, setSelectedImg }) => {
    const closeHandler = () => {
        setSelectedImg(null);
    }
    return(
        <div className='backdrop'>
            <span className='btn-close'
            onClick={closeHandler}
            >X</span>
            <img src={selectedImg} alt="enlarged pic" onClick={ closeHandler }/>
        </div>
    )
}

export default  Modal;