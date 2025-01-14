
import AuthLayout from "./AuthLayout";
import LoginPage from "./component/Login";
import SignUp from "./component/SignUp";


const authRoutes = [
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                index: true,
                path: 'login',
                element: <LoginPage />
            },
        ]
    },
];

export default authRoutes;