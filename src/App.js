import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostPage from "./pages/postPage/PostPage";
import Post from "./components/post/Post";
// import CreatePostsPage from "./pages/createPostsPage/CreatePostsPage";
// import MainPage from "./pages/mainPag/MainPage";
// import UsersPage from "./pages/userPage/UsersPage";

function App() {
  return (
    <div className="App">
      {/*<UsersPage />*/}
      {/*<MainPage />*/}
      {/*<CreatePostsPage />*/}
      <PostPage />
      <Post />

    </div>
  );
}

export default App;
