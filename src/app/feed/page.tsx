import React from 'react'
import CreatePoem from '../components/CreatePoem'
import ReadPoem from '../components/ReadPoem'

const Feed = () => {
  return (
    <div>

        <div className="creation">
             <p>Send a poem to the river</p>
             <CreatePoem />
        </div>

        <div className="feed">
            <p>Read a poem from the river</p>
            <ReadPoem />
        </div>

        
    </div>
  )
}

export default Feed