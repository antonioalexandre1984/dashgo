import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/Home";
import { Users } from "./pages/Users";
import { CreateUser } from "./pages/Users/components/CreateUser";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="users/create" element={<CreateUser />} />
        </Routes>
    );
}