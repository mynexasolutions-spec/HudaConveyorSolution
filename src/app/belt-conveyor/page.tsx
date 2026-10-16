import { LegacyScripts } from "../legacy-scripts";
import { readProductCategoryHtml } from "../page-html";

export default function Page() {
  const html: string = readProductCategoryHtml("belt");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
