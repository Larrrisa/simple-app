import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [visible, setVisible] = useState(false);

  function handleMobileMenu() {
    setVisible((prevVisible) => !prevVisible);
  }

  return (
    <div>
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
      <div className="nav-icon" onClick={handleMobileMenu}>
        <Image src="./menu.svg" width={30} height={18} alt="Menu icon"></Image>
      </div>
      <div className={visible ? "nav-small" : "nav-small-hidden"}>
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
    </div>
  );
}
