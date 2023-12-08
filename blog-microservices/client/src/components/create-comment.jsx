import { useState } from "react"
import axios from "axios"

export default function CreateComment({ postId }) {
   return (
      <div className="">
         <form action="">
            <div className="form-group">
               <label htmlFor="comment">New Comment</label>
               <input id="comment" type="text" className="form-control" value={""} onChange={() => {}} />
            </div>
            <button className="btn btn-primary">Submit</button>
         </form>
      </div>
   )
}
