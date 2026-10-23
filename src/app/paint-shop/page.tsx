import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readSolutionPageHtml } from "../page-html";

export const metadata = pageMetadata("paint-shop");

export default function Page() {
  const html: string = readSolutionPageHtml("paint-shop");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
