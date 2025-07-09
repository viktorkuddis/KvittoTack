import { UserButton } from "@clerk/clerk-react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav style={{ padding: '1rem 0rem', backgroundColor: '#ffffff' }}>
                <div style={{ display: "flex", padding: "0rem 2rem", alignItems: "center", justifyContent: "space-between", color: "#213547" }}>
                    <h2>💵 KVITTO TACK 💵</h2> <UserButton />
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', overflowX: "auto", padding: "0rem 2rem" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav >


            <Outlet />


        </>
    )
};

export default Layout;