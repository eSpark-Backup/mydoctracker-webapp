import { Footer, Navbar } from "../components";

export default function Landinglayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}