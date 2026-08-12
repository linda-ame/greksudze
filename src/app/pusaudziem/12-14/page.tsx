import { ConfessionClient } from "@/components/confession/ConfessionClient";
import appDataJson from "@/data/confession/teens/12-14/sirdsapzinas-izmeklesana.json";
import pdfDataJson from "@/data/confession/teens/12-14/greksudze.json";
import type {
  ConfessionAppData,
  ConfessionPdfData,
} from "@/lib/confession-types";

const appData = appDataJson as ConfessionAppData;
const pdfData = pdfDataJson as ConfessionPdfData;

export default function Teens1214Page() {
  return (
    <ConfessionClient
      appData={appData}
      pdfData={pdfData}
      storageKey="greksudze-confession-teens-12-14"
      versionLabel="12–14 gadiem"
      theme="teens-young"
    />
  );
}
