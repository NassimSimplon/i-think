import {lazy} from 'react'
 

//@Lazy Components
const Description = lazy(()=> import('../Components/Description'));
const Space = lazy(()=> import('../Components/Space'));


const Home = () => {
  return (
    <div id='Home'>
      <marquee behavior="smooth" direction="left"><p>👨‍💻 Think Code Scale 👩‍💻</p></marquee>
      <Description/>
      <Space/>
    </div>
  )
}

export default Home