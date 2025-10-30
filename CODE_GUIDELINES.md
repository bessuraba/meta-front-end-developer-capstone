# Code Guidelines

- Project: Next.js + TypeScript. Source of truth: `app/**`, `src/**`.
- Do not review assets/build outputs: `public/**`, `**/*.css`, `**/*.svg`, `node_modules/**`, `.next/**`, `dist/**`, `build/**`.

## Code Quality
- Keep components small/cohesive; extract helpers.
- Prefer strong TypeScript types over `any`.
- Avoid disabling ESLint/TS without justification.
- Maintain consistent file and module naming.

## Accessibility
- Use semantic HTML. Ensure interactive elements have accessible names/roles.
- Associate `label` and inputs; add `aria-*` only when needed.

## Performance
- Avoid heavy work in render and unnecessary re-renders.
- Don’t pass large inline objects/arrays as props; memoize when warranted.
- Lazy-load heavy components/assets when feasible.

## Security
- No unsafe HTML without sanitization.
- Don’t commit secrets; validate and encode untrusted inputs.