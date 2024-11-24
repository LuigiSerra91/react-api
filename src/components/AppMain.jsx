import React, { useState, useEffect, Children } from 'react';
import AddCanvas from "./AddCanvas";
import AppCard from "./AppCard";
import PostList from './PostList'
const initialFormdata = {
  title: '',
  author: '',
  img: '',
  description: '',
  category: ''

}

const api_server = "http://localhost:3002"

export default function AppMain() {

  const [task, setTask] = useState([])
  const [formData, setFormData] = useState(initialFormdata)

  function fetchData(url = "http://localhost:3002/post") {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTask(data)


      })
  }

  useEffect(fetchData, [])

  function handlerDeleteTask(e) {
    e.preventDefault()
    console.log(e.target.getAttribute('data-id'));

    const id = e.target.getAttribute('data-id')
    fetch('http://localhost:3002/post/' + id, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        setTask(res);


      })
  }

  function handleSearchForm(e) {
    e.preventDefault()
    //alert('Form sent')
  }



  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('Form sent', formData);


    const newPost = {
      title: formData.title,
      author: formData.author,
      img: formData.img,
      description: formData.description,

    };


    fetch('http://localhost:3002/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Post added', data);



        setFormData(initialFormdata);
        fetchData();
      })
      .catch(err => {
        console.error('Error adding post', err);
      })
  }


  function handleFormField(e) {
    //console.log(e.target);

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }




  return (
    <>
      <AddCanvas handleFormSubmit={handleFormSubmit} handleFormField={handleFormField} formData={formData} />

      <PostList>
        {task.data ? task.data.map(post => <div className="col-3 p-3" key={post.id}>

          <AppCard key={post.id} handlerDeleteTask={handlerDeleteTask} post={post} />

        </div>) : <p>no result</p>}

      </PostList>







    </>
  )
}