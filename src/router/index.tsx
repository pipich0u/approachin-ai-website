import { createBrowserRouter, RouteObject } from "react-router-dom";
import Index from "@/page/index/inex";
import Layout from "@/layout";
import TeamPage from "@/page/index/team/index";
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
                path: "/introduce",
                element: <TeamPage />
            },
            {
                path: "/technology",
                element: <TeamPage />
            },
            {
                path: "/cooperate",
                element: <TeamPage />
            },
            {
                path: "/qujinginfo",
                element: <TeamPage />
            },
            {
                path: "/weteam",
                element: <TeamPage />
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
