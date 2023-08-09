import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
  'getPosts',
  async function (info, {dispatch, rejectWithValue}) {
    try {
      dispatch(preloaderOn())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',)

      if(response.status === 200) {
        const posts = await response.json()
        dispatch(postsInfo(posts))
      } else if(response.status === 404) {
        throw '404 not found'
      }
    }
    catch (e) {
      dispatch(setError(e))
    } finally {
      dispatch(preloaderOff())
    }
  }
)

// export const createPost = createAsyncThunk(
//   'createPost',
//   async function(info, {dispatch, rejectWithValue}) {
//     try {
//       const options = {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(info)
//       }
//
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//
//       if(response.status >= 200 && response.status <= 204) {
//         dispatch(setError('post created'))
//       } else if(response.status === 404) {
//         throw '404 not found'
//       }
//     } catch (e) {
//       dispatch(setError(e))
//     } finally {
//       dispatch(preloaderOff())
//     }
//   }
// )


const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    posts: [],
    preloader: false,
    error: ''
  },
  reducers: {
    postsInfo: (state, action) => {
      state.posts = action.payload
    },
    preloaderOn: (state, action) => {
      state.preloader = true
    },
    preloaderOff: (state, action) => {
      state.preloader = false
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    deleteAllAction: (state, action) => {
      state.posts = ''
    }
  }
})

export const { postsInfo, preloaderOff, preloaderOn, setError, deleteAllAction } = postsSlice.actions

export default postsSlice.reducer