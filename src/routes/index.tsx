import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  About,
  VisionMission,
  Programs,
  Roadmap,
  WhyUs,
  FAQ,
  Registration,
  Contact,

} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YUKI Future Japan — LPK Bahasa Jepang Profesional" },
      {
        name: "description",
        content:
          "YUKI Future Japan adalah LPK Bahasa Jepang yang mempersiapkan generasi muda Indonesia untuk pendidikan dan karier di Jepang dengan kurikulum terstruktur dan disiplin profesional.",
      },
      { property: "og:title", content: "YUKI Future Japan — LPK Bahasa Jepang Profesional" },
      {
        property: "og:description",
        content:
          "Belajar Bahasa Jepang, wujudkan masa depanmu di Jepang bersama YUKI Future Japan.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Programs />
        <Roadmap />
        <WhyUs />

        <FAQ />
        <Registration />
        <Contact />
      </main>
    </div>
  );
}
