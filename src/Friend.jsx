export default function Friend({friend}){
    const {name,email,phone} = friend;
    return(
        <div className="card">
            {/* 1st way  */}
            {/* <h4>Name:{friend.name}</h4>
            <h4>Email:{friend.email}</h4>
            <h4>Phone:{friend.phone}</h4> */}

            {/* 2nd way using destructing */}
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
        </div>
    )
}