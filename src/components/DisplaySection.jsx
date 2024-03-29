import React from 'react'

const DisplaySection = ({triggerPreview}) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <div className='display-section wrapper'>
        <h2 className="title">New</h2>
        <p className="text">Brillent.</p>
        <span className='description'>Vendhu Thanindhathu Kaadu Okkali Iphone ku vanakatha poduuuu!.</span>
        <button className='button' onClick={triggerPreview}>Try me!</button>
        <button className='back-button' onClick={handleScroll}>TOP</button>
    </div>
  )
}

export default DisplaySection