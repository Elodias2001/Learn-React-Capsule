import { useFetch } from "./hooks/useFetch"

function App() {

  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')
  

  return <div className="container vstack gap-4 mt-5">

    { loading && <div className="alert alert-info">Chargement...</div> }
    { errors && <div className="alert alert-danger">{errors.toString()}</div> }
    { data && <div>
      <ul>
        { data.map(post => (<li key={post.id} className="alert alert-success">{post.title}</li>) )}
      </ul>
    </div> }

  </div>
}


export default App
