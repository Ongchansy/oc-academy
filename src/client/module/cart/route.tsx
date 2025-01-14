import CartLayout from "./CartLayout"
import CartPage from "./CartPage"



const cartRoute = [
    {
        path: '/cart',
        element: <CartLayout />,
        children: [
            {
                index:true,
                element: <CartPage />,
            },
        ]
    },
]

export default cartRoute