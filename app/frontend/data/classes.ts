export interface Class { id: string; slug: string; subject: string; instructor: string}

export const Classes: Class[] = [
    {id:"1", slug: "java", subject: "Java", instructor: "Sir Opella"},
    {id:"2", slug: "database", subject: "Database", instructor: "Sir Marmeto"},
    {id:"3", slug: "soft-eng", subject: "Software Engineering", instructor: "Sir Hugo"},
]

export const teacherClasses: Class[] = [
    {id:"1", slug: "java", subject: "Java", instructor: "Sir Opella"},
    {id:"2", slug: "database", subject: "Database", instructor: "Sir Marmeto"},
    {id:"3", slug: "soft-eng", subject: "Software Engineering", instructor: "Sir Hugo"},
]

export const getClassBySlug = (slug: string | undefined) =>
    Classes.find((c) => c.slug === slug?.toLowerCase())

