export function Layout({ children }) {
  return (
    <>
      <h1>Navbar</h1>
      <div className="bg-gray-100 p10">
        <div className="container mx-auto h-full">{children}</div>{" "}
      </div>
    </>
  );
}
