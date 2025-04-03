import { useNavigate, useParams } from "react-router-dom";
import { users } from "./data";

function ProfileDetails() {
    const { id } = useParams();

    const { name, email, avatar, about, links } = users.find(
        (user) => user.id === parseInt(id)
    );

    const navigate = useNavigate();

    return (
        <div className="details">
            <button onClick={() => navigate("/")}>Go to list</button>
            <h3>{name}</h3>
            <img src={avatar} alt={name} />
            <p>{email}</p>
            <span>{about}</span>

            <ul>
                {Object.keys(links).map((key) => (
                    <li key={key}>
                        <a href={links[key]}>{key}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProfileDetails;
