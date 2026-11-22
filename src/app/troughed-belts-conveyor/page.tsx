import { pageMetadata } from "../seo-data";
import { ConveyorDetailPage } from "../conveyor-detail-page";
import { CONVEYOR_DETAILS } from "../conveyor-detail-data";

export const metadata = pageMetadata("troughed-belts-conveyor");

export default function Page() {
  return <ConveyorDetailPage product={CONVEYOR_DETAILS.troughed} />;
}
