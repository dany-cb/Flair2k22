import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import events from '../utils/events'

const EventInfo = () => {
  const [eventDeets, setEventDeets]: any = React.useState(null)
  const { ename } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setEventDeets(
      events.find(
        (event) =>
          event.title.toLowerCase().replace(/'/g, '') ===
          ename?.replace(/-/g, ' ')
      ) as any
    )
  }, [ename])

  useEffect(() => {
    console.log(eventDeets)
  }, [eventDeets])

  return (
    <section className="card bg-transparent">
      {eventDeets && (
        <div className="">
          <img src={eventDeets.image} alt="bg" className="img-shadow vw-100" />
          <div className="container col-md-8 d-flex justify-content-center align-items-center">
            <div>
              <h1
                className="text-capitalize text-gradient display-3 fw-bold mt-5"
                // style={{ marginTop: '-40px', zIndex: '20' }}
              >
                {eventDeets.title}
              </h1>
              <div className="d-md-flex justify-content-between align-items-start mt-5">
                <div className="col-md-8 col-12">
                  <h5 className="h5">{eventDeets.description}</h5>
                  <h3 className="h3 my-3">Rules:</h3>
                  <pre>{eventDeets.rules}</pre>
                  <div className="text-md-start text-center">
                    <button
                      className="btn btn-gradient rounded-pill px-3 py-1 mt-3 text-white"
                      onClick={() =>
                        navigate(
                          `/register/${eventDeets.title
                            .toLowerCase()
                            .replace(/ /g, '-')}`
                        )
                      }
                    >
                      Register!
                    </button>
                  </div>
                </div>
                <div className="d-grid gap-3 text-md-start text-center my-md-0 my-5">
                  <div>
                    <h5 className="h5">WHEN:</h5>
                    <h6 className="h6">tbd</h6>
                  </div>
                  <div>
                    <h5 className="h5">TYPE:</h5>
                    <h6 className="h6">Live</h6>
                  </div>
                  <div>
                    <h5 className="h5">WHERE:</h5>
                    <h6 className="h6">At LICET</h6>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <img
                  src={eventDeets.image}
                  alt="event"
                  className="img-fluid w-75 rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EventInfo
