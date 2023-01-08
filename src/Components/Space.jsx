import {lazy} from 'react'
//Lazy Components
const ItGroupesBox  = lazy(()=> import('./ItGroupesBox'))
const Space = () => {
    
  return (
    <div id='Space'>
      <div className='filterHead'><h1>Space</h1>  <div><span>Show Filter</span><svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path><path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path></svg></div></div>
      <div className="content">

        <div className='markets'>
       <ItGroupesBox />
         </div>
        <div className='publication'>
          <div className='card'>
            <div className="head">  
            <img src="https://imgs.search.brave.com/CnqpE_MCRd37vb0sAo1jH6cXFpgtjseHnh3XI3vZWhg/rs:fit:1000:850:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1JTUlfY3RLU2RN/by9WS1U5bGdDam5R/SS9BQUFBQUFBQUJK/VS9WNWJHWWV1c1NE/NC9zMTYwMC81NmI2/YjUxOTk0NDM4YmVh/MzEwODk3ZjUzNjgz/MjZkNC1kMnhnbGRj/LnBuZw" alt="" />
              <div>
                <h2>Milano Store</h2>
                <h5>1 Janvier 2023</h5>
              </div>
            </div>
     <div className='description'> <p>New Nike Af1 2023 😍😎🥳🥶🔥</p></div>
            <div className='img_section'>
              <img src="https://images.pexels.com/photos/9537431/pexels-photo-9537431.jpeg?auto=compress&cs=tinysrgb&w=2400" alt="" />
          
              <span>$ 150</span>  </div>
            <div className='footer'>
         <span>234 comments</span>
           
              <button>Buy Now</button>
            </div>
          </div>

        </div>
        <div className='about'>
         <div className="about_card">
          <div className="head">
            <h3>About</h3> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
          </div>
          <br />
          <div className='colors'>
            <h5>Colors :</h5>
            <div><span></span>
            <span></span>
            <span></span></div>
          </div>
          <div className='sizes'>
            <h5>Sizes :</h5>
            <div><span>41</span>
            <span>40</span>
            <span>39</span></div>
          </div>
          <div className='sizes'>
            <h5>Number of Pairs :</h5>
            <div><span>43</span>
            </div>
          </div>
<div className="btn_section">
<button>More Images</button>
</div>
         </div>
        </div>
      </div>


    </div>
  )
}

export default Space