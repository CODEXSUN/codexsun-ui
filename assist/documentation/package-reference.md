# UI Package Reference

## Purpose

React controls, application layouts, workspace primitives, and shared visual settings.

## Ownership

Own reusable controls, accessible interaction primitives, layout wrappers, styling tokens, dark mode surfaces, and design variants. Apps supply branding, navigation, user actions, workspaces, business forms, and permissions.

## Public exports

| Export                            | Responsibility                                                                    |
| --------------------------------- | --------------------------------------------------------------------------------- |
| components/*                      | Radix-based controls, inputs, dialogs, tables, charts, loading states and editors |
| layouts/*                         | App, administration, authentication, public-web and role shell wrappers           |
| blocks/*                          | Composable navigation and shell blocks                                            |
| workspace, workspace/_, presets/_ | Workspace sections, actions, forms, tables, totals and presentation primitives    |
| design-system                     | Shared design variants and browser settings                                       |
| lib/*                             | Common React hooks and class-name helpers                                         |
| styles.css                        | Tailwind styles, Geist fonts, print styles and design tokens                      |

## Runtime and build

Use ESM, Node.js >=26.5 and npm >=12.0.1.
TypeScript 6.0.3 builds JavaScript and declarations into dist/src.
The root package manifest exports compiled files.
npm pack runs prepack and rebuilds the release. Tests and local tools are excluded from runtime output.

## Integration

Use a React 19 frontend with a bundler such as Vite. Install React and React DOM in the app. Import @devxcrew/ui/styles.css. Include the installed package dist/src folder in Tailwind source scanning. Prefer subpath imports to keep feature dependencies out of simple pages.

## Dependencies

Runtime and peer requirements are declared in package.json.
@devxcrew/cli is a development dependency for build, boundaries, exports, versions, changelogs, GitHub review and LF checks.
The configured npm registry supplies the CLI development dependency.
React and React DOM are peer dependencies. Radix, Tailwind, fonts, charts, editors, and workspace libraries remain runtime dependencies.

## Limits

Compiled UI modules target frontend bundlers and contain extensionless internal imports. Direct Node.js execution and unbundled browser imports are not supported. The package has no unit tests yet. The starter provides browser coverage for API connectivity, theme controls, mobile layout, and failure recovery, not every exported control.

## Extension rules

Add only reusable capabilities with explicit public contracts.
Keep company-specific business concepts in app modules.
Apps choose their own release versions, secrets, database adapters and deployment schedules.
