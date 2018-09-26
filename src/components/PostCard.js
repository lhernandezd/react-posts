import React from 'react';
import {Item, Button, Image} from 'semantic-ui-react';

const PostCard = (props) => {
  return (
    <Item className='post__content'>
      <Item.Image  src={props.data.post_image_url}/>
      <Item.Content>
        <Item.Header as='a' href={props.data.url} target='blank'>
          <h3>{props.data.title}</h3>
        </Item.Header>
        <Item.Meta>
          <div className='item__meta' style={{display: 'inlineBlock'}}>
            Votes: {props.data.votes}
            <span style={{marginLeft: 10}}>Writer: </span>
            <Image src={props.data.writer_avatar_url} avatar />
          </div>
        </Item.Meta>
        <Item.Description>
          <p>{props.data.description}</p>
        </Item.Description>
        <Item.Extra>
          <Button name='like' onClick={props.handleVotes} circular icon='thumbs up outline' color='blue'></Button>
          <Button name='dislike' onClick={props.handleVotes} circular icon='thumbs down outline'></Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default PostCard;