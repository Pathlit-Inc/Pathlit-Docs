import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Pathlit-Docs/blog',
    component: ComponentCreator('/Pathlit-Docs/blog', '087'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/archive',
    component: ComponentCreator('/Pathlit-Docs/blog/archive', '824'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/first-blog-post',
    component: ComponentCreator('/Pathlit-Docs/blog/first-blog-post', '59c'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/long-blog-post',
    component: ComponentCreator('/Pathlit-Docs/blog/long-blog-post', '091'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/mdx-blog-post',
    component: ComponentCreator('/Pathlit-Docs/blog/mdx-blog-post', '8d5'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/tags',
    component: ComponentCreator('/Pathlit-Docs/blog/tags', '766'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/tags/docusaurus',
    component: ComponentCreator('/Pathlit-Docs/blog/tags/docusaurus', 'e9d'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/tags/facebook',
    component: ComponentCreator('/Pathlit-Docs/blog/tags/facebook', '09c'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/tags/hello',
    component: ComponentCreator('/Pathlit-Docs/blog/tags/hello', '739'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/tags/hola',
    component: ComponentCreator('/Pathlit-Docs/blog/tags/hola', '56f'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/blog/welcome',
    component: ComponentCreator('/Pathlit-Docs/blog/welcome', 'df3'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/markdown-page',
    component: ComponentCreator('/Pathlit-Docs/markdown-page', '132'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/my-react-page',
    component: ComponentCreator('/Pathlit-Docs/my-react-page', '345'),
    exact: true
  },
  {
    path: '/Pathlit-Docs/docs',
    component: ComponentCreator('/Pathlit-Docs/docs', 'b11'),
    routes: [
      {
        path: '/Pathlit-Docs/docs',
        component: ComponentCreator('/Pathlit-Docs/docs', '654'),
        routes: [
          {
            path: '/Pathlit-Docs/docs',
            component: ComponentCreator('/Pathlit-Docs/docs', '57d'),
            routes: [
              {
                path: '/Pathlit-Docs/docs/category/chat-ui',
                component: ComponentCreator('/Pathlit-Docs/docs/category/chat-ui', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/category/evaluation',
                component: ComponentCreator('/Pathlit-Docs/docs/category/evaluation', 'd4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/category/getting-started',
                component: ComponentCreator('/Pathlit-Docs/docs/category/getting-started', 'f7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/category/settings',
                component: ComponentCreator('/Pathlit-Docs/docs/category/settings', '83c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/category/workflows',
                component: ComponentCreator('/Pathlit-Docs/docs/category/workflows', 'f89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Chat UI/Models',
                component: ComponentCreator('/Pathlit-Docs/docs/Chat UI/Models', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Chat UI/Settings/Advanced Settings',
                component: ComponentCreator('/Pathlit-Docs/docs/Chat UI/Settings/Advanced Settings', '4a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Chat UI/Settings/Basic Settings',
                component: ComponentCreator('/Pathlit-Docs/docs/Chat UI/Settings/Basic Settings', '663'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Chat UI/What is Chat UI',
                component: ComponentCreator('/Pathlit-Docs/docs/Chat UI/What is Chat UI', '9c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Evaluation',
                component: ComponentCreator('/Pathlit-Docs/docs/Evaluation', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Getting Started/Installation',
                component: ComponentCreator('/Pathlit-Docs/docs/Getting Started/Installation', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Getting Started/Starting The App',
                component: ComponentCreator('/Pathlit-Docs/docs/Getting Started/Starting The App', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/intro',
                component: ComponentCreator('/Pathlit-Docs/docs/intro', '8f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pathlit-Docs/docs/Workflows/Workflow',
                component: ComponentCreator('/Pathlit-Docs/docs/Workflows/Workflow', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Pathlit-Docs/',
    component: ComponentCreator('/Pathlit-Docs/', '465'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
