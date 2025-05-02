export const SITE = {
  website: "https://sioneus.me/", // replace this with your deployed domain
  author: "Sion",
  profile: "https://sioneus.me/",
  desc: "A personal portfolio of all my speedrun notes",
  title: "Sion's Runs",
  ogImage: "paper-og.png",
  lightAndDarkMode: true,
  postPerIndex: 7,
  postPerPage: 7,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    url: "https://github.com/mbcsalmeida/MegatenNotesWebsite/edit/dev/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
