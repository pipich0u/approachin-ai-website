import { createBrowserRouter, RouteObject } from "react-router-dom";
import Index from "@/page/index/inex";
import Layout from "@/layout";
import InfoPage from "@/page/index/info/index";
import ModelsRepository from "@/page/index/modelsNew/modelsRepostory";
import CooperatePage from "@/page/index/cooperate";
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
            {
                path: "/models",
                element: <ModelsRepository />
            },
            {
                path: "/cooperate",
                element: <CooperatePage />
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
