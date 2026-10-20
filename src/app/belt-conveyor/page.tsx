import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readProductCategoryHtml } from "../page-html";

export const metadata = pageMetadata("belt-conveyor");

export default function Page() {
  const html: string = readProductCategoryHtml("belt");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
