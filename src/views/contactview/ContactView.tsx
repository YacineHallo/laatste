import { useState } from "react";
//https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
//https://react-hook-form.com/
//https://mui.com/

export const ContactView = () => {
  return <h1>Contact</h1>;

  // <T,>(
  //   callback: () => Promise<any>,
  //   initialState: T
  // ) => {
  //   const [values, setValues] = useState(initialState);

  //   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [event.target.name]: event.target.value });
  //   };

  //   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     await callback(); // triggering the callback
  //   };
  //   // return values
  //   return {
  //     onChange,
  //     onSubmit,
  //     values
  //   };
};
