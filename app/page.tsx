"use client";

import Navigation from "./components/navigation";
import Header from "./components/header";
import RecentPosts from "./components/recent";
import FeaturedPosts from "./components/featured";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="main">
      <Navigation />
      <Header />
      <RecentPosts />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
