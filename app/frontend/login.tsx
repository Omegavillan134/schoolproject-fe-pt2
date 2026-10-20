import { Link } from "react-router";

export default function login() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <div className="card w-full flex flex-col">
          <div className="flex flex-col items-center">
            <p>Username:</p>
            <input className="card w-full max-w-80" type="text" placeholder="Username" />
            <p>Password:</p>
            <input className="card w-full max-w-80" type="text" placeholder="Password" />
          </div>
          <div className="flex justify-center gap-4 pt-2">
            <button className="card link">Cancel</button>
            <button className="card link bg-green-500">Login</button>
          </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/student/dashboard">Go to Student Dashboard</Link>
        <Link to="/teacher/dashboard">Go to Teacher Dashboard</Link>
      </div>
    </div>
    </div>
  );
}