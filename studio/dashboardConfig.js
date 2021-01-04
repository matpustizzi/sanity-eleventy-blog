export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff3747b9095fb00b4bc1824',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ts1n7iq5',
                  apiId: '7787ce41-4bc3-410e-b4c2-d7ff2586cc01'
                },
                {
                  buildHookId: '5ff3747bd159f401074aa594',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4n6fyxcb',
                  apiId: '75f5abd9-9342-402d-b2e6-f67b2236391e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matpustizzi/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4n6fyxcb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
