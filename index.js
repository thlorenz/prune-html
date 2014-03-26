'use strict';

var cheerio = require('cheerio');

function prune(dom, filter, selector) {
  if (filter === undefined)
    dom.find(selector).remove();
  else
    dom.find(selector).filter(filter).remove();
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
 * @param {Function} optional function which can be used to filter elements further. Inside the function, `this` refers to the current element.
 * @return {String} the pruned html
 */
function pruneHtml(selectors, html, filter) {
  selectors = Array.isArray(selectors) ? selectors : [ selectors ];
  var dom = cheerio('<__wrap__>' + html + '</__wrap__>');
  selectors.forEach(prune.bind(null, dom, filter));

  return removeEmptyLines(dom.html());
};
