import { lazy } from 'react'
import { Suspense } from 'react';

//@Lazy Components
const Description = lazy(() => import('../Components/Description'));
const Space = lazy(() => import('../Components/Space'));


const Home = () => {
  return (
    <div id='Home' key="Home_parent">
      <marquee key="Home_marquee" behavior="smooth" direction="left"><p>👨‍💻 Think Code Scale 👩‍💻</p></marquee>
  <Suspense fallback={<div>... loading</div>}>
  <Description />
  </Suspense>
  <Suspense fallback={<div>... loading</div>}>
  <Space />
  </Suspense>
  
    </div>
  )
}

export default Home