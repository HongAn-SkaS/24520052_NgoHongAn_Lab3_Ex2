    # AI Code Audit — Exercise 2

## Scope

- React 19 Scientist & Pioneer Directory
- Search, minimum IQ filter, sorting, delete, and reset
- Accessibility and focus management
- Production build and lint checks

## Findings

### Passed

- People records use stable IDs.
- Search is case-insensitive and trims surrounding whitespace.
- Minimum IQ filtering uses `valueAsNumber`.
- Filtering and sorting are derived during render.
- Sorting uses `toSorted()` without mutating the source array.
- Delete and reset update state immutably.
- Form controls have associated labels using `useId()`.
- Result count is announced through a live status region.
- Delete buttons have person-specific accessible names.
- Focus is restored after deletion, with a fallback when no profile remains.
- Production build and lint checks pass.

### Minor Maintainability Issue

Some blocks in `App.jsx` have inconsistent indentation, particularly the focus-management effect, delete handler, and related JSX refs.

This does not affect the current build, but should be cleaned up for readability.

## Validation

- `npm run build`: PASS
- `npm run lint`: PASS
- Lint warnings: 0
- Lint errors: 0

## Conclusion

The implemented feature set appears complete based on the reviewed source.
Manual interaction testing and React Profiler verification should be completed
before declaring the exercise fully verified.