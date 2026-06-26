import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Home Page</h1>

      <Link to="/about">Abot</Link>
    </div>
  );
}
