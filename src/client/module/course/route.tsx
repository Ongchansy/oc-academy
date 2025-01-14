import CourseDetail from "./component/CourseDetail"
import CourseLayout from "./CourseLayout"
import CoursePage from "./CoursePage"

const courseRoute = [
    {
        path: '/course',
        element: <CourseLayout />,
        children: [
            {
                index:true,
                element: <CoursePage />,
            },
            {
                path: ':id',
                element: <CourseDetail />
            }
        ]
    },
]

export default courseRoute