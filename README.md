# @devxcrew/ui

React controls, application layouts, workspace primitives, and shared visual settings.

## Start

```sh
npm install
npm run check
npm run pack
```

Each repository owns package-lock.json, node_modules, dist, and its version.
The release archive is written to dist/releases.

## Integration

Use a React 19 frontend with a bundler such as Vite. Install React and React DOM in the app. Import @devxcrew/ui/styles.css. Include the installed package dist/src folder in Tailwind source scanning. Prefer subpath imports to keep feature dependencies out of simple pages.

Compiled UI modules target frontend bundlers and contain extensionless internal imports. Direct Node.js execution and unbundled browser imports are not supported. The package has no unit tests yet. The starter provides browser coverage for API connectivity, theme controls, mobile layout, and failure recovery, not every exported control.

## Agent reference

Start with [Assist](assist/README.md) and [the agent guide](assist/AGENT-GUIDE.md).
Read [package details](assist/documentation/package-reference.md), [audit notes](assist/documentation/audit.md), and [the changelog](assist/documentation/CHANGELOG.md).

## Maintenance tools

This repository installs @devxcrew/cli as a development dependency.
Install a pinned CLI version from the configured npm registry.
The common implementation lives in D:\codexsun\shared\codexsun-cli.
For distributed repositories, install a pinned tools version from the private registry.

```sh
npm run version:show
npm run version:bump -- --dry-run --title "Package update"
npm run changelog:append -- --title "Maintenance" --note "Describe the verified change."
npm run github:now -- --dry-run
npm run lines:fix
```

Read [versioning](assist/operations/versioning.md) before a release.
Remote repositories and registry publishing are not configured.
