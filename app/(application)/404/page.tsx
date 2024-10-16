// pages/404.js
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="not-found-page"
      style={{ textAlign: "center", padding: "50px", minHeight: "100vh" }}
    >
      <h1 style={{ fontSize: "2rem" }}>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <a style={{ textDecoration: "underline", color: "blue" }}>
          Go back to Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
