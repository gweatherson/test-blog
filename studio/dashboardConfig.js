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
                  buildHookId: '5f46b1498acdfb2ec36ea848',
                  title: 'Sanity Studio',
                  name: 'test-blog-studio-1e11z8fk',
                  apiId: '0eb749fb-d399-4afb-8841-a5842ac7db67'
                },
                {
                  buildHookId: '5f46b14918ad32631348c3ab',
                  title: 'Blog Website',
                  name: 'test-blog-web-9i575un9',
                  apiId: '450447ec-bcc0-4ad8-8c4d-c489ee30bde7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gweatherson/test-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-blog-web-9i575un9.netlify.app', category: 'apps'}
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
