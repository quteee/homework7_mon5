import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import PostInfo from "./PostInfo";
import postSpinner from "./postSpinner";
import { getMoreInfo} from "../../store/PostInfoSlice";

function Post({postInfo}) {

  const dispatch = useDispatch()

  const { posts, error, preloader} = useSelector(state => state.PostInfoReducer)

  const getMoreInfoFunc = () => {
    dispatch(getMoreInfo())
  }
  return (
    <>
      <h1>{postInfo.title}</h1>
      <button onClick={getMoreInfoFunc}>more info</button>
      <p>-------------------</p>
      {preloader ? < postSpinner/>
        : error ? <h3>{error}</h3> :
          posts.map(post => <PostInfo key={post.id} postMoreInfo={post} />)
      }
    </>
  )
}

export default Post
