import { pageMetadata } from "../seo-data";
import { LegacyScripts } from "../legacy-scripts";
import { readPageHtml } from "../page-html";

export const metadata = pageMetadata("contact");

export default function Page() {
  const html: string = readPageHtml("_contact.html");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyScripts />
    </>
  );
}
