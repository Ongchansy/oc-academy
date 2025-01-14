import authRoutes from "../client/module/auth/route"
import courseRoute from "../client/module/course/route"
import cartRoute from "../client/module/cart/route"
import exploreRoute from "../client/module/explore/route"


const routes = [
    ...courseRoute,
    ...authRoutes,
    ...exploreRoute,
    ...cartRoute
]

export default routes