
import { createRoot } from "react-dom/client";
import Pet from './Pet';


const App = () => {
  return (
    <div>
      <h1>
        Adopt Me!
      </h1>
      <Pet name="Kon" animal="Lion" breed="Mod Soul" />
      <Pet name="Lirin" animal="Bird" breed="Mod Soul" />
      <Pet name="Noba" animal="Toy Man" breed="Mod Soul" />
    </div>
  )
};



const container = document.getElementById("root");
const root = createRoot(container);
root.render(< App/>);
