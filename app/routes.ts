import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    index("frontend/login.tsx"),
    layout("frontend/layout.tsx", [
        route("dashboard", "frontend/dashboard.tsx"),
        route("calendar", "frontend/calendar.tsx"),
        route("classes", "frontend/classes.tsx"),
        route("library", "frontend/librarby.tsx"),
        route("upload", "frontend/components/upload.tsx"),
        route("extensions", "frontend/extensions.tsx"),
        route("notifications", "frontend/notifications.tsx"),
        route(":id/class", "frontend/$id/class.tsx"),
    ]),
    ] satisfies RouteConfig;
