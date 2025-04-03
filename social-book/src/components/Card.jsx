import { Link } from "react-router-dom";

export default function Card({ user }) {
    return (
        <div className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to={`/list/${user.id}`}>View Details</Link>
        </div>
    );
}
