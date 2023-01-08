import { useQuery } from "react-query"
import axios from "axios"
import initialLazyLoad from "../InitialLazyLoad"
const getAllGroupes = initialLazyLoad('Utils','Actions','getAllGroupes')


const ItGroupesBox = () => {
    const { isLoading, data, isError, error, refetch, isFetching } = useQuery('ItGroupes' , () => {
        return  getAllGroupes()
      },
       {/*
        cacheTime: 55000, staleTime: 0, refetchOnMount: true, refetchOnWindowFocus: true,
        refetchInterval: 2000, refetchIntervalInBackground: true,keepPreviousData:true //enabled: false,
      */
     // keepPreviousData:true
     }  )
 
  return (
    <div>
    <div>
      <div className='head'>
        <h3>IT Groupes</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-terminal-fill" viewBox="0 0 16 16">
<path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
</svg>

      </div>

      <div className='place'>
        <img src="" alt="" />
        <div>
          <h4>Real Madrid C.F</h4>
          <span>Spain ,Barcelon</span>
          <button className='in'>Visit Now</button>
        </div>
      </div>
      <div className='place'>
        <img src="https://imgs.search.brave.com/6bTG52-KxGm9UL-MgH2nEkw5Kdq9ya7iRJ9qoOxWA1s/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUdGLWw3X0ZXc0My/cnVacllwdXFNdjdz/alMtZUduOWRKdHdJ/eGllQWd3PXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" alt="" />
        <div>
          <h4>Ice Box</h4>
          <span>USA ,Chicago</span>
          <button className='in'>Visit Now</button>
        </div>
      </div>
      <div className='place'>
        <img src="https://imgs.search.brave.com/YPtEwG1x-REtLU2uhNimAJevAAoNI7P3c-u-rpKuFSE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/SFI4b1JiYmNhWmRq/OFdsOWc0akl3SGFI/YSZwaWQ9QXBp" alt="" />
        <div>
          <h4>Milano Store</h4>
          <span>Tunisia ,Centre Ville</span>
          <button className='in'>Visit Now</button>
        </div>
      </div>
      <div className='place'>
        <img src="https://imgs.search.brave.com/CnqpE_MCRd37vb0sAo1jH6cXFpgtjseHnh3XI3vZWhg/rs:fit:1000:850:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly1JTUlfY3RLU2RN/by9WS1U5bGdDam5R/SS9BQUFBQUFBQUJK/VS9WNWJHWWV1c1NE/NC9zMTYwMC81NmI2/YjUxOTk0NDM4YmVh/MzEwODk3ZjUzNjgz/MjZkNC1kMnhnbGRj/LnBuZw" alt="" />
        <div>
          <h4>Nike Shop</h4>
          <span>Tunisia ,Tunis</span>
          <button className='in'>Visit Now</button>
        </div>
      </div>
    </div>
    <h6>Created By <span>NassimKhlifi</span> © 2023</h6>
  </div>
  )
}

export default ItGroupesBox