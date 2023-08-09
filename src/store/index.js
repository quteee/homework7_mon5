import {configureStore} from "@reduxjs/toolkit";

import postsReducer from './postSlice'
import PostInfoReducer from './PostInfoSlice'


export const store = configureStore({
  reducer: {
    postsReducer,
    PostInfoReducer

  }
})