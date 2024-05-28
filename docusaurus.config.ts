import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JTZ',
  tagline: '',
  favicon: 'img/favicon.jpg',

  // Set the production url of your site here
  url: 'https://writeup.guardian-jtz.top/',
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
          admonitions: {
            keywords: ['question', 'podcast', 'newsletter', 'book'],
            extendDefaults: true,
          },
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
          label: '📦 Box',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ctfSidebar',
          position: 'left',
          label: 'CTF',
        },
        {
          type: 'docSidebar',
          sidebarId: 'studySidebar',
          position: 'left',
          label: '漏洞研究',
        },
        // {to: '/docs/intro', label: '关于我', position: 'right'},
        {
          label: 'Blog',
          position: 'right',
          items: [
            {
              to: '/docs/tags/',
              label: 'Tags',
            },{
              to: 'https://blog.guardian-jtz.top/',
              label: '主站',
            }
          ]
        },
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
      additionalLanguages: [
        'java',
        'bash',
        'TypeScript',
        'Go',
      ],
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
