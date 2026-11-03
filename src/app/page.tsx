import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

function WorkExperience() {
  return (
    <Section>
      <h2 className="text-xl font-bold">Work Experience</h2>
      {RESUME_DATA.work.map((work) => (
        <Card key={work.company} className="resume-job">
          <CardHeader>
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-base">
              <h3 className="inline-flex flex-wrap items-center gap-1 font-semibold leading-snug">
                {work.link ? (
                  <a className="hover:underline" href={work.link}>
                    {work.company}
                  </a>
                ) : (
                  work.company
                )}

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
            <ul className="list-disc space-y-1.5 pl-4">
              {work.description.split("\n").map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}

export default function Page() {
  return (
    <main className="resume container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="resume-content mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="resume-header flex items-start justify-between gap-4">
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
                    aria-label="Email Anil"
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
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    aria-label="Call Anil"
                  >
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
              {RESUME_DATA.contact.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-x-1"
                >
                  <social.icon className="size-4" />
                  <span className="underline">
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

          <Avatar
            className="size-16 shrink-0 sm:size-28"
            aria-label={RESUME_DATA.name}
          >
            {RESUME_DATA.avatarUrl ? (
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatarUrl}
                className="object-cover object-[55%_25%]"
              />
            ) : null}
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
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="shrink-0 text-sm tabular-nums text-gray-500">
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
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="resume-skills flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Technical Skills</h2>
          <div className="resume-skills flex flex-wrap gap-1">
            {RESUME_DATA.technicalSkills.map((skill) => (
              <Badge className="print:text-[10px]" key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <WorkExperience />
        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">Languages</h2>
          <ul className="space-y-1 font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.languages.map((language) => (
              <li key={language.name}>
                <span className="font-semibold text-foreground">
                  {language.name}
                </span>
                {" — "}
                {language.proficiency}
              </li>
            ))}
          </ul>
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
        ].filter((link) => link.url)}
      />
    </main>
  );
}
