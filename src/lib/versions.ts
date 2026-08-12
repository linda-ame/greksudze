export type AgeVersionId = "children" | "teens" | "adults";

export type AgeVersion = {
  id: AgeVersionId;
  title: string;
  subtitle: string;
  href: string | null;
  available: boolean;
};

export type ContentVersion = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  available: boolean;
};

export const AGE_VERSIONS: AgeVersion[] = [
  {
    id: "children",
    title: "Jaunākā vecuma bērniem",
    subtitle: "Līdz apmēram 11 gadiem",
    href: "/berniem",
    available: true,
  },
  {
    id: "teens",
    title: "Pusaudžiem no 12 gadiem",
    subtitle: "Versijas 12–14 un 15–18 gadiem",
    href: "/pusaudziem",
    available: true,
  },
  {
    id: "adults",
    title: "Pieaugušajiem",
    subtitle: "Vairākas versijas pieaugušo sagatavošanai",
    href: "/pieaugusajiem",
    available: true,
  },
];

export const TEEN_VERSIONS: ContentVersion[] = [
  {
    id: "12-14",
    title: "12–14 gadiem",
    subtitle: "Sirdsapziņas izmeklēšana jaunākiem pusaudžiem",
    href: "/pusaudziem/12-14",
    available: true,
  },
  {
    id: "15-18",
    title: "15–18 gadiem",
    subtitle: "Sirdsapziņas izmeklēšana vecākiem pusaudžiem",
    href: "/pusaudziem/15-18",
    available: true,
  },
];

export const ADULT_VERSIONS: ContentVersion[] = [
  {
    id: "katolis-lv",
    title: "No katolis.lv",
    subtitle: "Sirdsapziņas izmeklēšana pēc katolis.lv materiāla",
    href: "/pieaugusajiem/katolis-lv",
    available: true,
  },
  {
    id: "dveseles-spogulis",
    title: "Dvēseles spogulis",
    subtitle: "No LELB Baznīcas gadagrāmatas",
    href: "/pieaugusajiem/dveseles-spogulis",
    available: true,
  },
];

/** Concrete examination routes that can be resumed from the home-screen app. */
export const CONTENT_VERSION_HREFS: string[] = [
  "/berniem",
  ...TEEN_VERSIONS.map((v) => v.href),
  ...ADULT_VERSIONS.filter((v) => v.available).map((v) => v.href),
];
