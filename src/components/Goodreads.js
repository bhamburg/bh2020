import React, { useState, useEffect } from "react";
import axios from "axios";
import convert from "xml-js";

const PROXY = "https://cors-anywhere.herokuapp.com/";
const APIKEY = "WtRxj0qGSLZH6RXaR3BRg";

function Goodreads() {

  const [error, setError] = useState(false)
  const [curReading, setCurReading] = useState([])
  const [read, setRead] = useState([])
  const [curReadLoading, setCurReadLoading] = useState(false)
  const [readLoading, setReadLoading] = useState(false)

  useEffect(() => {
    setCurReadLoading(true)
    axios
      .get(`${PROXY}https://www.goodreads.com/review/list/4284038.xml?key=${APIKEY}&v=2&shelf=currently-reading`)
      .then((res) => {
        let xml = res.data
        let parsedJSON = JSON.parse(convert.xml2json(xml))
        let books = parsedJSON.elements[0].elements[2].elements
        console.dir(books)
        setCurReadLoading(false)
        setCurReading(books)
      })
      .catch(error => {
        setCurReadLoading(false)
        setError(error)
        console.log(error)
      })
  
    setReadLoading(true)
    axios
      .get(`${PROXY}https://www.goodreads.com/review/list/4284038.xml?key=${APIKEY}&v=2&shelf=read`)
      .then((res) => {
        let xml = res.data
        let parsedJSON = JSON.parse(convert.xml2json(xml))
        let books = parsedJSON.elements[0].elements[2].elements
        console.dir(books)
        setReadLoading(false)
        setRead(books)
      })
      .catch(error => {
        setReadLoading(false)
        setError(error)
        console.log(error)
      })
  },[])

  return (
    <div>
      <div>
        <h3>Reading List</h3>
        {!error ? <div>
        <h3>Currently Reading</h3>
        {curReadLoading && 
          <span>Loading...</span>
        }
        {!curReadLoading && (
        <div>
          {curReading.map((book, i) => {
            let title = book.elements[1].elements[5].elements[0]['text']
            let url = book.elements[1].elements[10].elements[0]['text']
            let imageUrl = book.elements[1].elements[7].elements[0]['text']
            //let authors = book.elements[1].elements[20].elements ? book.elements[1].elements[20].elements[0]['text'] : "(no description)"
            return (
              <div key={i}>
                <div onClick={() => window.open(url)}>
                  <img
                    alt={title}
                    src={imageUrl}
                    title={title} 
                  />
                  <div>
                    <div>
                      <h4>
                        {title}
                      </h4>
                      <p>
                        Author(s)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>)}
        <h3>Recently Read</h3>
        {readLoading && 
          <span>Loading...</span>
        }
        {!readLoading && (
        <div>
          {read.map((book, i) => {
            let title = book.elements[1].elements[5].elements[0]['text']
            let url = book.elements[1].elements[10].elements[0]['text']
            let imageUrl = book.elements[1].elements[7].elements[0]['text']
            //let authors = book.elements[1].elements[20].elements ? book.elements[1].elements[20].elements[0]['text'] : "(no description)"
            return (
              <div key={i}>
                <div onClick={() => window.open(url)}>
                <img
                    alt={title}
                    src={imageUrl}
                    title={title} 
                  />
                  <div>
                    <div>
                      <h4>
                        {title}
                      </h4>
                      <p>
                        Author(s)
                      </p>
                    </div>
                  </div>
                </div>           
              </div>
            )
          })}
        </div>)}
        <br /><a href="https://www.goodreads.com/review/list/4284038-brian-hamburg">View All Books</a>
        </div>
        : <div>Error loading lists!</div>
        }
      </div>
    </div>
  )
}

export default Goodreads;