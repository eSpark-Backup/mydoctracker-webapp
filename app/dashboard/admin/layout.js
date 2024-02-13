import { Main } from "@/app/components";
import ProtectedRoute from "@/app/utils/protectedRoutes";

export default function AdminLayout({ children }) {

    return (
        <>
        <ProtectedRoute allowedRoles={[{role:"admin",roleType:""}]}>
            <Main>
                {children}
            </Main>
        </ProtectedRoute>
        </>
    )
}
