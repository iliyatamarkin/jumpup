import dynamic from "next/dynamic";
import React, { useState } from 'react';

const Login = dynamic(
  () => {
    return import("./Login");
  },
  { ssr: false }
);


 const Header = () => {

    const [showModal, setHowModal] = useState(false);



    return <div className="flex justify-between">
      <h1>find a trainer</h1>
         <Login title={"Trainer? Login"}>Trainer? Login</Login>

    </div>
}
export default Header;