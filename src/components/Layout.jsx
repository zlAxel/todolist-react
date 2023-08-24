import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <section className="antialiased bg-slate-800 text-slate-700 h-screen flex justify-center items-center">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300 w-full">
                    <Outlet />
                </div>
            </section>
        </>
    )
}
