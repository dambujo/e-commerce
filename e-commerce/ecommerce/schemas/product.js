export default {
  name: 'prdoduct',
  title: 'product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      Option: {
        hostpot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'price',
      type: 'string',
    },
  ],
};
