export default function AddCanvas( {handleFormSubmit, handleFormField, formData} ){

  

    return(
        <>
        
        <div className="add-post">
          <div className="container-fluid bg-warning mb-2">
            <h1 className="display-5 fw-bold pb-4">Aggiungi il tuo post</h1>
            <h3>"Condividi la tua passione per gli anime aggiungendo un nuovo post sul nostro blog, dove potrai esplorare e discutere le ultime novità, recensioni e approfondimenti sul mondo degli anime!"</h3>

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
        
        
        </>
    )
}