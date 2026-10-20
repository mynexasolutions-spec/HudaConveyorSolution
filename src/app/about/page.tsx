import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readPageHtml } from "../page-html";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  const html: string = readPageHtml("_about.html");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
