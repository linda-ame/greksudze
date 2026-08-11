import { ConfessionClient } from "@/components/confession/ConfessionClient";
import appDataJson from "@/data/confession/teens/15-18/sirdsapzinas-izmeklesana.json";
import pdfDataJson from "@/data/confession/teens/15-18/greksudze.json";
import type {
  ConfessionAppData,
  ConfessionPdfData,
} from "@/lib/confession-types";

const appData = appDataJson as ConfessionAppData;
const pdfData = pdfDataJson as ConfessionPdfData;

export default function Teens1518Page() {
  return (
    <ConfessionClient
      appData={appData}
      pdfData={pdfData}
      storageKey="greksudze-confession-teens-15-18"
      versionLabel="Pusaudžiem 15–18"
    />
  );
}
