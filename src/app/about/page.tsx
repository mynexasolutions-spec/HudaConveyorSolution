import { LegacyScripts } from "../legacy-scripts";
import { readPageHtml } from "../page-html";

export default function AboutPage() {
  const html: string = readPageHtml("_about.html");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
