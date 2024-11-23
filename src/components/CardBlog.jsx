export default function AppCard({ character, handlerDeleteTask, }) {
    return (
        <>






        
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

        </>
    )
}