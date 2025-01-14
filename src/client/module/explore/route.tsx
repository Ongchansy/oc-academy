import ExploreLayout from "./ExploreLayout"
import ExplorePage from "./ExplorePage"


const exploreRoute = [
    {
        path: '/explore',
        element: <ExploreLayout />,
        children: [
            {
                index:true,
                element: <ExplorePage />,
            },
        ]
    },
]

export default exploreRoute