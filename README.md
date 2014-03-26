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

function filterPruneData() {
  return this.data('prune') !== undefined;
}

console.log(pruneHtml([ '*' ], html, filterPruneData));
/* =>
<div class="container-overview">
</div>
*/
```

## Installation

    npm install prune-html

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="pruneHtml"><span class="type-signature"></span>pruneHtml<span class="signature">(selectors, html, <span class="optional">filter</span>)</span><span class="type-signature"> &rarr; {string}</span></h4>
</dt>
<dd>
<div class="description">
<p>Prunes all elements matching the selectors from the given html and returns result.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>selectors</code></td>
<td class="type">
<span class="param-type">Array.&lt;String></span>
|
<span class="param-type">String</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>if one of these CSS selector(s) matches, the element is pruned</p></td>
</tr>
<tr>
<td class="name"><code>html</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>unpruned html</p></td>
</tr>
<tr>
<td class="name"><code>filter</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>function which can be used to filter elements further. Inside the function, <code>this</code> refers to the current element.</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/prune-html/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/prune-html/blob/master/index.js#L21">lineno 21</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pruned html</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">string</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT

[cheerio attributes]: https://github.com/MatthewMueller/cheerio#attributes
