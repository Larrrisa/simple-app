import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, I am John, Creative Technologist</h1>
        <p className="text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button>Download Resume</button>
      </div>
      <Image
        src="/avatar.png"
        width={243}
        height={243}
        alt="Picture of the author"
      ></Image>
    </div>
  );
}
