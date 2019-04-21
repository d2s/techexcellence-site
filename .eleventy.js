// Eleventy configuration
//
// Documentation about configuration syntax:
// https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  // Copy specific files directly without modifying their contents
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/_headers');
  eleventyConfig.addPassthroughCopy('src/_redirects');
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
  eleventyConfig.addPassthroughCopy('src/CNAME');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: '/',

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'docs',
    },
  };
};
