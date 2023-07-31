import React from 'react';
import header from '../../assests/images/header.png'; // Assuming the correct path to your local header image

const Auth = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex w-full h-screen md:w-2/3 py-8 mx-auto">
        <div className="h-full bg-no-repeat">
          <img
            draggable="false"
            className="mx-auto mt-4 md:mt-[0rem] ml-[155px]"
            src={header}
            alt="Header"
          />
        </div>

        <div className="flex flex-col gap-3 w-full md:w-2/5">{children}</div>
      </div>
    </div>
  );
};

export default Auth;
