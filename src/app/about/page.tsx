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
          My name is Anubhav Jain and I am a self-taught software developer from
          India. I started web development in 2021. Initially I worked as an
          intern for a backend Node.js developer and then as a full-time for the
          role of fresher full stack developer.And recently i started doing open
          source contributions as well
        </p>
        <p>
          I&apos;m passionate about building cool apps and websites and I love
          singing as well.
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
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love singing. I make reels for showcasing my
          singing skills.I also enjoy reading books and going out sometimes. I
          think having hobbies other than coding is important for mental health.
        </p>
        <p>I&apos;m also very much into self-improvement, and human mind.</p>
      </section>
    </section>
  );
}
