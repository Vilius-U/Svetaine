

function Indexes({ setErrors, loading, loading2 }) {

  const [scrollPosition, setScrollPosition] = useState(0); // Initialize scroll position state with 0
  const contentRef = useRef(null);
  useEffect(() => {
    document.title = "Pagrindinis | Instalika.lt";
  }, []);




  useEffect(() => {
    if (contentRef.current) {
      // Set the scroll position of the content based on the scrollPosition variable
      contentRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [scrollPosition]); // Re-run effect whenever scrollPosition changes


  const slideLeft = () => {
    setScrollPosition(prevPosition => {
      // Calculate the new scroll position
      const newScrollPosition = prevPosition - contentRef.current.clientWidth; // Decrease scroll position by 200 pixels

      // Ensure the new scroll position doesn't go below 0
      return Math.max(newScrollPosition, 0);
    });
  };

  // Function to handle sliding the content to the right


  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default Indexes;
