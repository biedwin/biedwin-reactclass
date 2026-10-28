import Header from './component/header';
import EventDetails from './component/EventDetails';
import Speakers from './component/Speakers';
import Agenda from './component/Agenda';
import Register from './component/Register';
import { Footer } from './component/footer';


function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <EventDetails />
        <Speakers />
        <Agenda />
        <Register />
      </main>
      <Footer />
    </div>
  )
}

export default App;