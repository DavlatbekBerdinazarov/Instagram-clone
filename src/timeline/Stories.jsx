import React from 'react'
import "./Stories.css"

function Stories({storyImage,userName,id}) {
  return (
        <div className="story__body" key={id}>
            <div className="story__profileHeader">
                <img className='story_img' 
                    src={storyImage} alt=""
                 />
            </div>
            <div className="story__profileFooter">{userName}</div>
        </div>
  )
}

export default Stories