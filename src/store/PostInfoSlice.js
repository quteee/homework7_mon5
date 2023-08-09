import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getMoreInfo = createAsyncThunk(
  'getMoreInfo',
  async function (info, {dispatch, rejectWithValue}) {
    try {
      dispatch(preloaderOn())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts',)

      if(response.status === 200) {
        const postsMore = await response.json()
        dispatch(postMoreInfo(postsMore))
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


const PostInfoSlice = createSlice({
  name: 'PostInfoSlice',
  initialState: {
    postsMore: [],
    preloader: false,
    error: ''
  },
  reducers: {
    postMoreInfo: (state, action) => {
      state.postsMore = action.payload
    },
    preloaderOn: (state, action) => {
      state.preloader = true
    },
    preloaderOff: (state, action) => {
      state.preloader = false
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const {postMoreInfo, preloaderOff, preloaderOn, setError} = PostInfoSlice.actions
export default PostInfoSlice.reducer