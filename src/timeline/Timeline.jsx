import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'
import { useState } from 'react'
import Stories from './Stories'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2d",
    },
  ]);
  const [stories, setStory] = useState([
    {
      id: 1,
      storyImage: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "k.martiness"
    },
    { 
      id:2,
      storyImage: "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "rmcutiee"
    },
    {
      id:3,
      storyImage: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "lara.899"
    },
    { 
      id: 4,
      storyImage: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "developer"
    },
    {
      id: 5,
      storyImage: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "blue__Moon"
    },
    {
      id:6,
      storyImage: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "mustafa._22"
    },
    {
      id:7,
      storyImage: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      userName: "madaraa__o21"
    },
    {
      id: 8,
      storyImage: "https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=600",
      userName: "uzbek1221"
    },
  ])
  
  return (
    <div className='timeline'>
        <div className="timeline__left">
          <div className="timeline__stories">
            <div className="story__header">
              <h5>New stories</h5>
            </div>
            <div className="stories">
            {stories.map((story) => (
            <Stories
            id={story.id}
            storyImage={story.storyImage}
            userName={story.userName}
            />
          ))}
            </div>
          </div>
          <div className="timeline__posts">
            <div className="timeline__container">
            {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
            </div>
          </div>
        </div>
        <div className="timeline__middle"></div>
        <div className="timeline__right">
            <Suggestions/>
        </div>
    </div>
  )
}

export default Timeline