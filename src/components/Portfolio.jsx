import React from 'react'
import Portcomp from './Portcomp'
import java from '../java.png'
import reacts from '../reactjs.png'
import html from '../html.png'
import javascript from '../javascript.png'

export default function Component() {
  return (
    
    <>
    <div name="portfolio" className="mx-16 my-4 space-y-10">
      <h1  className="md:text-3xl text-2xl underline">portfolio</h1>
    
    <div className='flex flex-wrap'>
    < Portcomp title="video" img={java} />
      < Portcomp title="video" img={reacts}/>
      < Portcomp  title="video" img={html}/>
      < Portcomp  title="video" img={javascript}/>
      
    </div>
    </div>
    <hr />
    </>
  )
}
