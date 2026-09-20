import { Link, Outlet} from "react-router"

export default function LoginPage() {
    return (
        <div>
            <main className="flex flex-row min-h-screen">
                <nav className="flex flex-col pr-20 items-center justify-center justify-evenly">
                    <Link to="dashboard">Dashboard</Link>
                    <Link to="classes">Classes</Link>
                    <Link to="upload">Upload File</Link>
                    <Link to="extensions">Extensions</Link>
                    <Link to="library">Library</Link>
                    <Link to="notifications">Notifications</Link>
                    <Link to="/">Logout</Link>
                </nav>
                <div className="flex-1">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}