export const gameConsoles: {
  key: string;
  time: string;
  url: string;
  solds: number | string;
  topgame_url: string;
  topgame_solds: number | string;
}[] = [
  {
    key: "Famicom", // next-intl で翻訳を探すためのキー
    time: "1983",
    url: "/images/famicom.png",
    solds: 6191,
    topgame_url: "/images/games/super_mario_bros.png",
    topgame_solds: 4024,
  },
  {
    key: "SuperFamicom",
    time: "1990",
    url: "/images/super_famicom.png",
    solds: 4910,
    topgame_url: "/images/games/super_mario_world.jpg",
    topgame_solds: 2061,
  },
  {
    key: "Nintendo64",
    time: "1996",
    url: "/images/n64.png",
    solds: 3293,
    topgame_url: "/images/games/super_mario_64.jpg",
    topgame_solds: 1191,
  },
  {
    key: "GameCube",
    time: "2001",
    url: "/images/game_cube.png",
    solds: 2174,
    topgame_url: "/images/games/super_smash_bros_dx.webp",
    topgame_solds: 738,
  },
  {
    key: "Wii",
    time: "2006",
    url: "/images/wii.webp",
    solds: 10163,
    topgame_url: "/images/games/wii_sports.webp",
    topgame_solds: 8287,
  },
  {
    key: "WiiU",
    time: "2012",
    url: "/images/wii_u.webp",
    solds: 1356,
    topgame_url: "/images/games/mario_kart_8.jpg",
    topgame_solds: 846,
  },
  {
    key: "Switch",
    time: "2017",
    url: "/images/switch.png",
    solds: 14604,
    topgame_url: "/images/games/mario_kart_8_dx.webp",
    topgame_solds: 6427,
  },
  {
    key: "Switch2",
    time: "2025",
    url: "/images/switch2.webp",
    solds: "???",
    topgame_url: "/images/games/coming_soon.png",
    topgame_solds: "???",
  },
];
