import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readProductCategoryHtml } from "../page-html";

export const metadata = pageMetadata("sprockets-and-spare-parts");

export default function Page() {
  const html: string = readProductCategoryHtml("sprockets-spare-parts");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <LegacyScripts />
    </>
  );
}
