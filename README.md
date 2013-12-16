# prune-html [![build status](https://secure.travis-ci.org/thlorenz/prune-html.png)](http://travis-ci.org/thlorenz/prune-html)

Given an html string it removes elements matching CSS selector(s) and returns the pruned html string.

```js
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

console.log(prune([ 'h1', '.details', 'h3' ], html));
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

## Installation

    npm install prune-html

## API

### pruneHtml(selectors, html)
```
/**
 * Prunes all elements matching the selectors from the given html and returns result.
 * 
 * @name pruneHtml
 * @function
 * @param {Array.<String>|String} selectors if one of these CSS selector(s) matches, the element is pruned
 * @param {String} html unpruned
 * @return {String} the pruned html
 */
```

## License

MIT
