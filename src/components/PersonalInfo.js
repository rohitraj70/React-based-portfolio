//src/components/PersonalInfo.js

function PersonalInfo(){
    
    const name = "Rohit Raj";
    const role = "Full Stack Developer";
    const location = "Lucknow, UP";
    const email = "rohitraj5730@gmail.com";
    return(
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>
        </div>

    );
}
export default PersonalInfo;