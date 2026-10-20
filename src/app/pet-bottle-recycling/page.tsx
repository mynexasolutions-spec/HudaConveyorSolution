import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readSolutionPageHtml } from "../page-html";

export const metadata = pageMetadata("pet-bottle-recycling");

export default function Page() {
  const html: string = readSolutionPageHtml("pet-recycling");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
