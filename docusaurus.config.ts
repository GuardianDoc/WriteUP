import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JTZ',
  tagline: '',
  favicon: 'img/favicon.jpg',

  // Set the production url of your site here
  url: 'https://guardian-jtz.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JTZ', // Usually your GitHub org/user name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'plugin-image-zoom',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'JTZ',
      logo: {
        alt: 'JTZ Logo',
        src: 'img/favicon.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'boxSidebar',
          position: 'left',
          label: 'Box',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ctfSidebar',
          position: 'left',
          label: 'CTF',
        },
        {
          type: 'docSidebar',
          sidebarId: 'helpSidebar',
          position: 'left',
          label: 'Help',
        },
        {to: '/docs/tags/', label: 'Tags', position: 'right'},
        // {to: '/docs/intro', label: '关于我', position: 'right'},
        {
          label: 'MISC',
          position: 'right',
          items: [
            {
              href: 'https://pan.baidu.com/s/1PNvMPQsc-F70Lyk7ZNsRrA?pwd=f228',
              label: '资源',
            }
          ]
        },
        {
          href: 'https://github.com/Guardian-JTZ',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
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
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
