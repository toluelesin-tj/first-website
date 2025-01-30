import { MouseEvent, useState } from "react";

// Props are inputs passed to a component (ListGroup to App)
// Functional arguments for instance
// These should be treated as immutable and READ ONLY (don't change props in code)
// A state is the internal data managed by a component which can change
// These are similar to local variables inside a function
// These are mutable
// Using an interface, we can define the shape of an object or prop
// E.g. { items:[], heading: string }
// You can also add functions here - example here is to let the parent of the component know that the item is selected
// Once happy with the property you've created, feed the parameter into the function

interface ListGroupProps {
  RecentFilms: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// To render a list of items dynamically, you can map a set list of values to the list: see const code line
// The expression needs to be wrapped in curly brackets and moved to the function. Both items need to be
// wrapped in brackets so that they can be configured properly to JSX. As a result you wont need this
//        <li className="list-group-item">An item</li>
//        <li className="list-group-item">A second item</li>
//        <li className="list-group-item">A third item</li>
//        <li className="list-group-item">A fourth item</li>
//        <li className="list-group-item">And a fifth one</li>

// Each item also needs a key property, so this is done by using key={item.id} (Assuming you have an id)
// For conditional rendering, set up a new function and call it in the main function you have, so that different things
// can display for different conditions (you can't write if statements in JSX, just like in XML)

function ListGroup({ RecentFilms, heading, onSelectItem }: ListGroupProps) {
  // When we click on an item, typically you want it to be highlighted.
  // Firstly, make sure the className has the condition that the parameter (SelectedIndex) when equal to the index value should be set to active, otherwise let it just show as it should do
  // To do this, you would call a css class in bootstrap called active.
  // To highlight one item at a time, create a vairable to highlight the index of a selected item
  // This can be rendered dynamically by using a built in function known as Use State known as a Hook (can tap into built in features in react)
  // UseState(-1) makes sure no item is highlighted initially:
  const [seclectedIndex, setSelectedIndex] = useState(-1);

  // To add the condition, change constant (const) with a variable to let, and then reassign the variable to mean what you for the conditions
  // store the if statment logic inside a constant with a function. Functions can have different parameters which means you can store different messages inside there etc.

  const getMessage = () => {
    return RecentFilms.length === 0 && <p>No films found</p>;
  };

  // To handle specific events (such as a click event) declare a function stating 'Handle(typeofevent)'.
  // Import the MouseEvent module.
  // After the parameter, add the module you added like below
  // Pass a reference to your function in the onClick line (don't call it)
  // This allows you to define and respond to user interactions such as clicks, key passes and so on.

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // Wrapping a function in a fragment allows you to return multiple elements in a function. This is done by <> </>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {RecentFilms.map((item, index) => (
          <li
            className={
              seclectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
