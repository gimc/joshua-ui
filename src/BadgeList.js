import React from "react";
import { gql, graphql } from "react-apollo";
import Badge from "./Badge";

function BadgeList({ data: { badges } }) {
  return (
    <div>
      {badges === undefined
        ? <p>Could not find badges :-(</p>
        : <ul>
            {badges.map(badge =>
              <li key={badge.id}>
                <Badge props={badge} />
              </li>
            )}
          </ul>}
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
