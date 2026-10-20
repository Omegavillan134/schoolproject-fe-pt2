import { Link, Outlet, useLocation } from "react-router";
import { useState } from "react";

export default function AppLayout() {
  const [navOpen, setNavOpen] = useState(true);
  const location = useLocation();
  const isTeacher = location.pathname.startsWith("/teacher");
  const isStudent = location.pathname.startsWith("/student");

  return (
    <div>
      <main className="flex h-screen flex-row overflow-hidden">
        <div>
          <button
            onClick={() => setNavOpen((open) => !open)}
            aria-expanded={navOpen}
            aria-controls="main-nav"
            className="link"
            type="button"
          >
            {navOpen ? "Hide menu" : "Show menu"}
          </button>
        </div>
        {navOpen && (
          <nav
            id="main-nav"
            className="flex w-48 shrink-0 flex-col items-center justify-evenly gap-2 p-4"
          >
            {isStudent && (
              <>
                <Link to="/student/dashboard">Dashboard</Link>
                <Link to="/student/classes">Classes</Link>
                <Link to="/student/upload">Upload File</Link>
                <Link to="/student/create-file">Create file</Link>
                <Link to="/student/library">Library</Link>
                <Link to="/student/notifications">Notifications</Link>
              </>
            )}
            {isTeacher && (
              <>
                <Link to="/teacher/dashboard">Dashboard</Link>
                <Link to="/teacher/classes">Classes</Link>
                <Link to="/teacher/extensions">Extensions</Link>
                {/* add teacher nav links here as needed */}
              </>
            )}
            <Link to="/">Logout</Link>
          </nav>
        )}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}