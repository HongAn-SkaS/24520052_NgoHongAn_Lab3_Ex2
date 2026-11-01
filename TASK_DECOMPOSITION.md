# Exercise 2: Interactive Scientist & Pioneer Directory

## 1. Project Objective

Transform the static `SMART_PEOPLE` dataset into an accessible, interactive directory using React 19, Vite, and ES2024.

## 2. Technical Constraints

- React 19 + Vite + ES2024.
- Use functional components and React Hooks.
- Use stable IDs as React keys.
- Use immutable state updates.
- Derive filtered and sorted results during render; no `useEffect` for derived state.
- Use `.toSorted()` for sorting.
- Pair every form control with a label using `useId()`.
- Use semantic HTML and accessible live status feedback.
- Follow the project `.cursorrules`.
- No legacy APIs or unnecessary `<div>` elements.

## 3. Work Breakdown Structure (WBS)

| WBS | Task | Deliverable | Acceptance Criteria |
|---|---|---|---|
| 1.0 | Project Setup | React 19 project structure | App runs successfully |
| 1.1 | Inspect existing project | Project audit | Identify existing files and conventions |
| 1.2 | Define task decomposition | `TASK_DECOMPOSITION.md` | WBS and commit plan documented |
| 2.0 | Data Schema | `SMART_PEOPLE` dataset | Correct schema and stable IDs |
| 2.1 | Normalize data | Data module | All records contain `id`, `name`, `age`, `iq` |
| 2.2 | Implement directory structure | Semantic React components | Semantic HTML; stable React keys |
| 3.0 | Search & Filtering | Interactive controls | Case-insensitive search and minimum IQ filter |
| 3.1 | Implement search | Controlled search input | Name matching ignores case |
| 3.2 | Implement IQ filter | Numeric input | Uses `valueAsNumber`; supports empty input |
| 3.3 | Implement sorting | Sort controls | Sort by IQ or age using `.toSorted()` |
| 3.4 | Derived pipeline | Filtered and sorted results | No duplicated derived state or syncing effects |
| 4.0 | Delete & Reset | Directory state management | Delete individual records and restore initial data |
| 4.1 | Implement deletion | Delete action | Immutable updates; stable keys |
| 4.2 | Implement reset | Reset action | Restores original dataset and default controls |
| 5.0 | Accessibility | Accessible interface | Labels, `useId()`, semantic HTML, live status |
| 5.1 | Result feedback | Status output | `role="status"` and `aria-live="polite"` |
| 6.0 | Verification | Tested application | Search, filter, sort, delete, reset verified |
| 6.1 | Performance verification | React DevTools Profiler | One render pass per search input update |
| 6.2 | Focus and key verification | Interaction audit | Focus preserved after deletion; stable keys |
| 7.0 | Documentation & Audit | Final documentation | `AI_AUDIT.md` completed |
| 7.1 | AI audit | Audit report | Requirements, code quality, accessibility reviewed |
| 7.2 | Final review | Submission-ready project | No console errors; all requirements satisfied |

## 4. Mandatory Git Commit Plan

The project requires **more than 10 commits**. The following 13 atomic commits are planned:

| # | Commit Message |
|---|---|
| 1 | `docs(ex2): add task decomposition and project rules` |
| 2 | `feat(ex2): normalize smartPeople schema with stable IDs` |
| 3 | `feat(ex2): add semantic directory structure` |
| 4 | `feat(ex2): add controlled case-insensitive search` |
| 5 | `feat(ex2): add minimum IQ numeric filter` |
| 6 | `feat(ex2): add IQ and age sorting with toSorted` |
| 7 | `feat(ex2): implement derived filtering and sorting pipeline` |
| 8 | `feat(ex2): add immutable scientist deletion` |
| 9 | `feat(ex2): add directory reset functionality` |
| 10 | `feat(ex2): add accessible live result status` |
| 11 | `style(ex2): add responsive directory styling` |
| 12 | `test(ex2): verify interactions accessibility and focus` |
| 13 | `docs(ex2): add AI audit and verification results` |

The following three commit messages are mandatory and must remain exact:

- `feat(ex2): normalize smartPeople schema with stable IDs`
- `feat(ex2): add search, IQ filter & toSorted`
- `feat(ex2): add delete/reset & live status`

These exact commits will be used as atomic checkpoints. The remaining commits will document setup, structure, styling, testing, and audit work.

## 5. Definition of Done

- All WBS tasks are completed.
- Search, IQ filtering, sorting, deletion, and reset work correctly.
- Derived results are computed without `useEffect`.
- Accessibility requirements are satisfied.
- Search typing produces exactly one render pass per update under the specified Profiler test.
- Deleting a record preserves focus and stable keys for remaining records.
- `TASK_DECOMPOSITION.md` and `AI_AUDIT.md` are present.
- More than 10 meaningful commits exist.
- No legacy APIs, console errors, or broken functionality remain.# Exercise 2: Interactive Scientist & Pioneer Directory

## 1. Project Objective

Transform the static `SMART_PEOPLE` dataset into an accessible, interactive directory using React 19, Vite, and ES2024.

## 2. Technical Constraints

- React 19 + Vite + ES2024.
- Use functional components and React Hooks.
- Use stable IDs as React keys.
- Use immutable state updates.
- Derive filtered and sorted results during render; no `useEffect` for derived state.
- Use `.toSorted()` for sorting.
- Pair every form control with a label using `useId()`.
- Use semantic HTML and accessible live status feedback.
- Follow the project `.cursorrules`.
- No legacy APIs or unnecessary `<div>` elements.

## 3. Work Breakdown Structure (WBS)

| WBS | Task | Deliverable | Acceptance Criteria |
|---|---|---|---|
| 1.0 | Project Setup | React 19 project structure | App runs successfully |
| 1.1 | Inspect existing project | Project audit | Identify existing files and conventions |
| 1.2 | Define task decomposition | `TASK_DECOMPOSITION.md` | WBS and commit plan documented |
| 2.0 | Data Schema | `SMART_PEOPLE` dataset | Correct schema and stable IDs |
| 2.1 | Normalize data | Data module | All records contain `id`, `name`, `age`, `iq` |
| 2.2 | Implement directory structure | Semantic React components | Semantic HTML; stable React keys |
| 3.0 | Search & Filtering | Interactive controls | Case-insensitive search and minimum IQ filter |
| 3.1 | Implement search | Controlled search input | Name matching ignores case |
| 3.2 | Implement IQ filter | Numeric input | Uses `valueAsNumber`; supports empty input |
| 3.3 | Implement sorting | Sort controls | Sort by IQ or age using `.toSorted()` |
| 3.4 | Derived pipeline | Filtered and sorted results | No duplicated derived state or syncing effects |
| 4.0 | Delete & Reset | Directory state management | Delete individual records and restore initial data |
| 4.1 | Implement deletion | Delete action | Immutable updates; stable keys |
| 4.2 | Implement reset | Reset action | Restores original dataset and default controls |
| 5.0 | Accessibility | Accessible interface | Labels, `useId()`, semantic HTML, live status |
| 5.1 | Result feedback | Status output | `role="status"` and `aria-live="polite"` |
| 6.0 | Verification | Tested application | Search, filter, sort, delete, reset verified |
| 6.1 | Performance verification | React DevTools Profiler | One render pass per search input update |
| 6.2 | Focus and key verification | Interaction audit | Focus preserved after deletion; stable keys |
| 7.0 | Documentation & Audit | Final documentation | `AI_AUDIT.md` completed |
| 7.1 | AI audit | Audit report | Requirements, code quality, accessibility reviewed |
| 7.2 | Final review | Submission-ready project | No console errors; all requirements satisfied |

## 4. Mandatory Git Commit Plan

The project requires **more than 10 commits**. The following 13 atomic commits are planned:

| # | Commit Message |
|---|---|
| 1 | `docs(ex2): add task decomposition and project rules` |
| 2 | `feat(ex2): normalize smartPeople schema with stable IDs` |
| 3 | `feat(ex2): add semantic directory structure` |
| 4 | `feat(ex2): add controlled case-insensitive search` |
| 5 | `feat(ex2): add minimum IQ numeric filter` |
| 6 | `feat(ex2): add IQ and age sorting with toSorted` |
| 7 | `feat(ex2): implement derived filtering and sorting pipeline` |
| 8 | `feat(ex2): add immutable scientist deletion` |
| 9 | `feat(ex2): add directory reset functionality` |
| 10 | `feat(ex2): add accessible live result status` |
| 11 | `style(ex2): add responsive directory styling` |
| 12 | `test(ex2): verify interactions accessibility and focus` |
| 13 | `docs(ex2): add AI audit and verification results` |

The following three commit messages are mandatory and must remain exact:

- `feat(ex2): normalize smartPeople schema with stable IDs`
- `feat(ex2): add search, IQ filter & toSorted`
- `feat(ex2): add delete/reset & live status`

These exact commits will be used as atomic checkpoints. The remaining commits will document setup, structure, styling, testing, and audit work.

## 5. Definition of Done

- All WBS tasks are completed.
- Search, IQ filtering, sorting, deletion, and reset work correctly.
- Derived results are computed without `useEffect`.
- Accessibility requirements are satisfied.
- Search typing produces exactly one render pass per update under the specified Profiler test.
- Deleting a record preserves focus and stable keys for remaining records.
- `TASK_DECOMPOSITION.md` and `AI_AUDIT.md` are present.
- More than 10 meaningful commits exist.
- No legacy APIs, console errors, or broken functionality remain.