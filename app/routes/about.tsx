import { Link, type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "About" }, { name: "about", content: "Hello" }];
};

export default function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link className="text-sky-500 font-semibold dark:text-sky-400" to="/">
            Go back home
          </Link>
        </p>
      </div>
    </div>
  );
}
