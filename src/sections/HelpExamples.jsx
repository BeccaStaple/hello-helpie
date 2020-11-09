import React from "react"
import { Card, Image, Icon, Grid } from "semantic-ui-react"

export default class HelpExample extends React.Component {
    render() {
        return (
            <div className="toHelpExamples">
                <h2>WAYS TO HELP</h2>

                <Grid textAlign='center' columns={3} >
                    <Grid.Row>
                        <Grid.Column >
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>Title for how to help</Card.Header>
                                    <Card.Meta>
                                        5 mins or less
                        </Card.Meta>
                                    <Card.Description>
                                        Description about how to help
                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a href="www.google.com">
                                        <Icon name='external alternate' />
                            Visit website
                            </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                        <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Title for how to help</Card.Header>
                        <Card.Meta>
                            5 mins or less
                        </Card.Meta>
                        <Card.Description>
                            Description about how to help
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="www.google.com">
                            <Icon name='external alternate' />
                            Visit website
                            </a>
                    </Card.Content>
                </Card>

                        </Grid.Column>

                        <Grid.Column>
                        <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Title for how to help</Card.Header>
                        <Card.Meta>
                            5 mins or less
                        </Card.Meta>
                        <Card.Description>
                            Description about how to help
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="www.google.com">
                            <Icon name='external alternate' />
                            Visit website
                            </a>
                    </Card.Content>
                </Card>


                        </Grid.Column>
                    </Grid.Row>


                </Grid>





                

                

            </div>
        )
    }
}