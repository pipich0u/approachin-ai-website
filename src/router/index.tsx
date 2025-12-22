import type { RouteObject } from "react-router-dom"
import Index from "@/page/index/inex"
import Layout from "@/layout"
import ModelsRepository from "@/page/index/modelsNew/modelsRepostory"
import CooperatePage from "@/page/index/cooperate"
import { KT } from "@/page/index/KT"

// mobile
import MobileIndex from "@/page/mobile"
import { MobileKT } from "@/page/mobile/KT"
// import MobileLayout from "@/layout/mobile"
// import MobileIndex from "@/page/mobile"
// import MobileModels from "@/page/mobile/models"
// import MobileCooperate from "@/page/mobile/cooperate"
// import MobileKT from "@/page/mobile/KT"

export function createAppRoutes(isMobile: boolean): RouteObject[] {
    if (isMobile) {
        return [
            {
                path: "/",
                element: <MobileIndex />,
                children: [
                    //       {
                    //         index: true,
                    //         element: <MobileIndex />,
                    //       },
                    {
                        path: "ktransformers",
                        element: <MobileKT />,
                    },
                    //       {
                    //         path: "models",
                    //         element: <MobileModels />,
                    //       },
                    //       {
                    //         path: "cooperate",
                    //         element: <MobileCooperate />,
                    //       },
                ],
            },
        ]
    }

    return [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Index />,
                },
                {
                    path: "ktransformers",
                    element: <KT />,
                },
                {
                    path: "models",
                    element: <ModelsRepository />,
                },
                {
                    path: "cooperate",
                    element: <CooperatePage />,
                },
            ],
        },
    ]
}
