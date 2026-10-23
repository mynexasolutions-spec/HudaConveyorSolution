import { pageMetadata } from "./seo-data";
import { LegacyScripts } from "./legacy-scripts";
import { readPageHtml } from "./page-html";

export const metadata = pageMetadata("");

export default function Page() {
  const html: string = readPageHtml("_body.html");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
