# VSCode Borderless
[![Version](https://vsmarketplacebadge.apphb.com/version/vhanla.borderless.svg)](https://marketplace.visualstudio.com/items?itemName=vhanla.borderless)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/vhanla.borderless.svg)](https://marketplace.visualstudio.com/items?itemName=vhanla.borderless)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/vhanla.borderless.svg)](https://marketplace.visualstudio.com/items?itemName=vhanla.borderless)

VS Code Extension to hide/show window's title bar on Windows platform

![snapshot](https://github.com/vhanla/vscode-borderless/blob/master/images/snapshot.png?raw=true)

## Requirements

* Windows 7 or newer.

## Usage

* Press `shift`+`F12` to set all visible windows borderless
* Press `shift`+`F11` to restore window's title bar

You can always modify those default hotkeys.

## Settings

You can choose to autohide borders on application startup with setting.

`borderless.autoenable` when set to true, the extension will auto apply on application startup.

You can also choose among three different borderless modes on `borderless.bordertype` config setting:
- `borderless` : no borders at all
- `bordersizable` : border can still allow to resize with mouse
- `bordersimple` : shows a simple border line

**NOTICE** that Aero Snap still works on all modes, so hotkeys `Win+<arrow keys>` will maximize, restore, move to screen sides.

## Known bugs

* Sometimes it might fail to load, just reload the vscode window and wait before pressing the above hotkeys (or the assigned)
* Sometimes after a lot of switching from borderless mode to normal mode, a gap in the top of the window will appear.

## Links


* [https://marketplace.visualstudio.com/items?itemName=vhanla.borderless](https://marketplace.visualstudio.com/items?itemName=vhanla.borderless)
* [https://github.com/vhanla/vscode-borderless](https://github.com/vhanla/vscode-borderless)

## Changelog

See [CHANGELOG.md](https://github.com/vhanla/vscode-borderless/blob/master/./CHANGELOG.md)