import { Main } from "@/app/components";

export default function GeneralLayout({ children }) {

    return (
        <>
            <Main>
                {children}
            </Main>
        </>
    )
}
