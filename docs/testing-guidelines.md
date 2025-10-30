# Testing Guidelines

## When tests are required
When PRs modify logic in:
- `app/**`
- `src/components/**`
- `src/**/utils/**`
- `src/**/hooks/**`

…add or update tests. If none are added, the PR must explain why (e.g., refactor without behavior change).

## React Testing Library (RTL)
- Prefer queries by accessible role/name/label over test IDs.
- Use `@testing-library/user-event` for realistic interactions.
- For async UI, use `findBy*` and await the UI state; avoid timeouts.
- Avoid broad snapshots; assert behavior and accessible output.

## Coverage focus (quality over percent)
- Forms: valid, invalid, edge inputs.
- Async flows: loading, success, error.
- Utilities: edge cases (empty/nullish/boundaries; dates/time zones if applicable).

## CI Expectations
- PR is incomplete if lint, type-check, or tests fail.
- If code files change but no tests change, reviewers should request tests or a clear justification.