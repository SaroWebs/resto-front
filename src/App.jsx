import axios from "axios";
import { useEffect ,useState} from "react";

function App() {
  let [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get('http://localhost:8000/api/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getCategories();
  }, [])
  
  return (
    <div>
      {categories.length > 0 && categories.map(category=>(
        <span key={category.id}>
          <a>{category.name}</a>
        </span>
      ))}
    </div>
  )
}

export default App
