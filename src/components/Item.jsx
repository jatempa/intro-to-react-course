function Item({children}) {
  const handleClick = () => {
    console.log(children)
  }


  return <li onClick={handleClick}>{children}</li>;
}

export default Item