import { ConfessionClient } from "@/components/confession/ConfessionClient";
import appDataJson from "@/data/confession/children/sirdsapzinas-izmeklesana.json";
import pdfDataJson from "@/data/confession/children/greksudze.json";
import type {
  ConfessionAppData,
  ConfessionPdfData,
} from "@/lib/confession-types";

const appData = appDataJson as ConfessionAppData;
const pdfData = pdfDataJson as ConfessionPdfData;

export default function ChildrenConfessionPage() {
  return (
    <ConfessionClient
      appData={appData}
      pdfData={pdfData}
      storageKey="greksudze-confession-children"
      versionLabel="Jaunākā vecuma bērni"
      questionsHeading="Vai tas attiecas uz mani?"
      theme="children"
    />
  );
}
