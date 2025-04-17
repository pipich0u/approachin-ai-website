import PageContact from "@/page/index/components/contact";
import TopNav from "@/page/index/components/topNav";
import { Outlet } from "react-router-dom";
import './index.css'
export default function Layout() {

    return (
        <div className="layout">
            <TopNav />
            <div className="layout-main">
                <Outlet />
                <PageContact />
            </div>
        </div>
    )
}