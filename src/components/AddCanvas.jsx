export default function AddCanvas({ handleFormSubmit, handleFormField, formData }) {



  return (
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
            id="category"
            name="category"
            placeholder="Seleziona categoria post"
            value={formData.category}
            onChange={handleFormField}>
            <option value="">
              hobby
            </option>
            <option value="">
              viaggi
            </option>
            <option value="">
              cultura
            </option>
            <option value="">
              sport
            </option>
            <option value="">
              anime
            </option>
          </select>


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