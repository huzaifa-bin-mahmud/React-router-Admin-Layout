import { NavLink } from "react-router";

const AdminSidebar = () => {
    return (
        <div className="w-72 bg-mauve-800 text-white min-h-screen">
            <h2 className="p-5 text-2xl ">Admin panel</h2>
            <ul className="flex flex-col py-4 *:not-last:border-b *:p-4 *:has-[.active]:bg-mauve-700" >
                <li> <NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                 <li> <NavLink to="/admin/all-post">All posts</NavLink></li>
                <li> <NavLink to="/admin/create-post">Create post</NavLink></li>
                <li> <NavLink to="/admin/edit-post">Edit post</NavLink></li>
            </ul>
        </div>
    );
};

export default AdminSidebar;