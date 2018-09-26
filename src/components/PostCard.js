import React from 'react';
import {Item, Button, Image} from 'semantic-ui-react';

const PostCard = (props) => {
  return (
    <Item>
      <Item.Image  src={props.data.post_image_url}/>
      <Item.Content>
        <Item.Header as='a'>
          <h2>
            <a target='blank' href={props.data.url}>{props.data.title}</a>
          </h2>
        </Item.Header>
        <Item.Meta>
          <div style={{display: 'inlineBlock'}}>
            Votes: {props.data.votes}
            <span style={{marginLeft: 10}}>Writer: </span>
            <Image src={props.data.writer_avatar_url} avatar />
          </div>
        </Item.Meta>
        <Item.Description>
          <p>{props.data.description}</p>
        </Item.Description>
        <Item.Extra>
          <Button circular icon='thumbs up outline' color='blue'></Button>
          <Button circular icon='thumbs down outline'></Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default PostCard;