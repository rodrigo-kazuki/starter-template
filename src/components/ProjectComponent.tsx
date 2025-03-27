import Image from "next/image";

const projectImages: Record<string, string> = {
  "projeto-a": "/images/projeto-a.jpg",
  "projeto-b": "/images/projeto-b.jpg",
  "projeto-c": "/images/projeto-c.jpg",
};

export default function ProjectComponent({ slug }: { slug: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Imagens do {slug}</h2>
      <Image
        src={projectImages[slug] || "/images/default.jpg"}
        alt={`Imagem de ${slug}`}
        width={600}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}