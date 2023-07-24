import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../css/collapse.scss";

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="wrapper">
      <div className="title" onClick={toggleCollapse}>
        {title}
        <FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp} />
      </div>
      <div className={`content ${isCollapsed ? "" : "collapsed"}`}>
        <div className="contentStyle">{content}</div>
      </div>
    </div>
  );
}
export default Collapse;
