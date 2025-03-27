import { notFound } from "next/navigation";
import ProjectComponent from "@/components/ProjectComponent";
import Logo from "@/components/Logo";
import Footer from "@/sections/Footer";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const validProjects = ["projeto-a", "projeto-b", "projeto-c"];

  if (!validProjects.includes(params.slug)) {
    return notFound();
  }

  return (
    <>
      <Logo />
      <ProjectComponent slug={params.slug} />
      <Footer />
    </>
  );
}