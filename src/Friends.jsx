import { use } from "react"

export default function Friend({fetchPromise}){
    const friend = use(fetchPromise)
    return(
        <div className="card">
            <h3>Friend: {friend.length}</h3>
        </div>
    )
}