import React from "react";


export default function Timer() {
const [seconds, setSeconds] = React.useState(1);


 React.useEffect(() => {
   if (seconds > 0) {
     setTimeout(() => setSeconds(seconds + 1), 1000);
   }

   else {
    document.write("Cannot work when timer on 0")
   }

  
 });
return(
  <div className="Timer">
  <p>You have used {seconds} seconds on the website</p> 
</div>
)
}
 