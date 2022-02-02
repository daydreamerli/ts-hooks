import UserContext, { UserState } from "./store";
import { useContext, useState } from "react";

function ConsumerComponet() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>Best Live Performance Singer in 20th Century</div>
      <div>{user.first}</div>
      <div>{user.last}</div>
    </div>
  );
}

function UseContextComp() {
  const [user, userSet] = useState<UserState>({
    first: "Micheal",
    last: "Jackson",
  });

  return (
    <div>
      <UserContext.Provider value={user}>
        <ConsumerComponet />
        <button
          onClick = {()=>userSet({
            first:"Nirvana",
            last:"Pink Floyed"
          })}
        >Change Context</button>
      </UserContext.Provider>
    </div>
  );
}

export default UseContextComp;
