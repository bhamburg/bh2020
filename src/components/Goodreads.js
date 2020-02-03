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
    <>
      <h3 className="major">Reading List</h3>
      {!error ? <div className="row">
      <div className="col-12">
        <h4>Currently Reading</h4>
        {curReadLoading && 
          <span>Loading...</span>
        }
        {!curReadLoading && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Authors</th>
                </tr>
              </thead>
              <tbody>
                {curReading.map((book, i) => {
                  let title = book.elements[1].elements[5].elements[0]['text']
                  let url = book.elements[1].elements[10].elements[0]['text']
                  let imageUrl = book.elements[1].elements[7].elements[0]['text']
                  let authors = book.elements[1].elements[20].elements ? book.elements[1].elements[20].elements[0]['text'] : "(no description)"
                  return (          
                    <tr key={i} onClick={() => window.open(url)}>
                      <td style={{
                        textAlign: 'center', 
                        width: 50,
                      }}>
                        <img 
                          src={imageUrl}
                          style={{
                            verticalAlign: 'text-top',
                            height: 40,
                          }}
                          title={title}
                          alt={title}
                        />
                      </td>
                      <td style={{verticalAlign: 'middle'}}>{title}</td>
                      <td>authors</td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="col-12">
          <h4>Recently Read</h4>
          {readLoading && 
            <span>Loading...</span>
          }
          {!readLoading && (
            <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Authors</th>
                </tr>
              </thead>
              <tbody>
                {read.map((book, i) => {
                  let title = book.elements[1].elements[5].elements[0]['text']
                  let url = book.elements[1].elements[10].elements[0]['text']
                  let imageUrl = book.elements[1].elements[7].elements[0]['text']
                  let authors = book.elements[1].elements[20].elements ? book.elements[1].elements[20].elements[0]['text'] : "(no description)"
                  return (          
                    <tr key={i} onClick={() => window.open(url)}>
                      <td style={{
                        textAlign: 'center', 
                        width: 50,
                      }}>
                        <img 
                          src={imageUrl}
                          style={{
                            verticalAlign: 'text-top',
                            height: 40,
                          }}
                          title={title}
                          alt={title}
                        />
                      </td>
                      <td style={{verticalAlign: 'middle'}}>{title}</td>
                      <td>authors</td>
                    </tr>
                    )
                })}
              </tbody>
            </table>
          </div>)}
        </div>
      </div>
      : <div>
          <p>Error loading lists!</p>
        </div>
      }
      <p>
        <a href="https://www.goodreads.com/review/list/4284038-brian-hamburg">View My Goodreads Profile</a>
      </p>
    </>
  )
}

export default Goodreads;