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
  return (
    <main className="directory">
      <header className="directory__header">
        <h1>Scientist &amp; Pioneer Directory</h1>
        <p>Explore a directory of notable scientists and pioneers.</p>
      </header>

      <section
        className="people-list"
        aria-label="Scientist and pioneer profiles"
      >
        {SMART_PEOPLE.map((person) => (
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
          </article>
        ))}
      </section>
    </main>
  )
}

export default App