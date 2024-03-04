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
      <Link className="link" href="#">
        Sign in
      </Link>
      <Link href="#">Sign up</Link>
    </div>
  );
}
