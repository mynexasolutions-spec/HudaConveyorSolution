import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readStaticPageHtml } from "../page-html";

export const metadata = pageMetadata("inverted-floor-conveyours-towline");

export default function Page() {
  const html: string = readStaticPageHtml("_inverted-floor-conveyours-towline.html");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
