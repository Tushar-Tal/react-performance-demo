import React from "react";

export const KeyDictionary: React.FC = () => {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const KeyList: React.FC = () => {
  const items = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <ul>
      {items.map((item, index) => (
        // Use a unique `key` prop for each list item
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Incorrect usage of key prop
// Make sure to  assign keys to the component you are returning from the iterator and not to the list items
function ListItem(props: { item: string }) {
  const item = props.item;
  return <li key={item.toString()}>{item}</li>;
}

export const KeyListIncorrect: React.FC<{ listItems: string[] }> = ({
  listItems,
}) => {
  const list = listItems;
  const updatedList = list.map((item) => {
    return <ListItem item={item} />;
  });

  return <ul>{updatedList}</ul>;
};
