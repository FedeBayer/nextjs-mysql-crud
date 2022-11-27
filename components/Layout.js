import { ToastContainer } from "react-toastify";
import { Navbar } from "./Navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100  h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>{" "}
      </div>
      <ToastContainer />
    </>
  );
}
