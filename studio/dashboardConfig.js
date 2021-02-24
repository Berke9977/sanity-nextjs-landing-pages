export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6036d904ddac4338c6c7236b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yduihcvx',
                  apiId: '75924954-227b-4f95-9188-b3a2e1888345'
                },
                {
                  buildHookId: '6036d904c5a9dd360685262d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y7c7ijgc',
                  apiId: 'bb6c5d7c-9945-42e8-a278-ca5d3b02c082'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Berke9977/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y7c7ijgc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
