const Get = async ()  =>{
  const entries = await strapi.entityService.findMany('api::article.article', {
    fields: ['title', 'description'],
    filters: { title: 'Hello World' },
    sort: { createdAt: 'DESC' },
    populate: { category: true },
  });
}




