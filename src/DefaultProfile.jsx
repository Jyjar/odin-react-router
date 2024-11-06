import { Link } from "react-router-dom";

const DefaultProfile = () => {
    return (
        <div>
            <h2>No profile found</h2>
            <h3>Profiles:</h3>
            <li>
                <Link to="spinach">Spinach</Link>
            </li>
            <li>
            <Link to="popeye">Popeye</Link>
            </li>
        </div>
    );
};

export default DefaultProfile;
