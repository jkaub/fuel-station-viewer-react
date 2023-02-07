import "./StationsMap.css"
import Plot from "react-plotly.js";
import figJson from "./fig.json"
export default function StationsMap() {

  const data = figJson["data"]
  const layout = figJson["layout"]

  layout["autosize"]=true
  layout["margin"]={"b":0,"t":0,"l":0,"r":0}
  delete layout.template
  delete layout.width
  delete layout.height

  return (
    <div className="component-embbeder">
      <Plot
      data={data}
      layout={layout}
      style={{ height: "100%", width: "100%" }}
      useResizeHandler={true}
      />
    </div>
  )
}


