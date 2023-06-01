import Container from './components/Container'
import Header from './components/Header'
import Item from './components/Item'

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
