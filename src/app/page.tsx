import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    aria-label="Email Ozcan"
                  >
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} aria-label={social.name}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.social
                .filter((social) => social.name !== "Medium")
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center gap-x-1"
                  >
                    <social.icon className="size-3 shrink-0" />
                    <span className="break-all underline">
                      {social.url.replace(/^https:\/\/(www\.)?/, "")}
                    </span>
                  </a>
                ))}
              {RESUME_DATA.contact.email ? (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="flex flex-row items-center gap-x-1"
                >
                  <MailIcon className="size-4" />
                  <span className="underline">
                    {" "}
                    {RESUME_DATA.contact.email}{" "}
                  </span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  className="flex flex-row items-center gap-x-1"
                >
                  <PhoneIcon className="size-4" />
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-16 shrink-0 sm:size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Professional Summary</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="print:break-inside-avoid">
                <CardHeader>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-base">
                    <h3 className="inline-flex flex-wrap items-center gap-1 font-semibold leading-snug">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="shrink-0 text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[10px]">
                  <ul className="list-disc space-y-1 pl-4">
                    {work.description.split("\n").map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="print:break-before-page print:break-inside-avoid">
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="print:break-inside-avoid">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="space-y-3 print:space-y-1.5">
            {RESUME_DATA.skillGroups.map((group) => (
              <div key={group.name} className="print:break-inside-avoid">
                <h3 className="mb-1 text-sm font-semibold print:text-[11px]">
                  {group.name}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground print:text-[10px]">
                  {group.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Selected Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2 print:gap-2">
            {RESUME_DATA.projects
              .filter((project) =>
                RESUME_DATA.featuredProjectTitles.some(
                  (title) => title === project.title,
                ),
              )
              .map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                );
              })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
