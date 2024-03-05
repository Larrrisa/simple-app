import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <Image
          src="/fb.svg"
          width={30}
          height={30}
          alt="Facebook logo"
          className="logo"
        ></Image>
        <Image
          src="/insta.svg"
          width={30}
          height={30}
          alt="Instagram logo"
          className="logo"
        ></Image>
        <Image
          src="/twitter.svg"
          width={30}
          height={30}
          alt="Twitter logo"
          className="logo"
        ></Image>
        <Image
          src="/Linkedin.svg"
          width={30}
          height={30}
          alt="Linkedin logo"
        ></Image>
      </div>
      <p className="copyright">Copyright ©2020 All rights reserved </p>
    </div>
  );
}
