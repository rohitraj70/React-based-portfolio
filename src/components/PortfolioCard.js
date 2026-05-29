//src/components/PortfolioCard.js
import Header from "./Header";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import Bios from "./Bio";
import "./PortfolioCard.css";

function PortfolioCard(){
    return(
        <div className="Portfolio-Card">
            <Header />
            <div className="card-container">
                <Avatar />
                <PersonalInfo />
                <Bios />
            </div>
        </div>
    )
} export default PortfolioCard;