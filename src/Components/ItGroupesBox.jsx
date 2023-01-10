


const ItGroupesBox = ({groupesData, isGroupesLoad, isGroupesFetch, isGroupesError, groupesError}) => {

  if (isGroupesLoad ) {
    return <div>... loading </div>
  }

  if (isGroupesError) {
    return <div>{groupesError?.message}</div>
  }

  return (
    <div key="Groupe_box_parent">
      <div key="Groupe_box_content_parent">
        <div className='head' key="Groupe_box_content_head">
          <h3 key="Groupe_box_h3">IT Groupes</h3>
          <svg key="Groupe_box_svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-terminal-fill" viewBox="0 0 16 16">
            <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z" />
          </svg>
        </div>
        {groupesData?.map((el) => (
          <div className='place' key={el?.id}>
            <img key="Groupe_box_card_Img" src={el?.image} alt="" />
            <div key="Groupe_box_card_content">
              <h4 key="Groupe_box_card_h4">{el?.name}</h4>
              <span key="Groupe_box_card_span">{el?.category}</span> <br />
              <button className='in' key="Groupe_box_card_btn">Visit Now</button>
            </div>
          </div>
        ))}

      </div>
      <h6>Created By <span>NassimKhlifi</span> © 2023</h6>


    </div>
  )
}

export default ItGroupesBox