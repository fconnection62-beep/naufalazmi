import type { ReactNode } from "react";

type Entry = {
  degree: string;
  school: string;
  period: string;
  logo?: string;
};

const ENTRIES: Entry[] = [
  {
    degree: "Masters Degree, Information Systems",
    school: "Dinamika Bangsa University",
    period: "2025 – Present",
    logo: "/logo unama.webp"
  },
  {
    degree: "Bachelors Degree, Information Systems",
    school: "Dinamika Bangsa University",
    period: "2020 - 2025",
    logo: "/logo unama.webp"
  },
  {
    degree: "Natural Sciences Major",
    school: "State Senior High School 4 Jambi City",
    period: "2019",
    logo: "/SMA.webp"
  },
];

const ROW_HEIGHT = 64;

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Education
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.degree}-${entry.period}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <SchoolLogo entry={entry} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.degree}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.school}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.period}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.school.charAt(0);
  return (
    <span
      className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border"
      aria-hidden="true"
      style={{ borderRadius: 14 }}
    >
      {entry.logo ? (
        <img
          src={entry.logo}
          alt={'Logo ${entry.school'}
          width={48}
          height={48}
          className="h-full w-full object-contain"
          draggable={false}
        />
      ) : (
        <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
          {initials}
        </span>
      )}
    </span>
  );
}
