import { useState, useEffect } from 'react'

function App() {

  return (
    <>
      <div className="container p-4">

        <h1 className='text-white'>Post Maker</h1>
        <form method='POST'>
          <div className="row">
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
          </div>


        </form >
      </div >
    </>
  )
}

export default App
