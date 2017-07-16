import React from "react";
import { gql, graphql } from "react-apollo";
import { Button, Card, Image, Progress } from "semantic-ui-react";
import sapling from "./images/sapling.png";

function ProgressList({ data: { allProgress } }) {
  return (
    <div>
      {allProgress === undefined
        ? <p>Could not find progress :-(</p>
        : <Card.Group>
            {allProgress.map(progress =>
              <Card color={progress.achieved ? "green" : "gray"}>
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
                    color={progress.achieved ? "green" : "gray"}
                  />
                </Card.Content>
              </Card>
            )}
          </Card.Group>}
      <Button>Refresh</Button>
    </div>
  );
}

export default graphql(gql`
  query GetProgressForUser($userId: Int!) {
    allProgress(userId: $userId) {
      name
      count
      required
      achieved
    }
  }
`)(ProgressList);
