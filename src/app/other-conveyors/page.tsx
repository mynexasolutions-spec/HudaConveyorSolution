import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readProductCategoryHtml } from "../page-html";

export const metadata = pageMetadata("other-conveyors");

export default function Page() {
  const html: string = readProductCategoryHtml("other");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
