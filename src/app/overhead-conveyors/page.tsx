import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readProductCategoryHtml } from "../page-html";

export const metadata = pageMetadata("overhead-conveyors");

export default function Page() {
  const html: string = readProductCategoryHtml("overhead");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
