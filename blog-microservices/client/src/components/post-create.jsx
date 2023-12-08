import { useState } from "react"
import axios from "axios"

export default function PostCreate() {
   const [title, setTitle] = useState("")

   const onSubmit = async (event) => {
      event.preventDefault()

      await axios.post("http://localhost:4000/posts", { title })
      setTitle("")
   }

   return (
      <div>
         <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
               <label htmlFor="title" className="mb-2">
                  Title
               </label>
               <input
                  id="title"
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
               />
            </div>
            <button type="submit" className="btn btn-primary">
               Submit
            </button>
         </form>
      </div>
   )
}
