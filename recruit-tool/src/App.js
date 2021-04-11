import { useEffect, useState } from "react";
import { getTransformedSkills } from "./getTransformedSkills";
import { groupBy } from "./utils";

const App = () => {
  const [input, setInput] = useState(localStorage.input);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    getTransformedSkills().then(setSkills);
  }, []);

  const foundSkills = groupBy(
    (s) => s.type,
    skills.filter((skill) => skill.regex.test(input))
  );

  return (
    <div>
      <textarea
        className="resume"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          localStorage.input = e.target.value;
        }}
      ></textarea>
      {Object.keys(foundSkills).map((typeName) => (
        <div key={typeName}>
          <div className="typeName">{typeName}</div>
          <div className="skillList">
            {foundSkills[typeName].map((s) => s.name).join(", ")}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};
export default App;
