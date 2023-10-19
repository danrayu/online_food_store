"use client";
import { useEffect } from "react";
import { AuthContextProvider } from "@/store/auth-context";
import Header from "./components/page/Header";
import Body from "./components/page/Body";
import Footer from "./components/page/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return (
    <AuthContextProvider>
      <main>
        <div>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </div>
      </main>
    </AuthContextProvider>
  );
}
