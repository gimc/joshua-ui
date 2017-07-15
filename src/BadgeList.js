import React from "react";
import { gql, graphql } from "react-apollo";

function BadgeList({ data: { badges, refetch } }) {
  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      {badges === undefined
        ? <p>Could not find badges :-(</p>
        : <ul>
            {badges.map(badge =>
              <li>
                {badge.name}
              </li>
            )}
          </ul>}
    </div>
  );
}

export default graphql(gql`
  query BadgeListQuery {
    badges {
      name
      description
    }
  }
`)(BadgeList);
