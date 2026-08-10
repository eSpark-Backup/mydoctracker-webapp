import { Main } from "@/app/components";
import ProtectedRoute from "@/app/utils/protectedRoutes";

export default function GeneralLayout({ children }) {

    return (
        <>
        <ProtectedRoute allowedRoles={[{role:"user",roleType:""},{role:"employee",roleType:"default"},{role:"employee",roleType:"basic"},{role:"employee",roleType:"admin"}]}>
            <Main>
                {children}
            </Main>
        </ProtectedRoute>
        </>
    )
}
