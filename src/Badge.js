import React from "react";
import glamorous from "glamorous";

const BadgeName = glamorous.p({
  "font-weight": "bold"
});

function Badge({ props }) {
  return (
    <div>
      <BadgeName>
        {props.name}
      </BadgeName>
      <p>
        {props.description}
      </p>
      <p>
        {props.count} - {props.eventName}
      </p>
    </div>
  );
}

export default Badge;
