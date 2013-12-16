'use strict';

var cheerio = require('cheerio');

function prune(dom, selector) {
  dom.find(selector).remove();
}

function removeEmptyLines(html) {
  if (!html) return html;
  return html
    .split('\n')
    .filter(function (l) { return l.trim().length; })
    .join('\n');
}

var go = module.exports = 

/**
 * Prunes all elements matching the selectors from the given html and returns result.
 * 
 * @name pruneHtml
 * @function
 * @param {Array.<String>|String} selectors if one of these CSS selector(s) matches, the element is pruned
 * @param {String} html unpruned
 * @return {String} the pruned html
 */
function pruneHtml(selectors, html) {
  selectors = Array.isArray(selectors) ? selectors : [ selectors ];
  var dom = cheerio('<__wrap__>' + html + '</__wrap__>');
  selectors.forEach(prune.bind(null, dom))

  return removeEmptyLines(dom.html());
};
