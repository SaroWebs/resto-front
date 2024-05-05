import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [categories, setCategories] = useState([]);
  let [appError, setAppError] = useState({
    hasError: false,
    message: '',
    type: ''
  });

  const getCategories = () => {
    clearError();
    axios.get('http://localhost:8000/api/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error(err);
        setAppError({
          hasError: true,
          message: err.message,
          type: 'server',
        });
      });
  }

  const clearError = () => {
    setAppError({
      hasError: false,
      message: '',
      type: ''
    })
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className="relative w-full">
      {appError.hasError && (
        <div className="w-full text-center py-3 bg-red-200/90 absolute top-2 left-0 right-0">
          <h3 className="uppercase text-xl text-red-800">{appError.type} ERROR</h3>
          <span className="text-xs text-red-600">{appError.message}</span>
        </div>
      )
      }
      {categories.length > 0 ? categories.map(category => (
        <span key={category.id}>
          <a>{category.name}</a>
        </span>
      )):(
        <div className="w-full text-center py-3 bg-red-200">
          <span className="text-xs text-red-600">NO CATEGORY FOUND</span>
        </div>
      )}


        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut assumenda aliquid beatae amet, magnam sequi facere error deleniti adipisci molestias sed delectus quos fuga quae laudantium dolorum veritatis laboriosam accusamus.
          Distinctio necessitatibus id mollitia vero ipsa dicta nesciunt repellendus eius harum dolor error fugit consequuntur recusandae corrupti, est autem, iste at numquam quam deleniti esse omnis, aliquam quos. Facilis, labore.
          Alias, at dolorum aliquam voluptates quia odit officiis dignissimos molestiae, a, placeat doloremque mollitia possimus. Alias nisi, labore beatae sed deleniti corporis dolores excepturi distinctio perspiciatis dignissimos tempore expedita illo?
          Laudantium facilis repellat ab fugiat obcaecati assumenda, impedit aliquam iste nemo asperiores pariatur. Ducimus iure quo enim ut ipsa, praesentium delectus! Omnis dicta eius impedit quis, eveniet quae qui? Quas?
          Reiciendis atque, explicabo error, tempore, fugiat incidunt expedita nemo quaerat ex non molestias sed? Nulla perferendis placeat ullam asperiores, accusantium fuga et numquam aliquam ducimus in illum error magnam enim.
        </p>

    </div>
  )
}

export default App
