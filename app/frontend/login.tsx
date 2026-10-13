import { Link } from "react-router";

export default function login() {
  return (
    <div>
      <p>hello, world!</p>
      <div className="flex flex-col gap-2">
        <Link to="/student/dashboard">Go to Student Dashboard</Link>
        <Link to="/teacher/dashboard">Go to Teacher Dashboard</Link>
      </div>
    </div>
  );
}