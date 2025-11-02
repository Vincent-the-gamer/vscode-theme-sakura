<div align="center">
    <img src="./.github/sakura.png" style="height: 120px;"/>
</div>
<h1 align="center">Sakura 桜</h1>
<p align="center">Sakura blooms in VSCode.</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=vincent-the-gamer.sakura-chan-theme" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/vincent-the-gamer.sakura-chan-theme.svg?color=4d9375&amp;label=Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>

<p align="center">
    <b><i>さくら、ひらひら～～</i></b>
</p>

# Installation

Search `sakura-chan` in VSCode extension menu.

# Animation

Add `dist/trail.js` from extension folder to activate animation.

```json
"sakura-chan-theme.imports": [
    "file://<UserFolder>/.vscode/extensions/vincent-the-gamer.sakura-chan-theme-{plugin-version}/bloom.css",
    "file://<UserFolder>/.vscode/extensions/vincent-the-gamer.sakura-chan-theme-{plugin-version}/dist/trail.js"
],
```

To get better cursor effect, add these to `settings.json`

```json
"editor.cursorBlinking": "solid",
"editor.cursorWidth": 3,
"editor.cursorSmoothCaretAnimation": "on"
```

# Enable Blooming Effect

Provide your path to `bloom.css` in `settings.json`.

> [!WARNING]
> `file://` is required!!!!

macOS:

```json
"sakura-chan-theme.imports": [
    "file:///Users/{USER_NAME}/.vscode/extensions/vincent-the-gamer.sakura-chan-theme-{plugin-version}/bloom.css"
],
```

Windows: 
```json
"sakura-chan-theme.imports": [
    "file://C:/Users/{USER_NAME}/.vscode/extensions/vincent-the-gamer.sakura-chan-theme-{plugin-version}/bloom.css"
],
```

Linux:

```json
"sakura-chan-theme.imports": [
    "file:///home/{USER_NAME}/.vscode/extensions/vincent-the-gamer.sakura-chan-theme-{plugin-version}/bloom.css"
],
```

Then, run `Enable Sakura Bloom`

- `Ctrl + Shift + P` or `Command + Shift + P`
- Input `enable sakura bloom`

And happy hacking~~~ ☆´∀｀☆

# Change font

If you like the font I'm using, you can download it:

Input Mono: https://input.djr.com/

# Add a background image

Please use [Background](https://github.com/shalldie/vscode-background) extension.

Download this pic, then add these codes to `settings.json`.

![background](./.github/background.jpg)

```json
"background.fullscreen": {
    "images": ["file:///path/to/pic"],
    "opacity": 0.1,
    "size": "cover",
    "position": "center",
    "interval": 0
},
"background.editor": {
    "background-position": "100% 100%",
    "background-size": "cover",
    "opacity": 0.3
},
```

Additionally, change your comment color.
```json
"editor.tokenColorCustomizations": {
    "comments": {
        "foreground": "#ffcbfb",
        "fontStyle": "bold"
    }
},
```

Then your Code will look like my preview pic.

# Preview

## Normal

![normal](./.github/normal.png)

## Glowing

![glowing](./.github/glowing.png)

# Publish
```shell
pnpm run build
pnpm run publish
```

# License
[MIT](./LICENSE)
