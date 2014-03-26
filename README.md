# prune-html [![build status](https://secure.travis-ci.org/thlorenz/prune-html.png)](http://travis-ci.org/thlorenz/prune-html)

Given an html string it removes elements matching CSS selector(s) and returns the pruned html string.

```js
var pruneHtml = require('prune-html');

var html = [
    '<div>'
  , '  <h1 class="page-title">Global</h1>'
  , '  <header>'
  , '    <h2>Hello</h2>'
  , '  </header>'
  , '  <article>'
  , '    <div class="container-overview">'
  , '      <dl class="details"></dl>'
  , '    </div>'
  , '    <h3 class="subsection-title">Methods</h3>'
  , '  </article>'
  , '</div>'
].join('\n')

console.log(pruneHtml([ 'h1', '.details', 'h3' ], html));
/* =>
<div>
  <header>
    <h2>Hello</h2>
  </header>
  <article>
    <div class="container-overview">
    </div>
  </article>
</div> */
```

You can further refine the element filtering using [cheerio attributes][].
```js
var pruneHtml = require('prune-html');

var html = [
    '<div class="container-overview">'
  , '  <dl data-prune="" class="details"></dl>'
  , '</div>'
].join('\n');

function filter_by_attribute () {
  return this.data('prune') !== undefined;
}

console.log(pruneHtml([ '*' ], html, filter_by_attribute));
/* =>
<div class="container-overview">
</div>
*/
```

## Installation

    npm install prune-html

## API

### pruneHtml(selectors, html, filter)
```
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
```

## License

MIT

[cheerio attributes]: https://github.com/MatthewMueller/cheerio#attributes
