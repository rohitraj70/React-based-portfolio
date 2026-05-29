//src/components/Bios
function Bios(){
    const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB"];
    const bioline = "Passionate about building web applications that solve real-world problems. Always eager to learn new technologies and improve my skills.";
    return(
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bioline">{bioline}</p>
            <h3>Skills</h3>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    )
}  export default Bios;