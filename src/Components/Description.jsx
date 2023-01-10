import React from 'react'

const Description = () => {
  return (
    <div className='Description' key="Description_parent">
      <div key="Description_Content_parent">
        <h1 className='slogan' key="Description_slogan">
          <span className='first_letter'>W</span>elcome To&nbsp;
          <span className='first_letter' style={{ display: 'inline-block' }} >IT hink</span>
          <br />
          The&nbsp;<span className='first_letter'>F</span>irst Social  <span className='first_letter'>M</span>edia <br /> Platform  <span className='first_letter'>F</span>or The <span className='first_letter'>IT</span> <br /> <span className='first_letter'>C</span>ommunity</h1>
        <section key="Description_btn_section">
          <button key="Description_btn">Contact</button>
        </section>
      </div>
    </div>
  )
}

export default Description