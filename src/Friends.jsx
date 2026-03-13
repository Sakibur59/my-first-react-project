import { use } from "react"
import Friend from "./Friend"

export default function Friends({fetchPromise}){
    const friends = use(fetchPromise)
    return(
        <div className="card">
            <h3>Friend: {friends.length}</h3>
            {
                friends.map(friend =><Friend friend={friend}></Friend> )
            }
        </div>
    )
}