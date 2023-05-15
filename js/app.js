function Container(props) {
  return <div>{props.children}</div>;
}

function Header(props) {
  return <h2>{props.children}</h2>;
}

function Item(props) {
  return <li>{props.children}</li>;
}

const items = [
  'First item',
  'Second item',
  'Third item',
  'Fourth item',
  'Fifth item',
];

const rootElement = document.getElementById('root');
const rootNode = ReactDOM.createRoot(rootElement);
const listOfItems = (
  <Container>
    <Header>List of items</Header>
    <ul>
      {items.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </ul>
  </Container>
);

rootNode.render(listOfItems);
