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

function App() {
  return (
    <Container>
      <Header>List of items</Header>
      <ul>
        {items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </ul>
    </Container>
  );
}

export default App;
