# CoNfects

Generated documentation can be found [here under "generated."](./generated/)

***

## Markdown

This library uses [react-markdown](https://github.com/remarkjs/react-markdown) with [remark-gfm](https://github.com/remarkjs/remark-gfm) to convert markdown content to JSX elements.

By default, these packages support [CommonMark](https://commonmark.org/), autolink literals, footnotes, strikethrough, tables, and tasklists.

Custom handling has been applied to the following components:

### `blockquote`

Will stylize `<blockquote />` with a background and some CSS definitions that add a slight left margin and thick left border.

### `h1`-`h6`

Will add an `id` like its content, all lowercase, with spaces replaced with hyphens. For example, `# Hello World` would become `<h1 id='hello-world'>Hello World</h1>`. This supports linking to sections of a page using anchor links like `href='/my-page#hello-world'`.

### `code`

Inline code and code blocks are treated differently.
    
#### Inline

Renders as just `<code />` content with special styling.

#### Blocks

Renders as `<pre><code /></pre>` content with special styling.

If the first line of the code block is `// md-flags:`, the renderer will look for the following:

- `editor`: Uses `CodeEditor` element to render code block.

    - `file=<file name>`: Optional; adds a file name to the editor as a heading, which becomes the file name if downloaded.

Example:

> \```
> \// md-flags: editor, file=example.md
> \# Hello World
> \```

This will create a `CodeEditor` element with `# Hello World` loaded to edit. It will have a heading `example.md`, and if downloaded, will save as `example.md`.

### `p`

Renders plain text and handles custom syntaxes.

### Custom Syntaxes

- Highlight: `||Highlighted||`

    - Adds a "primary" background to the selected content.

- Superscript: `^Superscript^`

    - Wraps the selected content with `<sup>` tags.

- Subscript: `~Subscript^`

    - Wraps the selected content with `<sub>` tags.

- Style: `%()Styled text%`

    - Applies prop defintions to a `<span>` tag wrapping the selected content.
    - Supports:

        - `class:<CSS class>` like `class=my-css-class` --> `<span class='my-css-class'>...</span>`
        - `style:<CSS styles>` like `style={"color":"blue"}` --> `<span style='color: blue'>...</span>`

- Table of Contents: `[TOC]`

    - Takes all headings and maps them to a table of contents as a list of links.