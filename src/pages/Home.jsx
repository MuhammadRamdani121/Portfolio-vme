import { Link } from "react-router-dom";
import MenuNavbar from "../component/Navbar/MenuNavbar";

export default function Home() {
  return (
    <div>
      <header>
        <MenuNavbar />
        <h1>asd</h1>
      </header>
      <h1 className="text-center text-4xl font-bold">Home Page</h1>

      <Link to="/about">Abot</Link>
    </div>
  );
}
