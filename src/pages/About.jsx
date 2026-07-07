import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <Link
        className="flex rounded border px-2 text-blue-500 hover:text-blue-700"
        to="/"
      >
        Homeasd
      </Link>
    </div>
  );
}
