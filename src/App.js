import { Routes, Route} from "react-router-dom";

import { Navbar } from "./components";
import { Home, About, Blog, Contacts, Notfound } from "./Pages";


import './app.scss';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
				<Route index element={<Home />}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="blog" element={<Blog />}></Route>
				<Route path="contacts" element={<Contacts />}></Route>
				<Route path="*" element={<Notfound />}></Route>
		    </Routes>
      </main>
      
    </div>
  );
}

export default App;
