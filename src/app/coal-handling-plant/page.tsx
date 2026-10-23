import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readSolutionPageHtml } from "../page-html";

export const metadata = pageMetadata("coal-handling-plant");

export default function Page() {
  const html: string = readSolutionPageHtml("coal-handling");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
