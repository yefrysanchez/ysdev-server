export default {
   name: 'product',
   title: 'Product',
   type: 'document',
   fields: [
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        
    },
    {
        name: 'name',
        title: 'Name',
        type: 'string'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 90,
        }
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number'
    },
    {
        name: 'desc',
        title: 'Desc',
        type: 'string'
    },{
        name: 'longDesc',
        title: 'LongDesc',
        type: 'string'
    },
    {
        name: 'category',
        title: 'Category',
        type: 'string'
    }
   ]
}