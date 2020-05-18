import React from "react";
const value: {
  imageSrc: string | File;
  setImageSrc: (input: string | File) => any;
} = {
  imageSrc: "",
  setImageSrc: (imageSrc: string | File) => {},
};
const userDataContext = React.createContext(value);
export default userDataContext;
