import React from 'react';
import {Item, Button} from 'semantic-ui-react';

const PostCard = (props) => {
  return (
    <Item.Group>
      <Item>
        <Item.Image  />
        <Item.Content>
          <Item.Header as='a'><h2>Post Title</h2></Item.Header>
          <Item.Meta>Votes: 60</Item.Meta>
          <Item.Description>
            <p>Post content</p>
          </Item.Description>
          <Item.Extra>
            <Button circular icon='thumbs up outline' color='blue'></Button>
            <Button circular icon='thumbs down outline'></Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default PostCard;