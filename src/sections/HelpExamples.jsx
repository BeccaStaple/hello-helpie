import React from "react"
import { Card, Image, Icon, Grid } from "semantic-ui-react"
import EnvImg from "./env.jpg"
import FemImg from "./fem.png"
import SocImg from "./social-mob.jpg"

export default class HelpExample extends React.Component {
    render() {
        return (
            <div className="toHelpExamples">
                <h2 className="sectionHeader">WAYS TO HELP</h2>

                <Grid textAlign='center' columns={3} >
                    <Grid.Row>
                        <Grid.Column >
                            <Card>
                                <Image src={EnvImg} wrapped ui={false} />
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
                    <Image src={FemImg} wrapped ui={false} />
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
                    <Image src={SocImg} wrapped ui={false} />
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