import Link from "next/link";

export default function Recent() {
  return (
    <div className="recent__main">
      <div className="recent__header">
        <h2>Recent posts</h2>
        <Link href="#" className="recent__header__link">
          View all
        </Link>
      </div>
      <div className="recent__posts">
        <div className="recent__post">
          <p className="recent__heading">Making a design system from scratch</p>
          <div className="recent__date">
            <span className="date">12 Feb 2020</span>
            <span>|</span>
            <span className="tag">Design, Pattern</span>
          </div>
          <div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="recent__post">
          <p className="recent__heading">
            Creating pixel perfect icons in Figma
          </p>
          <div className="recent__date">
            <span className="date">12 Feb 2020</span>
            <span>|</span>
            <span className="tag">Figma, Icon Design</span>
          </div>
          <div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
