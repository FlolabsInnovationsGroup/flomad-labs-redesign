export default {
    name: 'mainFocus',
    title: 'Main Focus',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'focusAreas',
        title: 'Focus Areas',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {name: 'title', title: 'Title', type: 'string'},
              {name: 'subtext', title: 'Subtext', type: 'text'},
              {name: 'icon', title: 'Icon', type: 'string'},
              {name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true }},
            ],
          },
        ],
      },
    ],
  }