import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("frontend/login.tsx"),
  layout("frontend/layout.tsx", [
    route("student", "frontend/student/layout.tsx", [
      route("dashboard", "frontend/dashboard.tsx"),
      route("calendar", "frontend/calendar.tsx"),
      route("classes", "frontend/classes.tsx"),
      route("library", "frontend/librarby.tsx"),
      route("upload", "frontend/components/upload.tsx"),
      route("create-file", "frontend/create-file.tsx"),
      route("add-new-class", "frontend/add-new-class.tsx"),
      
      route("notifications", "frontend/notifications.tsx"),
      // dynamic classroom routes (prefixed under /student)
      route(":id/class", "frontend/$id/class.tsx"),
      route(":id/announcements", "frontend/$id/announcements.tsx", {id: "student-announcements"}),
    ]),
    route("teacher", "frontend/teacher/layout.tsx", [
      route("dashboard", "frontend/teacher/dashboard.tsx"),
      route("extensions", "frontend/extensions.tsx"),
      route("classes", "frontend/teacher/classes.tsx"),
      route("create-class", "frontend/teacher/create-new-class.tsx"),
      route(":id/class", "frontend/teacher/class.tsx"),
      route(":id/announcements", "frontend/$id/announcements.tsx", {id: "teacher-announcements"}),
      route("new-assignment", "frontend/teacher/add-assignment.tsx")
    ]),
  ]),
] satisfies RouteConfig;