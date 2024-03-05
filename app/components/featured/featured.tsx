import Link from "next/link";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="featured__main">
      <div className="recent__header">
        <h2>Featured works</h2>
      </div>
      <div className="featured__works">
        <div className="featured__work">
          <Image
            src="/Designing-Dashboards.png"
            width={246}
            height={180}
            alt="Designing Dashboards"
          ></Image>
          <div className="content">
            <p className="featured__heading">Designing Dashboards</p>

            <div className="featured__info">
              <span className="year">2020</span>
              <span className="featured__tag">Dashboard</span>
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
        <div className="featured__work">
          <Image
            src="/Vibrant-Portraits-of-2020.png"
            width={246}
            height={180}
            alt="Designing Dashboards"
          ></Image>
          <div className="content">
            <p className="featured__heading">Vibrant Portraits of 2020</p>

            <div className="featured__info">
              <span className="year">2018</span>
              <span className="featured__tag">Illustration</span>
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
        <div className="featured__work">
          <Image
            src="/36-Days-of-Malayalam-type.png"
            width={246}
            height={180}
            alt="Designing Dashboards"
          ></Image>
          <div className="content">
            <p className="featured__heading">36 Days of Malayalam type</p>

            <div className="featured__info">
              <span className="year">2018</span>
              <span className="featured__tag">Typography</span>
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
    </div>
  );
}
