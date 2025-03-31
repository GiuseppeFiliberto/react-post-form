import { useState, useEffect } from 'react'

function App() {

  const [formData, setFormData] = useState({

    author: '',
    title: '',
    body: '',

  })

  const [errors, setErrors] = useState({

    author: '',
    title: '',
    body: '',

  })

  const handleFormData = (e) => {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const key = e.target.name

    setFormData({ ...formData, [key]: value })

  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required.';
    }
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }
    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData);

      fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => console.log(data));
    }
  }


  return (
    <>
      <div className="container p-4 bg-light mt-5 rounded">

        <h1 className='fw-bold mb-5'>Post Maker</h1>
        <form method='POST' onSubmit={handleSubmit} onChange={handleFormData}>
          <div className="row">

            {/* author */}
            <div className="col">
              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                  name="author"
                  id="author"
                  aria-describedby="helpId"
                  placeholder="Type your name"
                  value={formData.author}
                  onChange={handleFormData}
                />
                {errors.author && <div className="invalid-feedback">{errors.author}</div>}
                <small id="helpId" className="form-text text-secondary">Help text</small>
              </div>
            </div>

            {/* title */}
            <div className="col">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  name="title"
                  id="title"
                  aria-describedby="helpId"
                  placeholder="Type the title"
                  value={formData.title}
                  onChange={handleFormData}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                <small id="helpId" className="form-text text-secondary">Help text</small>
              </div>
            </div>

            {/* body */}
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="" className="form-label"></label>
                <textarea className="form-control" name="body" id="" rows="5" value={formData.body} placeholder='Write something here' onChange={handleFormData}>

                </textarea>
              </div>

            </div>

            {/* check */}

            <div className='p-3' role="group" data-bs-toggle="buttons">
              <label
                className="btn btn-primary"
              >
                <input
                  type="checkbox"
                  className="me-2"
                  name="public"
                  id=""
                  autoComplete="off"
                  value='public'
                  onChange={handleFormData}
                />
                Public
              </label>
            </div>



          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Submit
          </button>


        </form >
      </div >
    </>
  )
}

export default App
