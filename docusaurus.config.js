const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PolygonMesh',
  tagline: 'A design system by Polygon Technology',
  url: 'https://maticnetwork.github.io/',
  baseUrl: '/polygonmesh/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maticnetwork', // Usually your GitHub org/user name.
  projectName: 'polygonmesh', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PolygonMesh',
      logo: {
        alt: 'Polygon Mesh Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/maticnetwork/polygonmesh',
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
              label: 'CSS Library Tutorial',
              to: '/docs/css-library/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/0xPolygon',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/polygon',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/maticnetwork/polygonmesh',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polygon Technology.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            `https://github.com/maticnetwork/polygonmesh/edit/docs`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
