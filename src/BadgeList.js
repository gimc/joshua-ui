import React from "react";
import { gql, graphql } from "react-apollo";
import { Card, Image } from "semantic-ui-react";
import sapling from "./images/sapling.png";

function BadgeList({ data: { badges } }) {
  return (
    <div>
      {badges === undefined
        ? <p>Could not find badges :-(</p>
        : <Card.Group>
            {badges.map(badge =>
              <Card>
                <Card.Content>
                  <Image src={sapling} floated="right" size="mini" />
                  <Card.Header>
                    {badge.name}
                  </Card.Header>
                  <Card.Meta>Tree achievements</Card.Meta>
                  <Card.Description>
                    {badge.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {badge.eventName}
                </Card.Content>
              </Card>
            )}
          </Card.Group>}
    </div>
  );
}

export default graphql(gql`
  query BadgeListQuery {
    badges {
      id
      name
      description
      count
      eventName
    }
  }
`)(BadgeList);
