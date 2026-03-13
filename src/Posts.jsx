import { use } from "react"

export default function Posts({ApiPost}){
    const posts = use(ApiPost)
    return (
        <div className="card">
            <h3>Post: {posts.length} </h3>
        </div>
    )
}