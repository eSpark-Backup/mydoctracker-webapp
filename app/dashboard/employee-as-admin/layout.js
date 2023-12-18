import { Main } from "@/app/components";
import ProtectedRoute from "@/app/utils/protectedRoutes";


export default function EmployeeAdminLayout({ children }) {

    return (
        <>
        <ProtectedRoute allowedRoles={[{role:"employee",roleType:"admin"}]}>
            <Main>
                {children}
            </Main>
        </ProtectedRoute>
        </>
    )
}
