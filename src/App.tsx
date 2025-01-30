import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

// App is pulling through a connection to any subparts (Child components)
// First one is Message and it does this through what is called a Virtual DOM (Document Object Model)
// A Virtual DOM is a  lightweight copy of the real DOM that allows
// React to manage changes more efficiently by minimizing the direct manipulation required on the real DOM.
// This is done through a React Library called React-DOM which can be found in package.json.

function App() {
  let RecentFilms = [
    "Mufasa: The Lion King",
    "Wicked",
    "Moana 2",
    "Paddington In Peru",
    "Sonic the Hedgehog 3",
    "Transformers One",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        RecentFilms={RecentFilms}
        heading={"New Films"}
        onSelectItem={handleSelectItem}
      />
      <Alert>Alert!</Alert>
      <Buttons color="primary" onClick={() => console.log("Clicked")}>
        <span>More Films</span>
      </Buttons>
    </div>
  );
}

export default App;
