import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MayDayVPN",
  description: "Быстрый и надежный VPN сервис",
  themeConfig: {
    siteTitle: "MayDayVPN",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      { text: "Скачать", link: "/download" },
      { text: "Поддержка", link: "/support" },
    ],

    sidebar: [
      {
        text: "MayDayVPN",
        items: [
          { text: "Главная", link: "/" },
          { text: "Скачать", link: "/download" },
          { text: "Поддержка", link: "/support" },
        ],
      },
    ],

    socialLinks: [{ icon: "message", link: "https://t.me/dzhanavapp" }],
  },
});
