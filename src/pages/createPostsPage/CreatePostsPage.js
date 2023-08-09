import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../store/postSlice";

function CreatePostsPage() {

  const dispatch = useDispatch()

  const {error} = useSelector(state => state.postsReducer)
  const [form, setForm] = useState('')

  const changeForm = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(createPost())
  }

  return (

    <div>
      <form onSubmit={submit}>
        <input type="text" name='title' onChange={changeForm}/>
        <textarea name="body" cols="30" rows="10" onChange={changeForm}></textarea>
        <button type='submit'>create post</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default CreatePostsPage;