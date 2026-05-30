//src/components/Header.js

function Avatar(){
    return(
        <div className="avatar-container">
            <img src="/rohit.jpeg" alt="Profile" className="avtar-image" />  
            <div className="avatar-border"></div>  {/* decorative border around the avatar, can be styled with CSS*/}
        </div>
    )
}
export default Avatar;
