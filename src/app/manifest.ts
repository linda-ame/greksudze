import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grēksūdze",
    short_name: "Grēksūdze",
    description:
      "Palīgs sirdsapziņas izmeklēšanai — dati paliek tikai Tavā ierīcē.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef3f7",
    theme_color: "#2a3544",
    lang: "lv",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/192",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
