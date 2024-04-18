import "./graph.styles.css";
import graph from "../../assets/graph.png";

const Graph = () => {

    return (
        <div className="graph-container">
        <img src={graph} alt="Graph" className="graph"/>
      </div>
    )
}

export default Graph;
