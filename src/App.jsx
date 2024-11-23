import { useEffect, useState } from "react";
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import AddCanvas from './components/AddCanvas'
/* 
Esercizio
Creare un semplice form con un campo input per il titolo di un articolo del blog. Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.
BONUS
Implementare la funzionalità di modifica del titolo di un post.
Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)
Buon divertimento e confermate lettura come al solito
*/

const initialFormdata = {
  title: '',
  author: '',
  img: '',
  description: '',

}
const api_server = "http://localhost:3002"

function App() {
  const [task, setTask] = useState([])
  const [formData, setFormData] = useState(initialFormdata)

  function fetchData(url = "http://localhost:3002/post") {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTask(data)


      })
  }

  useEffect(fetchData, [])

  function handlerDeleteTask(e) {
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));

    const id = e.target.getAttribute('data-id')
    fetch('http://localhost:3002/post/' + id, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        setTask(task.filter((trash) => trash.id !== parseInt(id)));
       
        
      })
  }

  function handleSearchForm(e) {
    e.preventDefault()
    //alert('Form sent')
  }



  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('Form sent', formData);


    const newPost = {
      title: formData.title,
      author: formData.author,
      img: formData.img,
      description: formData.description,

    };


    fetch('http://localhost:3002/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Post added', data);



        setFormData(initialFormdata);
        fetchData();
      })
      .catch(err => {
        console.error('Error adding post', err);
      })
  }


  function handleFormField(e) {
    //console.log(e.target);

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  return (
    <>
      <AppHeader />
      <main>

       <AddCanvas handleFormSubmit={handleFormSubmit} handleFormField={handleFormField} formData={formData} />



        <div className="container p-2 bg-black p-3">
          <div className="row">

            {task.data ? task.data.map((character) => (





              <div className="col-3 p-3" key={character.id}>


                <div className="card">
                  <img src={api_server + character.img} alt="" />
                  <div className="card-body">

                    <h3 className="card-title">{character.title}</h3>
                    <p className="card-text">{character.author}</p>

                    <p className="card-text">{character.description}</p>

                    <form onSubmit={handlerDeleteTask} data-id={character.id}>
                      <button className="btn btn-danger" type="submit">
                      <i class="bi bi-trash"></i>
                      </button>
                    </form>

                  </div>

                </div>


              </div>


            )) : <p>no result</p>}

          </div>
        </div>


















      </main>
      <AppFooter />
    </>
  )
}

export default App
