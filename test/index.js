'use strict';
/*jshint asi: true */

var test = require('tap').test
  , prune = require('../')

var html = [
    '<div class="jsdoc-githubify">'
  , '  <h1 class="page-title">Global</h1>'
  , '  <header>'
  , '    <h2>Hello</h2>'
  , '  </header>'
  , '  <article>'
  , '    <div class="container-overview">'
  , '      <dl data-prune="" class="details"></dl>'
  , '    </div>'
  , '    <h3 class="subsection-title">Methods</h3>'
  , '  </article>'
  , '</div>'
].join('\n')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nsingle selector', function (t) {

  t.deepEqual(
      prune('h1', html).split('\n')
    , [ '<div class="jsdoc-githubify">',
        '  <header>',
        '    <h2>Hello</h2>',
        '  </header>',
        '  <article>',
        '    <div class="container-overview">',
        '      <dl data-prune="" class="details"></dl>',
        '    </div>',
        '    <h3 class="subsection-title">Methods</h3>',
        '  </article>',
        '</div>' ]
  )

  t.deepEqual(
      prune('.details', html).split('\n')
    , [ '<div class="jsdoc-githubify">',
        '  <h1 class="page-title">Global</h1>',
        '  <header>',
        '    <h2>Hello</h2>',
        '  </header>',
        '  <article>',
        '    <div class="container-overview">',
        '    </div>',
        '    <h3 class="subsection-title">Methods</h3>',
        '  </article>',
        '</div>' ]
  )
  t.end()
})

test('\nmulti selectors', function (t) {
  
  t.deepEqual(
      prune([ 'h1', '.details' ], html).split('\n')
    , [ '<div class="jsdoc-githubify">',
        '  <header>',
        '    <h2>Hello</h2>',
        '  </header>',
        '  <article>',
        '    <div class="container-overview">',
        '    </div>',
        '    <h3 class="subsection-title">Methods</h3>',
        '  </article>',
        '</div>' ]
  )
  t.deepEqual(
      prune([ 'h1', '.details', 'h3' ], html).split('\n')
    , [ '<div class="jsdoc-githubify">',
        '  <header>',
        '    <h2>Hello</h2>',
        '  </header>',
        '  <article>',
        '    <div class="container-overview">',
        '    </div>',
        '  </article>',
        '</div>' ]
  )
  t.end()
})

test('\nelement filter', function (t) {
  
  function filterPruneData () {
    return this.data('prune') !== undefined;
  }

  t.deepEqual(
      prune([ '*' ], html, filterPruneData).split('\n')
    , [ '<div class="jsdoc-githubify">',
        '  <h1 class="page-title">Global</h1>',
        '  <header>',
        '    <h2>Hello</h2>',
        '  </header>',
        '  <article>',
        '    <div class="container-overview">',
        '    </div>',
        '    <h3 class="subsection-title">Methods</h3>',
        '  </article>',
        '</div>' ]
  )
  t.end()
})
