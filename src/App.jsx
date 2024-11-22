import { useEffect, useState } from "react";
import data from './data/post.js'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
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
      .then(Response => {
        console.log(Response);
        setTask(Response.data)

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

        <div className="p5">
          <div className="container-fluid bg-warning mb-2">
            <h1 className="display-5 fw-bold">Aggiungi il tuo post</h1>

            <button className="btn btn-primary btn-lg" type="button" popovertarget='off-canvas-form'>
              <i className="bi bi-plus"></i> Add
            </button>

          </div>
        </div>

        <div id='off-canvas-form' popover="true" className="bg-dark p-3 border-0 shadow-lg text-white" style={{ minHeight: "100dvh" }}>
          <div className="d-flex gap-5">
            <h3>Add a new post</h3>
            <button className="btn bg-primary" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
              <i className="bi bi-x"></i> Close
            </button>
          </div>

          <form onSubmit={handleFormSubmit}>


            <div className="mb-3">
              <label htmlFor="title" className="form-label">name</label>
              <input type="text"
                className="form-controll"
                id="title"
                name="title"
                aria-describedby="titlehelper"
                placeholder="ugo"
                required
                value={formData.title}
                onChange={handleFormField}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="img" className="form-label">author</label>
              <input type="text"
                className="form-controll"
                id="author"
                name="author"
                aria-describedby="imagehelper"
                placeholder="add author"
                required
                value={formData.author}
                onChange={handleFormField}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="img" className="form-label">image</label>
              <input type="text"
                className="form-controll"
                id="img"
                name="img"
                aria-describedby="imagehelper"
                placeholder="add img"
                required
                value={formData.img}
                onChange={handleFormField}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>

              <textarea
                className="form-control"
                name="description"
                id="description"
                rows="5"
                value={formData.description}
                onChange={handleFormField}
              ></textarea>
            </div>
            <select
              id="selectInput"
              name="category"
              placeholder="Seleziona categoria post"
              value={formData.category}
              onChange={handleFormField}>
              <option value="1">
                categoria 1
              </option>
              <option value="2">
                categoria 2
              </option>
              <option value="3">
                categoria 3
              </option>
              <option value="4">
                categoria 4
              </option>
              <option value="5">
                categoria 5
              </option>
            </select>

            {/* input checkbox tags */}
            <input type="checkbox"
              id="checkInput1"
              name="tag1"
              value={formData.tags}
              onChange={handleFormField} />
            <label>
              Tag1
            </label>
            <input type="checkbox"
              id="checkInput2"
              name="tag2"
              value={formData.tags}
              onChange={handleFormField} />
            <label>
              Tag2
            </label>
            <input type="checkbox"
              id="checkInput3"
              name="tag3"
              value={formData.tags}
              onChange={handleFormField} />
            <label>
              Tag3
            </label>
            <div className="form-check mb-3">
              <input
                id="available"
                name='available'
                type="checkbox"
                className="form-check-input"
                value={formData.available}
                onChange={handleFormField}

              />
              <label className="form-check-label" htmlFor=""> Available </label>
            </div>


            <button
              type="submit"
              className="btn btn-secondary"
            >
              <i className="bi bi-floppy"></i> Save
            </button>



          </form>
        </div>



        <div className="container p-2 bg-black p-3">
          <div className="row">

            {task.data ? task.data.map((character) => (





              <div className="col-3 p-1" key={character.id}>


                <div className="card">
                  <img src={api_server + character.img} alt="" />
                  <div className="card-body">

                    <h3 className="card-title">{character.title}</h3>
                    <p className="card-text">{character.author}</p>

                    <p className="card-text">{character.description}</p>

                    <form onSubmit={handlerDeleteTask} data-id={data.id}>
                      <button className="btn btn-danger" type="submit"> press</button>
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
