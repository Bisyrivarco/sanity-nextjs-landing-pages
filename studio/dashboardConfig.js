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
                  buildHookId: '5fcfa45a862fdc10969d8854',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cj13vbib',
                  apiId: '1bd08498-81af-402f-9785-bf18b2c9aec2'
                },
                {
                  buildHookId: '5fcfa45bf4388604ef938a1d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-okys69fj',
                  apiId: '3906f64b-05a0-4c11-81e3-47178b6b7f46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bisyrivarco/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-okys69fj.netlify.app', category: 'apps'}
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
