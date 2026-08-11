import { ConfessionClient } from "@/components/confession/ConfessionClient";
import appDataJson from "@/data/confession/adults/katolis-lv/sirdsapzinas-izmeklesana.json";
import pdfDataJson from "@/data/confession/adults/katolis-lv/greksudze.json";
import type {
  ConfessionAppData,
  ConfessionPdfData,
} from "@/lib/confession-types";

const appData = appDataJson as ConfessionAppData;
const pdfData = pdfDataJson as ConfessionPdfData;

export default function KatolisLvConfessionPage() {
  return (
    <ConfessionClient
      appData={appData}
      pdfData={pdfData}
      storageKey="greksudze-confession-adults-katolis-lv"
      versionLabel="No katolis.lv"
    />
  );
}
