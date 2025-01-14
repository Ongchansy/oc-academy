import InstructureLayout from "./InstructureLayout"
import InstructurePage from "./InstructurePage"
import InstructureLogin from "./login/InstructorLogin"

const instructureRoute = [
    {
        path: '/instructor',
        element: (
                <InstructureLayout />
        ),
        children: [
            {
                index: true,
                element: <InstructurePage />
            },
        ]
    },
    {
        path: "/inst-login",
        element: <InstructureLogin />
    }
]

export default instructureRoute