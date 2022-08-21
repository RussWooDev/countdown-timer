import { useState } from "react";
import Timer from "./index";

function TimeWrapper({ onExpire, duration }) {
  //create the buttons
  const [expired, setExpire] = useState(false);

  const onExpireHelper = () => {
    onExpire();
    setExpire(true);
  };

  const handleRestart = () => {
    setExpire(false);
  };

  return !expired ? (
    <Timer onExpire={onExpireHelper} duration={duration} />
  ) : (
    <button onClick={handleRestart}> Restart </button>
  );
}

export default TimeWrapper;
