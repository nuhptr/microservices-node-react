import PostCreate from "./components/post-create"
import PostList from "./components/post-list"

export default function App() {
   return (
      <div className="container">
         <h1>Create Post</h1>
         <PostCreate />
         <hr />
         <h1>Posts</h1>
         <PostList />
      </div>
   )
}
