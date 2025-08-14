
function Profile(props) {
    return(
        <div className="profile-container">
            <div className="profile-header">
                <h1>{props.name}</h1>
                <img src={props.image} alt="profile image" />
            </div>
            <div className="profile-body">
                <h2>{props.telephone}</h2>
                <h2>{props.email}</h2>
            </div>

        </div>
    )
}

export default Profile