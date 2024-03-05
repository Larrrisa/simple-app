import Link from "next/link";

export default function Navigation() {
  return (
    <div className="nav">
      <Link className="link" href="#">
        Works
      </Link>
      <Link className="link" href="#">
        Blog
      </Link>
      <Link className="link" href="#">
        Contact
      </Link>
      <Link className="link" href="/signin">
        Sign in
      </Link>
      <Link href="/signup">Sign up</Link>
    </div>
  );
}
