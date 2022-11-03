import React from "react";

export default function Timer() {
  const [seconds, setSeconds] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });
  return (
    <div className="Timer">
      <p>You have used {seconds} seconds on the website</p>
    </div>
  );
}
