import React from 'react';
import {Grid, Container} from 'semantic-ui-react';
import PostCard from './PostCard';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
    <Container>
      <Grid container centered>
        <Grid.Column width={10}>
          <Grid.Row>
            <PostCard />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
    )
  }
}

export default Posts;