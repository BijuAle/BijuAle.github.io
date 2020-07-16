// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-tags-js": () => import("./../../src/pages/tags.js" /* webpackChunkName: "component---src-pages-tags-js" */),
  "component---src-templates-all-posts-js": () => import("./../../src/templates/allPosts.js" /* webpackChunkName: "component---src-templates-all-posts-js" */),
  "component---src-templates-page-js": () => import("./../../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-single-post-js": () => import("./../../src/templates/singlePost.js" /* webpackChunkName: "component---src-templates-single-post-js" */),
  "component---src-templates-tags-js": () => import("./../../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */)
}

