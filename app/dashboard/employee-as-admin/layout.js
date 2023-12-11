import { EmployeeAsAdminLayout } from "@/app/components";


export default function EmployeeAdminLayout({ children }) {

    return (
        <>
            <EmployeeAsAdminLayout>
                {children}
            </EmployeeAsAdminLayout>
        </>
    )
}
