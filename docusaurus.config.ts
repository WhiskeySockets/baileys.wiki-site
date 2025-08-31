import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Baileys',
  tagline: 'Documentation & guide for the Baileys library. Baileys is a WebSockets library for interacting with WhatsApp Web',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://baileys.wiki/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WhiskeySockets', // Usually your GitHub org/user name.
  projectName: 'baileys.wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/WhiskeySockets/baileys.wiki-site/tree/main/',
            remarkPlugins: [
              [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
            ],
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        // Disabled for now (later should include release notes and updates)
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // TODO: Add Algolia Search / AI searching solution

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social_card.jpg',
    navbar: {
      title: 'Baileys',
      logo: {
         alt: 'WhiskeySo ckets Logo',
         src: 'img/WhiskeySockets-colorful.png',
         style: {
           transform: "scale(1.25)",
           padding: "0 0.5rem"
         }
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'refSidebar',
          position: 'left',
          label: 'API Reference',
        },
        /*{
          href: "https://protococktail.whiskeysockets.org", // TODO: change to whiskey.so URL
          position: "left",
          label: "ProtoCocktail",
          },*/
        {
          to: "https://purpshell.dev/sponsor", // TODO: change to Sponsor/contribution guide page
          target: "_blank",
          position: "right",
          className: "header-sponsor-link",
          "aria-label": "Sponsor",
          title: "Sponsor",
          label: "Sponsor"
        },
        {
          to: "https://whiskey.so/discord",
          target: "_blank",
          position: "right",
          className: "header-discord-link",
          "aria-label": "Discord",
          title: "Discord",
          label: "Discord"
        },
        {
          to: "https://github.com/WhiskeySockets/Baileys",
          target: "_blank",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",

          title: "GitHub",
          label: "GitHub"
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        src: '/img/Written-By-Human-Not-By-AI-Badge-white.svg'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/WhiskeySockets/Baileys',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rajeh Taher, WhiskeySockets.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
