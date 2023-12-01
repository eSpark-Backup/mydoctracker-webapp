import { Main } from "@/app/components";

export default function AdminLayout({ children }) {

    return (
        <>
            <Main>
            {children}
            </Main>
        </>
    )
}
