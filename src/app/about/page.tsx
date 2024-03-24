import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Florian Walther and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Anubhav Jain and I am a software developer from India. I
          started web development in 2021. Initially I worked as an intern for a
          backend Node.js developer and then as a full-time for the role of
          fresher full stack developer till Jan 2024. And recently i started
          doing open source contributions as well.
        </p>
        <p className="mt-2">
          - I&apos;m passionate about building cool apps and websites and I am a
          singer as well.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Projects </H2>
        <p>
          {" "}
          To expand my skillset and showcase my abilities, I create and deploy
          projects using the latest tools and frameworks.
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://video-calling-app-next-js.vercel.app/"
              className="text-primary hover:underline"
            >
              Video Calling App
            </a>{" "}
            - End to End Video Calling application.
          </li>
          <li>
            <Link
              href="https://job-board-using-next-js.vercel.app/"
              className="text-primary hover:underline"
            >
              Job Board
            </Link>{" "}
            - Platform for Jobs
          </li>

          <li>
            <Link
              href="https://gpt3-quote-generator-nextjs.vercel.app/"
              className="text-primary hover:underline"
            >
              Dialogue Finder (Fun Project)
            </Link>{" "}
            - Will Give Bollywood Dialogues
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides <b> programming, </b> one of my greatest passions is{" "}
          <b> singing </b>. It&apos;s more than just a hobby; it&apos;s an
          essential part of my life that brings me joy and promotes mental
          well-being. I often create reels to showcase my vocal abilities and
          share my love for music with others. In addition to singing, I enjoy{" "}
          <b> reading </b> and <b> exploring the outdoors </b> to maintain a
          healthy work-life balance.
        </p>

        <p>
          I&apos;m also deeply interested in{" "}
          <b> self-improvement and psychology </b>, using my understanding of
          human behavior to drive personal and professional growth.
        </p>
      </section>
    </section>
  );
}
