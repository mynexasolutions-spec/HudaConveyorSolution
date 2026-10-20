import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readSolutionPageHtml } from "../page-html";

export const metadata = pageMetadata("waste-management-plant");

export default function Page() {
  const html: string = readSolutionPageHtml("waste-management");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
