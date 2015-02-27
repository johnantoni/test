Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404'
});

Router.map( function () {
  this.route('home', {
    path: '/',
    fastRender: true
  });
  this.route('video', {
    path: '/video',
    layoutTemplate: 'layout_video',
    fastRender: true
  });
});
