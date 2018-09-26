import React from 'react';
import {Grid, Container, Item} from 'semantic-ui-react';
import PostCard from './PostCard';
import PostsButtons from './PostsButtons';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      posts: [
        {
          id: 1,
          title: 'Manejo de dependencias en Ruby con Bundler',
          description: 'Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.',
          url: 'http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/',
          votes: 42,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg',
        },
        {
          id: 2,
          title: 'Descubre si Make it Real es para ti',
          description: 'En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.',
          url: 'http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/',
          votes: 43,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg',
        },
        {
          id: 3,
          title: '¿Qué es código?',
          description: 'Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.',
          url: 'http://blog.makeitreal.camp/que-es-codigo/',
          votes: 44,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/code.jpg',
        },
        {
          id: 4,
          title: 'Aprende Desarrollo Web gratis',
          description: '¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.',
          url: 'http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/',
          votes: 45,
          writer_avatar_url: '//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
          post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png',
        }
      ],
      order: false //order of the posts: true => ascending , false => descending
    };
  }

  handleClick(e) {
    const selected = e.target.id;
    const button = document.getElementById(selected);
    const otherButton = document.getElementById(selected === 'ascending' ? 'descending' : 'ascending');

    button.classList.remove('basic');
    button.classList.add('active');

    otherButton.classList.remove('active');
    otherButton.classList.add('basic');
    
    const newOrder = selected === 'ascending' ? true : false;

    this.setState({
      order: newOrder
    })
  }

  render() {
    return(
    <Container className='container'>
      <Grid container centered>
        <Grid.Column width={10}>
          <PostsButtons handleClick={this.handleClick}/>
          <Item.Group divided style={{padding: 20}} className='section__posts'>
            {this.state.order ?
              this.state.posts.sort((a, b) => a.votes > b.votes ? 1 : -1).map(post =>
              <PostCard data={post} key={post.id}/>
            ) :
            this.state.posts.sort((a, b) => a.votes < b.votes ? 1 : -1).map(post =>
              <PostCard data={post} key={post.id}/>
            )}
          </Item.Group>
        </Grid.Column>
      </Grid>
    </Container>
    )
  }
}

export default Posts;