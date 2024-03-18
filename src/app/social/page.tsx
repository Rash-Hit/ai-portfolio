import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My handles</H2>
        <p>I create reels sometimes in instagram related to singing ...</p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://github.com/Rash-Hit"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rrrashit"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rrrashit"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/anubhav.jain.92102"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCVZpTAhjieT1akYsWlXGZng"
              className="text-primary hover:underline"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anubhav-jain-rashit/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
    </section>
  );
}
