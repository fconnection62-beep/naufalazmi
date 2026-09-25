import {
  ArrowRight,
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "Event Identity",
    icon: Sparkles,
    iconLabel: "Element Identity Design",
    title:
      "PLATINUM UNAMA 2023",
    description:
      "Developing the graphic elements and content for the event identity of Platinum UNAMA 2023, the new student orientation event at Universitas Dinamika Bangsa Jambi. Project deliverables include the event theme design, mascot creation, social media content, committee division logos, and motion graphics, etc.",
    meta: "Event Identity, 2023",
    imageRatio: 1024 / 768,
    image:
      "/platinum2023.webp",
    imageAlt: "Event Identity Project by Naufal Azmi for Platinum 2023 Unama Jambi",
  },
  {
    id: "Brand Identity",
    icon: Compass,
    iconLabel: "Brand Identity Guideline",
    title: "CIHUY TEA - TAUFUFA TEH THAI",
    description:
      "Designed the complete brand identity for Cihuy Tea, a Jambi-based MSME featuring unique Thai tea and taufufa beverages. Deliverables included logo design, wordmark, color palette, container booth rendering, merchandise, and social media marketing visuals, etc.",
    meta: "Brand Identity, 2026",
    imageRatio: 800 / 475,
    image:
      "/cihuytea.webp",
    imageAlt: "Brand Identity Guideline Project by Naufal Azmi for Cihuy Tea",
  },
  {
    id: "rhythm",
    icon: LineChart,
    iconLabel: "Rhythm",
    title: "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    description:
      "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    meta: "Founder & Designer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
    imageAlt: "Rhythm calm analytics mockup",
  },
  {
    id: "groove",
    icon: Wand2,
    iconLabel: "Groove",
    title:
      "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    description:
      "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    meta: "Lead Designer, 2023",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/43955214/file/original-d4cde1de803e84b97d8892e3444c04b0.png?resize=1024x768&vertical=center",
    imageAlt: "Groove music school booking flow mockup",
  },
  {
    id: "fieldnote",
    icon: Layers,
    iconLabel: "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    title:
      "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    description:
      "Capture quotes, tag patterns, and synthesize themes in one place. The interface stays out of the way so the thinking can happen.",
    meta: "Design Engineer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/30310902/file/original-621e7fe47be9d11ee14544456c693bec.png?resize=1024x768&vertical=center",
    imageAlt: "Fieldnote pocket sized research tool mockup",
  },
  {
    id: "talkback",
    icon: Bot,
    iconLabel: "Talkback",
    title: "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    description:
      "STILL UNDER WEB DEVELOPMENT PROGRESS.",
    meta: "Independent Project, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/16560717/file/original-c6f745d50302d66609bfe080f99f5396.png?resize=1024x768&vertical=center",
    imageAlt: "Talkback friendlier AI chat interface mockup",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
