import IconTwitch from "@/assets/icons/IconTwitch.svg";
import IconYoutube from "@/assets/icons/IconYoutube.svg";
import { SITE } from "@/config";

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
  {
    name: "Youtube",
    href: "https://youtube.com/@speedrunmegaten",
    linkTitle: `Sion on Youtube`,
    icon: IconYoutube,
  },
  {
    name: "Twitch",
    href: "https://twitch.com/sioneus",
    linkTitle: `sioneus on Twitch`,
    icon: IconTwitch,
  },
] as const;

export const SHARE_LINKS = [
  
] as const;
