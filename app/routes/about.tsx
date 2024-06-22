import { Link, type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "About" }, { name: "about", content: "Hello" }];
};

export default function About() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">About</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Link
            className="text-blue-700 underline visited:text-purple-900"
            to="/"
          >
            Go Back Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
