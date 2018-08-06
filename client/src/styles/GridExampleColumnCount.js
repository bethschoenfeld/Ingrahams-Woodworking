import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumnCount = () => (
  <Grid celled>
    <Grid.Row container row={3}>
      <Grid.Row container columns={3} >
        <Image src='https://images.unsplash.com/photo-1531812001686-61ad8ed4e228?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=b7b6994759290d07b50e1136da287746&auto=format&fit=crop&w=500&q=80' />
      </Grid.Row>
      <Grid.Row>
        <Image src='https://images.unsplash.com/photo-1529015085880-cd42efe58098?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebc587a7b4231c86bcf27f8c9e314722&auto=format&fit=crop&w=500&q=80' />
      </Grid.Row>
      <Grid.Row>
        <Image src='https://images.unsplash.com/photo-1529015085880-cd42efe58098?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebc587a7b4231c86bcf27f8c9e314722&auto=format&fit=crop&w=500&q=80' />
      </Grid.Row>
    </Grid.Row>

    {/* <Grid.Row columns={4}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row> */}

    {/* <Grid.Row columns={5}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row> */}
  </Grid>
)

export default GridExampleColumnCount