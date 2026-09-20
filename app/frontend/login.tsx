import { Link } from "react-router";

export async function loader() {
    return{}
}
export default function login() {
    return (
        <div>
            <p>hello, world!</p>
            <Link to="/dashboard">Go to dashboard</Link>
        </div>
)
}