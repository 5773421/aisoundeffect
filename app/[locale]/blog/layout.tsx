import { Suspense } from "react";
import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }: { children: any }) {
  return (
    <div>
      {/* <Suspense>
        <HeaderBlog />
      </Suspense> */}

      <div className="min-h-screen max-w-6xl mx-auto p-8">{children}</div>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
