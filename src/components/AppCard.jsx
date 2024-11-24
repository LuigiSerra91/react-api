export default function AppCard({ post, handlerDeleteTask }) {




    const api_server = "http://localhost:3002"


    return (
        <>
            <div className="card">FF
                <img src={api_server + post?.img} alt="img-anime" />
                <div className="card-body">

                    <h3 className="card-title">{post?.title}</h3>
                    <p className="card-text">{post?.author}</p>

                    <p className="card-text">{post?.description}</p>
                    <p>{post?.category}</p>

                    <form onSubmit={handlerDeleteTask} data-id={post?.id}>
                        <button className="btn btn-danger" type="submit">
                            <i className="bi bi-trash"></i>
                        </button>
                    </form>

                </div>

            </div>
        </>
    )
}