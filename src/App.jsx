import { useState, useEffect } from 'react'

function App() {

  const [FormData, setFormData] = useState({

    author: '',
    title: '',
    body: '',
    privacy: ''

  })

  const [errors, setErrors] = useState({

    author: '',
    title: '',
    body: '',
    privacy: ''

  })

  return (
    <>
      <div className="container p-4 bg-light mt-5 rounded">

        <h1 className='fw-bold mb-5'>Post Maker</h1>
        <form method='POST'>
          <div className="row">

            {/* author */}
            <div className="col">
              <div className="mb-3">
                <label for="" className="form-label">Author</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  id=""
                  aria-describedby="helpId"
                  placeholder="Type your name"
                  value={FormData.author}
                />
                <small id="helpId" className="form-text text-secondary">Help text</small>
              </div>
            </div>

            {/* title */}
            <div className="col">
              <div className="mb-3">
                <label for="" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id=""
                  aria-describedby="helpId"
                  placeholder="Type the title"
                  value={FormData.title}
                />
                <small id="helpId" className="form-text text-secondary">Help text</small>
              </div>
            </div>

            {/* body */}
            <div className="col-12">
              <div class="mb-3">
                <label forHtml="" class="form-label"></label>
                <textarea class="form-control" name="body" id="" rows="5" value={FormData.body} placeholder='Write something here'>

                </textarea>
              </div>

            </div>

            {/* check */}

            <div className='p-3' role="group" data-bs-toggle="buttons">
              <label
                class="btn btn-secondary active"
              >
                <input
                  type="checkbox"
                  class="me-2 mr-5"
                  name="private"
                  id=""
                  checked
                  autocomplete="off"
                  value='privacy'
                />
                Private
              </label>

              <label
                class="btn btn-primary"
              >
                <input
                  type="checkbox"
                  class="me-2"
                  name="public"
                  id=""
                  autocomplete="off"
                  value='privacy'
                />
                Public
              </label>
            </div>



          </div>

          <button
            type="submit"
            class="btn btn-primary btn-lg"
          >
            Submit
          </button>


        </form >
      </div >
    </>
  )
}

export default App
