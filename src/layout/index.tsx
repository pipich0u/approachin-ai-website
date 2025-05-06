import PageContact from "@/page/index/components/contact";
import TopNav from "@/page/index/components/topNav";
import { Outlet, useNavigate } from "react-router-dom";
import './index.css'
export default function Layout() {
    const navgite = useNavigate()

    return (
        <div className="layout">
            {/* <TopNav /> */}
            <div className="layout-main">
                <Outlet />
                <div className="layout-bottom">
                    <PageContact onNavigate={() => navgite('/')} />
                </div>
            </div>
        </div>
    )
}