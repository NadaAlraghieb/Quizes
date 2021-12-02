function Team() {
  

    const params = useParams();
    const name = params.name;
    const [data, setData] = useState(null);
    const [id, setAllData]= useState(null);
    useEffect(() => {
      (async () => {
        const response = await fetch("/:id");
        const data = await response.json();
        const info = data.find((team) => team.id === team.id(1));
        const oneId = info.oneId.find((oneId) => oneId.name === name);
        setData(oneId.data);
        setAllData(oneId.id);
      })();
    }, []);
    return (
      <div className="App">
        <Container>
          <Row md={4}>
          {data &&
                data.map((elem) => {
                  console.log(name);
                  if (name === "ATL"){}
                return (
                  
                    <Card-Text>{elem.abbreviation}</Card-Text>
                    
                 
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Team;
  