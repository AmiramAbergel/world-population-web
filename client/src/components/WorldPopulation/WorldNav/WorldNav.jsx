const DUMMY_CONTINENTS = ['Africa', 'Europe', 'Asia'];

const WorldNav = () => {
  return (
    <nav>
      <ul>
        {DUMMY_CONTINENTS.map((continent, i) => (
          <li key={i}>{continent}</li>
        ))}
      </ul>
    </nav>
  );
};

export default WorldNav;
