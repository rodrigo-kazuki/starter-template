import { notFound } from "next/navigation";
import ProjectComponent from "@/components/ProjectComponent";

export default function ProjectPage({ params }: { params: Record<string, string> }) {
  const validProjects = ["projeto-a", "projeto-b", "projeto-c"];

  if (!validProjects.includes(params.slug)) {
    return notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Projeto</h1>
      <ProjectComponent slug={params.slug} />
    </div>
  );
}