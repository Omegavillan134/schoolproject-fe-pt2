export type addfile = {
    
}

export type Announcements = {
    id: string,
    authorId: string,
    classId: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    teacher: string,
    class: string,
}

export type newAnnouncements = {
    title: string,
    content: string,
    teacher: string,
    class: string
}

export type Classes = {
    id: string,
    teacherId: string,
    className: string,
    details: string,
    assignedTeacher: string,
    announcement: string,
}

export type addClasses = {
    teacherId: string,
    className: string,
    details: string,
}