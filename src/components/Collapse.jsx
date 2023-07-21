import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Collapse({title, content}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapse(item) {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="wrapper">
      <div className="title" onClick={toggleCollapse}>
        {title}
        {isCollapsed ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </div>
      {isCollapsed && <div className="content">{content}</div>}
    </div>
  );
}

export default Collapse;