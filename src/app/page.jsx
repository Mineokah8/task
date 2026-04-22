import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import Card from "@/components/ui/Card";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <h1 className="mb-6 text-3xl font-bold text-slate-900">
            Reusable Components
          </h1>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Card
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              title="Frontend Development"
              description="Learn how to build clean and reusable interfaces with React, Next.js, and Tailwind CSS."
              buttonText="Read More"
            />

            <Card
              image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              title="Component Design"
              description="Understand props, composition, and how to structure reusable UI elements properly."
              buttonText="Explore"
            />

            <Card
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              title="Responsive Layouts"
              description="Practice using flexbox, grid, spacing, and utility classes to create modern layouts."
              buttonText="Start Now"
            />
          </div>
        </section>
      </div>
    </main>
  );
}