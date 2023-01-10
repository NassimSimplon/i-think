


import { getAllGroupes, getAllPosts } from "../Utils/Actions"
import useQueriesHook from "../Hooks/useQueriesHook"
import { lazy } from 'react'
import { useState } from "react"
import { Fragment } from 'react'

//Lazy Components
const ItGroupesBox = lazy(() => import('./ItGroupesBox'))
const Space = () => {
  const [postsLimit, setPostLimit] = useState(1)
  const { isLoading: isGroupesLoad, fetchNextPage: fetchNextGroupesPage, data: groupesData, hasNextPage: hasNextGroupesPage, isError: isGroupesError, error: groupesError, isFetching: isGroupesFetch } = useQueriesHook('ItGroupes', getAllGroupes)
  const { isLoading: isPostsLoad, fetchNextPage: fetchNextPostsPage, data: postsData, isError: isPostsError, error: postsError, isFetching: isPostsFetch, hasNextPage: hasNextPostsPage } = useQueriesHook('Posts', getAllPosts, postsLimit)


  if (isPostsLoad) {
    return <div>... loading </div>
  }
  if (isPostsError) {
    return <div>{postsError?.message}</div>
  }

  //Post Header 
  const PostHeader = ({ id, date }) => {
    let author = groupesData?.pages[0]?.data?.find(x => x.id == id);
    return (
      <div className="head" key={author?.id}>
        <img key="Space_publication_img" src={author?.image} alt="" />
        <div key="Space_publication_content">
          <h2 key="Space_publication_h2">{author?.name}</h2>
          <h5 key="Space_publication_h5">{date}</h5>
        </div>
      </div>
    )
  }
 
 
  return (
    <div id='Space' key="Space_parent" >
      <div className='filterHead' key="Space_filter_Head">
        <h1 key="Space_filter_Head_h1">Space</h1>
        <div key="Space_filter_Head_parent">
          <span key="Space_filter_Head_parent_span">Show Filter</span>
          <svg key="Space_filter_Head_parent_svg" aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path><path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path></svg></div></div>
      <div className="content" key="Space_content">
        <div className='markets' key="Space_market">
          <ItGroupesBox groupesData={groupesData?.pages[0]?.data} isGroupesLoad={isGroupesLoad} isGroupesFetch={isGroupesFetch} isGroupesError={isGroupesError} groupesError={groupesError} />
        </div>
        <div className="All_Post">
          {postsData?.pages.map((el, i) => (

            <Fragment key={i}>
              {el?.data.map(post => (
                <div className='container_publication' key={post?.id}>
                  <div className='publication' >
                    <div className='card' key="Space_publication_card" >
                      <PostHeader id={post?.authorId} date={post?.date} />
                      <div className='description' key="Space_publication_txt"> <p>{post?.Description}</p></div>
                      <div className='img_section' key="Space_section_img">
                        <img key="Space_img" src={post?.image} alt="" />

                      </div>
                      <div className='footer' key="Space_footer">
                        <span key="Space_footer_span">{post?.comments?.length} comments</span>

                        <button key="Space_footer_btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                  <div className='about' key="Space_about">
                    <div className="about_card" key="Space_card_about">
                      <div className="head" key="Space_card_head">
                        <h3 key="Space_card_h3">About</h3>
                        <svg key="Space_card_svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </div>
                      <br />
                      <div className='colors'>
                        <h5>Members Number :</h5>
                        <span>{groupesData?.pages[0]?.data?.find(x => x.id == post?.authorId)?.members?.length}</span>

                      </div>
                      <div className='sizes'>
                        <h5>Category :</h5>
                        <span>{groupesData?.pages[0]?.data?.find(x => x.id == post?.authorId)?.category}</span>

                      </div>

                      <div className="btn_section">
                        <button>Visit Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </Fragment>
          )
          )}

          <div>
          </div>
          <div id="loadSection">
            <button id="loadMore" style={{borderColor: hasNextPostsPage ? 'var(--primary-color)':"#757575", color: hasNextPostsPage ? 'var(--primary-color)':"#757575"}} className="loadMore" onClick={() => fetchNextPostsPage()}  >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Space