import { json } from "@remix-run/node";

export function loader() {
  const getStartedAPI = {
    data: {
      id: 1,
      attributes: {
        Title: "Join our community",
        subTitle:
          "Get an insight from other users about MyFundedFX and their experiences. 8K+ members and counting",
        discordLink: "https://discord.gg/Zd8FVT9uSH",
        createdAt: "2023-04-11T19:53:10.354Z",
        updatedAt: "2023-04-11T19:53:12.213Z",
        publishedAt: "2023-04-11T19:53:12.209Z",
        coverImageUrl: null,
      },
    },
  };

  return json(getStartedAPI);
}
