import "./styles.css";
import TimeWrapper from "./Timer/TimeWrapper";

export default function App() {
  const onExpire = () => {
    console.log("expired");
  };
  return (
    <div className="App">
      <h1>Count Down</h1>
      <TimeWrapper onExpire={onExpire} duration={30 * 1000} />
    </div>
  );
}
