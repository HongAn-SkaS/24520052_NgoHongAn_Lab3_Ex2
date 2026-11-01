import { useId, useLayoutEffect, useRef, useState } from 'react'
import './App.css'

const SMART_PEOPLE = [
  { id: 'sp-1', name: 'Johann Goethe', age: 82, iq: 210 },
  { id: 'sp-2', name: 'Albert Einstein', age: 76, iq: 205 },
  { id: 'sp-3', name: 'Leonardo da Vinci', age: 67, iq: 180 },
  { id: 'sp-4', name: 'Isaac Newton', age: 84, iq: 190 },
  { id: 'sp-5', name: 'James Maxwell', age: 48, iq: 190 },
  { id: 'sp-6', name: 'William Sidis', age: 46, iq: 200 },
]

function App() {
  const searchInputId = useId()
  const minIqInputId = useId()
  const sortSelectId = useId()

  
  const [people, setPeople] = useState(SMART_PEOPLE)
  const [searchTerm, setSearchTerm] = useState('')
  const [minIQ, setMinIQ] = useState(Number.NaN)
  const [sortBy, setSortBy] = useState('iq-desc')

  const deleteButtonRefs = useRef(new Map())
  const pendingFocusId = useRef(null)
  const resetButtonRef = useRef(null)

  const normalizedSearchTerm = searchTerm.trim().toLowerCase()

  const filteredPeople = people.filter((person) => {
    const matchesName = person.name
      .toLowerCase()
      .includes(normalizedSearchTerm)

    const matchesIQ = Number.isNaN(minIQ) || person.iq >= minIQ

    return matchesName && matchesIQ
  })

  const sortedPeople = filteredPeople.toSorted((personA, personB) => {
    switch (sortBy) {
      case 'iq-asc':
        return personA.iq - personB.iq
      case 'iq-desc':
        return personB.iq - personA.iq
      case 'age-asc':
        return personA.age - personB.age
      case 'age-desc':
        return personB.age - personA.age
      default:
        return 0
    }
  })

  useLayoutEffect(() => {
  const targetId = pendingFocusId.current

  if (targetId === null) {
    return
  }

  const targetButton = deleteButtonRefs.current.get(targetId)

  if (targetButton) {
    targetButton.focus()
  } else {
    resetButtonRef.current?.focus()
  }

  pendingFocusId.current = null
}, [people])

  function handleDelete(personId) {
  const currentIndex = sortedPeople.findIndex(
    (person) => person.id === personId,
  )

  const nextPerson =
    sortedPeople[currentIndex + 1] ?? sortedPeople[currentIndex - 1]

  pendingFocusId.current = nextPerson?.id ?? null

  setPeople((currentPeople) =>
    currentPeople.filter((person) => person.id !== personId),
  )
}

  function handleReset() {
    setPeople(SMART_PEOPLE)
    setSearchTerm('')
    setMinIQ(Number.NaN)
    setSortBy('iq-desc')
  }

  const resultLabel =
    sortedPeople.length === 1 ? 'person found' : 'people found'

  return (
    <main className="directory">
      <header className="directory__header">
        <h1>Scientist &amp; Pioneer Directory</h1>
        <p>Explore a directory of notable scientists and pioneers.</p>
      </header>

      <section className="directory__controls" aria-label="Directory filters">
        <div className="form-field">
          <label htmlFor={searchInputId}>Search by name</label>
          <input
            id={searchInputId}
            type="search"
            value={searchTerm}
            placeholder="Enter a name"
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor={minIqInputId}>Minimum IQ</label>
          <input
            id={minIqInputId}
            type="number"
            min="0"
            value={Number.isNaN(minIQ) ? '' : minIQ}
            placeholder="Any IQ"
            onChange={(event) =>
              setMinIQ(event.currentTarget.valueAsNumber)
            }
          />
        </div>

        <div className="form-field">
          <label htmlFor={sortSelectId}>Sort by</label>
          <select
            id={sortSelectId}
            value={sortBy}
            onChange={(event) => setSortBy(event.currentTarget.value)}
          >
            <option value="iq-desc">IQ: High to Low</option>
            <option value="iq-asc">IQ: Low to High</option>
            <option value="age-desc">Age: Oldest First</option>
            <option value="age-asc">Age: Youngest First</option>
          </select>
        </div>
      </section>

      <section className="directory__results" aria-label="Directory results">
        <div className="directory__toolbar">
          <p role="status" aria-live="polite">
            {sortedPeople.length} {resultLabel}
          </p>

          <button
  ref={resetButtonRef}
  type="button"
  onClick={handleReset}
>
  Reset directory
</button>
        </div>

        <div className="people-list">
          {sortedPeople.map((person) => (
            <article className="person-card" key={person.id}>
              <h2>{person.name}</h2>

              <dl className="person-card__details">
                <div>
                  <dt>Age</dt>
                  <dd>{person.age}</dd>
                </div>
                <div>
                  <dt>IQ</dt>
                  <dd>{person.iq}</dd>
                </div>
              </dl>

              <button
  ref={(element) => {
    if (element) {
      deleteButtonRefs.current.set(person.id, element)
    } else {
      deleteButtonRefs.current.delete(person.id)
    }
  }}
  className="person-card__delete"
  type="button"
  onClick={() => handleDelete(person.id)}
  aria-label={`Delete ${person.name}`}
>
  Delete
</button>
            </article>
          ))}
        </div>

        {sortedPeople.length === 0 && (
          <p className="directory__empty">
            No people match the current filters.
          </p>
        )}
      </section>
    </main>
  )
}

export default App