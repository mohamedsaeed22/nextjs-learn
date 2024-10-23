"use client"

interface IProps {
  text: string;
//   onBtnClick: () => void;
}

const Button = ({ text}: IProps) => {
  return <button onClick={()=> console.log("dddd")}>{text}</button>;
};

export default Button;
