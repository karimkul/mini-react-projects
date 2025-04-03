// import "../styles.css";
import Card from "../components/Card";
import { users } from "./data";

export default function List() {
    return (
        <div className="list">
            {users.map((u) => (
                <Card user={u} key={u.id} />
            ))}
        </div>
    );
}
