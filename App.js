/**
 * <div id="parent"> 
 *    <div id="child"> 
 *      <h1>I'm h1 tag <h1>
 *      <h2>I'm h1 tag <h2>
 *    <div>
 * </div>
 * 
 * 
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm H1 Tag"), React.createElement("h2", {}, "I'm H2 Tag")])
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);