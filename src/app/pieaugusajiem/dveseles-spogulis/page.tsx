import { ConfessionClient } from "@/components/confession/ConfessionClient";
import appDataJson from "@/data/confession/adults/dveseles-spogulis/sirdsapzinas-izmeklesana.json";
import pdfDataJson from "@/data/confession/adults/dveseles-spogulis/greksudze.json";
import type {
  ConfessionAppData,
  ConfessionPdfData,
} from "@/lib/confession-types";

const appData = appDataJson as ConfessionAppData;
const pdfData = pdfDataJson as ConfessionPdfData;

export default function DveselesSpogulisPage() {
  return (
    <ConfessionClient
      appData={appData}
      pdfData={pdfData}
      storageKey="greksudze-confession-adults-dveseles-spogulis"
      versionLabel="Dvēseles spogulis"
    />
  );
}
