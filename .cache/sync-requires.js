const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/pages/contact.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/pages/tags.js"))),
  "component---src-templates-all-posts-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/templates/allPosts.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/templates/page.js"))),
  "component---src-templates-single-post-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/templates/singlePost.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/biju/GitHub/blog/src/templates/tags.js")))
}

