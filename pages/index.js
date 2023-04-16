import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {
  /// // useState
  const [InputTEXT, setInputTEXT] = useState(null);
  // list Array
  const [List, setList] = useState([]);

  const inputText =(e)=>{ 
    setInputTEXT(e.target.value)
  }
  const AddText =(e)=>{
    e.preventDefault();

    setList(()=>{
      return [...List ,InputTEXT]
    })
  }
   

  return (
    <>
      <Head>
        <title>to Do List</title>
        <meta name="description" content="To Do List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
            <form onSubmit={AddText}>
              <textarea type="text" name="" onChange={inputText} />
              <br /><button>Add list</button>
            </form>
          <p>inpute typing : {InputTEXT}</p>
        <br /><br />
        TO DO LIST
        <div className='list'>
    {
        List.map((e,i)=>{
          let key = i;
          let value = e;
          console.log(key , value)
          localStorage.setItem(key,value)
          return(
            <div key={i}>
              <h1> <span>{i} {window.localStorage.getItem(key)}</span>--- {e} {window.localStorage.getItem(value)}  </h1>
             
            </div>
          )
        })
    }
        </div>

      </main>
    </>
  )
}
