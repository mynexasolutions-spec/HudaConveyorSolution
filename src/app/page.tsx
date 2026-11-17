import { pageMetadata } from "./seo-data";
import { HomePage } from "./home-page";

export const metadata = pageMetadata("");

export default function Page() {
  return <HomePage />;
}
