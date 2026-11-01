# Manual Test Checklist — Exercise 2

## 1. Search

- [ ] Search by a full name returns the matching profile.
- [ ] Search by partial name returns matching profiles.
- [ ] Search is case-insensitive.
- [ ] Leading and trailing spaces are ignored.
- [ ] A non-matching query displays the empty state.
- [ ] Clearing the search restores matching profiles.

## 2. Minimum IQ Filter

- [ ] Entering `200` shows profiles with IQ greater than or equal to 200.
- [ ] Entering `190` includes profiles with IQ 190.
- [ ] Clearing the input removes the minimum IQ constraint.
- [ ] Search and IQ filter work together.
- [ ] An empty result displays the empty state.

## 3. Sorting

- [ ] IQ High to Low sorts correctly.
- [ ] IQ Low to High sorts correctly.
- [ ] Age Oldest First sorts correctly.
- [ ] Age Youngest First sorts correctly.
- [ ] Sorting does not remove or modify profile data.

## 4. Delete and Reset

- [ ] Deleting a profile removes only that profile.
- [ ] The result count updates after deletion.
- [ ] Deleting a profile preserves focus on a remaining Delete button.
- [ ] Deleting the last visible profile moves focus to Reset.
- [ ] Reset restores all six profiles.
- [ ] Reset clears search and IQ filters.
- [ ] Reset restores the default sorting order.

## 5. Accessibility and Responsive Layout

- [ ] Every input and select has an associated visible label.
- [ ] Delete buttons have person-specific accessible names.
- [ ] Result count is announced through the live status region.
- [ ] All controls can be operated using the keyboard.
- [ ] Focus indicators are visible.
- [ ] Layout remains usable at a viewport width of 375px.
- [ ] No horizontal page overflow occurs at 375px.

## 6. React Profiler

- [ ] Open React DevTools Profiler.
- [ ] Start recording.
- [ ] Type one character into the search field.
- [ ] Stop recording and inspect the commit.
- [ ] Confirm the interaction produces one update commit under the test conditions.
- [ ] Record any additional commits and investigate their cause.

## 7. Build and Lint

- [ ] `npm run build` passes.
- [ ] `npm run lint` passes.
- [ ] Browser console has no unexpected errors.

## Test Result

- Date:
- Browser:
- Build:
- Lint:
- Manual tests:
- Profiler result:
- Notes:
