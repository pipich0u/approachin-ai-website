import { createBrowserRouter, RouteObject } from "react-router-dom";
import Index from "@/page/index/inex";
import Layout from "@/layout";
import InfoPage from "@/page/index/info/index";
const _rooter: RouteObject[] = [

    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
           
            {
                path: "/qujinginfo",
                element: <InfoPage />
            },
       
        ],
    },
    //   {
    //     path: '*',
    //     // element: <NotFound />
    //   }
]

function feepRoute(router: RouteObject[]) {
    router.forEach(route => {
        if (route.children?.length) {
            feepRoute(route.children)
        }
    })
}
feepRoute(_rooter)

const router = _rooter;

export default router;
