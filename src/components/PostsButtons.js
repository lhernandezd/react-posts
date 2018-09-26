import React from 'react';
import {Button} from 'semantic-ui-react';

const PostsButtons = (props) => {
  return(
    <div className='section__order' style={{display: 'flex', marginBottom: 20}}>
      <h2 style={{marginRight: 10}} className='order__title'>Order: </h2>
      <div className='order__buttons'>
        <Button basic color='blue'>Ascending</Button>
        <Button active color='blue'>Descending</Button>
      </div>
    </div>
  )
}

export default PostsButtons;