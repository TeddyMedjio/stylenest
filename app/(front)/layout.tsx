import Footer from "../../components/Footer";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-5 md:px-20  bg-blanc rounded-lg shadow-md space-y-5 mt-10 md:w-[90%] max-w-[1440px] mx-auto py-20">
      {children}
      <Footer />
    </main>
  );
}
