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
        <nav
          id="main-nav"
          className={`flex shrink-0 flex-col items-center justify-evenly gap-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
            navOpen ? "w-48 p-4" : "w-0 p-0"
          }`}
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
        <div className="flex items-start pt-4">
          <button
            onClick={() => setNavOpen((open) => !open)}
            aria-expanded={navOpen}
            aria-controls="main-nav"
            className="link whitespace-nowrap"
            type="button"
          >
            {navOpen ? "Hide menu" : "Show menu"}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
