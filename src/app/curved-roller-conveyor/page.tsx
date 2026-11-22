import { pageMetadata } from "../seo-data";
import { ConveyorDetailPage } from "../conveyor-detail-page";
import { CONVEYOR_DETAILS } from "../conveyor-detail-data";

export const metadata = pageMetadata("curved-roller-conveyor");

export default function Page() {
  return <ConveyorDetailPage product={CONVEYOR_DETAILS.curvedroller} />;
}
