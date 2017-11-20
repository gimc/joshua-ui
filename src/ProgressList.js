import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { Card, Image, Progress } from 'semantic-ui-react';
import sapling from './images/sapling.png';

class ProgressList extends Component {
  render() {
    const allProgress = this.props.data.allProgress;
    return (
      <div>
        {allProgress === undefined
          ? <p>Could not find progress :-(</p>
          : <Card.Group>
              {allProgress.map(progress =>
                <Card color={progress.achieved ? 'green' : 'gray'}>
                  <Card.Content>
                    <Image src={sapling} floated="right" size="mini" />
                    <Card.Header>
                      {progress.name}
                    </Card.Header>
                    <Card.Meta>Tree achievements</Card.Meta>
                    <Card.Description>
                      {progress.description}
                    </Card.Description>
                    <Progress
                      value={progress.count}
                      total={progress.required}
                      progress="ratio"
                      color={progress.date_achieved !== null ? 'green' : 'gray'}
                    />
                    {progress.date_achieved !== null
                      ? <p>
                          Achieved on:{' '}
                          {new Date(progress.date_achieved).toLocaleString()}
                        </p>
                      : <p>Keep going!</p>}
                  </Card.Content>
                </Card>
              )}
            </Card.Group>}
      </div>
    );
  }
}

const userProgressQuery = gql`
  query GetProgressForUser($userId: Int!) {
    allProgress(userId: $userId) {
      name
      count
      required
      date_achieved
    }
  }
`;

const ProgressListWithQuery = graphql(userProgressQuery)(ProgressList);

export { userProgressQuery, ProgressListWithQuery as default };
