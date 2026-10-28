function Workshops() {
    return (
        <main className="container">
         <h1>Upcoming workshops</h1>
         <div className="grid">
            <section className="card">
              <SectionTitle title="Intro to React" />
              <p className="level">Beginner - 2 hours</p>
              <p>Components, JSX and Props, built from scratch</p>
              <Button label="Register" variant="primary" />
            </section>

            <section className="card">
              <h2>React State and Events</h2>
              <p className="level">Beginner - 3 hours</p>
              <p>Make your interface respond to clicks and typing.</p>
              <button className="btn btn-primary">Register</button>
            </section>

             <section className="card">
             <SectionTitle title="Deploying React App" />
              <p className="level">Intermediate - 1.5 hours</p>
              <p>Put your project online with a live link.</p>
              <Button label="Join waitlist" variant="primary" />
            </section>
         </div>

         <div className="actions">
              <Button label="View all workshops" variant="outline" />
         </div>
        </main>
    )
}

export default Workshops;

function SectionTitle(props) {
    return(
        <h2>{props.title}</h2>
    )
}

function Button({label, variant}) {
    return (
        <button className={`btn btn-${variant}`}>{label}</button>
    )
}