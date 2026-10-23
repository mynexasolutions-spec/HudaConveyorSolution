import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readStaticPageHtml } from "../page-html";

export const metadata = pageMetadata("vertical-chain-conveyor");

export default function Page() {
  const html: string = readStaticPageHtml("_vertical-chain-conveyor.html");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
