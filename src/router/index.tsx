import type { RouteObject } from "react-router-dom"
import Index from "@/page/pc/index/inex"
import Layout from "@/page/pc/index"
import ModelsRepository from "@/page/pc/modelsNew/modelsRepostory"
import CooperatePage from "@/page/pc/cooperate"
import { KT } from "@/KT/mob-KT"
import { MoonCake } from "@/page/pc/moonCake"
import { IntroductionPage } from "@/page/pc/about/introduction"

// mobile
import MobileIndex from "@/page/mobile/index/index.tsx"
import { MobileKT } from "@/KT/KT"
import MobileLayout from "@/page/mobile/index.tsx"
import { MachinePage } from "@/page/pc/solution/machine"


export function createAppRoutes(isMobile: boolean): RouteObject[] {
    if (isMobile) {
        return [
            {
                path: "/",
                element: <MobileLayout />,
                children: [
                    {
                        index: true,
                        element: <MobileIndex />,
                    },
                    {
                        path: "ktransformers",
                        element: <MobileKT />,
                    },
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
                    path: "mooncake",
                    element: <MoonCake />,
                },
                {
                    path: "models",
                    element: <ModelsRepository />,
                },
                {
                    path: "cooperate",
                    element: <CooperatePage />,
                },
                {
                    path: "machine",
                    element: <MachinePage />,
                },
                {
                    path: "introduction",
                    element: <IntroductionPage />,
                },
            ],
        },
    ]
}
