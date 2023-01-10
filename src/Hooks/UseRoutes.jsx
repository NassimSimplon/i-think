import { Suspense } from 'react'
import { Route } from 'react-router-dom'
import pagesLazyLoad from '../PagesLazyLoad'

const Home = pagesLazyLoad('Pages', 'Home')
const NoMatch = pagesLazyLoad('Utils', 'NoMatch')
{/*
const About = pagesLazyLoad('Pages', 'About')
const Products = pagesLazyLoad('Components', 'Products')
const Jackets = pagesLazyLoad('Components', 'Jackets')
const Shoes = pagesLazyLoad('Components', 'Shoes')
const Profile = pagesLazyLoad('Pages', 'Profile')
const LogIn = pagesLazyLoad('Components', 'LogIn')
const RequireAuth = pagesLazyLoad('Components', 'RequireAuth')
const More = pagesLazyLoad('Components', 'More')
*/}
const useRoutes = (path, name) => {
  return (
    <Route path={`${path}`} element={<Suspense fallback={<div>...loading</div>}>
      {name == 'Home' ? <Home /> : name == 'NoMatch' ? <NoMatch /> : null}
    </Suspense>} />
  )
}


export default useRoutes