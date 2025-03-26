import { GetStaticPaths, GetStaticProps } from "next";

const projects = {
  "projeto-a": [
    "/images/projeto-a-1.jpg",
    "/images/projeto-a-2.jpg",
    "/images/projeto-a-3.jpg",
  ],
  "projeto-b": [
    "/images/projeto-b-1.jpg",
    "/images/projeto-b-2.jpg",
    "/images/projeto-b-3.jpg",
  ],
};

interface ProjectPageProps {
  slug: string;
  images: string[];
}

export default function ProjectPage({ slug, images }: ProjectPageProps) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projeto: {slug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index + 1}`} className="rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projects).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  return {
    props: {
      slug,
      images: projects[slug] || [],
    },
  };
};