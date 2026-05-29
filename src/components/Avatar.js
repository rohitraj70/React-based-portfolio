//src/components/Header.js

function Avatar(){
    return(
        <div className="avatar-container">
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="avtar-image" />  
            <div className="avatar-border"></div>  {/* decorative border around the avatar, can be styled with CSS*/}
        </div>
    )
}
export default Avatar;