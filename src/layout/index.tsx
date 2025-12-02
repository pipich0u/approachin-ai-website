import { Outlet } from "react-router-dom";
import './index.css'
export default function Layout() {

    return (
        <div className="layout">
            <div className="layout-main ">
                <Outlet />
            </div>
        </div>
    )
}