import lazyLoad from './PagesLazyLoad'
import {  Routes } from 'react-router-dom'
import { QueryClientProvider,QueryClient } from 'react-query'
import './App.css'
import useRoutes from './Hooks/UseRoutes'

//Lazy Shared Components
const Navbar = lazyLoad('Shared', 'Navbar');
const Media = lazyLoad('Shared', 'Media');


const App = () => {
 const queryClient = new QueryClient();
  return (
   <div className='App'>
     <QueryClientProvider client={queryClient}>
     <Navbar />
        <Routes>
       {useRoutes('/','Home')}
       {useRoutes('*','NoMatch')}
       </Routes>
       <Media />
    </QueryClientProvider>
   </div>

  )
}

export default App