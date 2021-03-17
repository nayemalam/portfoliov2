var plugins = [{
      plugin: require('C:/Users/Nayem/Desktop/portfoliov2/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/Nayem/Desktop/portfoliov2/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Nayem Alam Official Website","short_name":"NayemAlam","start_url":"/","background_color":"#43C6AC","theme_color":"#43C6AC","display":"minimal-ui","icon":"src/images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"58394143c862c05c31c7b1bab391a844"},
    },{
      plugin: require('C:/Users/Nayem/Desktop/portfoliov2/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"C:\\Users\\Nayem\\Desktop\\portfoliov2\\src\\components\\layout.js"},
    },{
      plugin: require('C:/Users/Nayem/Desktop/portfoliov2/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-165824010-2","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('C:/Users/Nayem/Desktop/portfoliov2/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["/admin","/tags/links"],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('C:/Users/Nayem/Desktop/portfoliov2/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
