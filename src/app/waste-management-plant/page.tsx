import { LegacyScripts } from "../legacy-scripts";
import { readSolutionPageHtml } from "../page-html";

export default function Page() {
  const html: string = readSolutionPageHtml("waste-management");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
