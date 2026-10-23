import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readSolutionPageHtml } from "../page-html";

export const metadata = pageMetadata("turn-key-solutions");

export default function Page() {
  const html: string = readSolutionPageHtml("turnkey");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
