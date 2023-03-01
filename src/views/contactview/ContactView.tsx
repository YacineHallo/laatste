//import { PageWrappernietOverzicht } from "../../components/pagewrapper/PageWrapperNietOverzicht";
//https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
//https://react-hook-form.com/
//https://mui.com/
//import "../../App.scss";

//import ReactDOM from 'react-dom/client';

export const ContactView = () => {
  return;
};

// const [voornaam, setVoornaam] = useState("");
// const [achternaam, setAchternaam] = useState("");

// const handleSubmit = (event: { preventDefault: () => void }) => {
//   event.preventDefault();
//   alert(`Je naam is: ${voornaam} ${achternaam}`);
// };

// return (
//   <form onSubmit={handleSubmit} className="main">
//     <label>
//       Voornaam:
//       <input
//         type="text"
//         value={voornaam}
//         placeholder="Schrijf je voornaam"
//         onChange={e => setVoornaam(e.target.value)}
//       />
//     </label>
//     <label>
//       Achternaam:
//       <input
//         required
//         type="text"
//         value={achternaam}
//         placeholder="Schrijf je achternaam"
//         onChange={e => setAchternaam(e.target.value)}
//       />
//     </label>
//     <input type="submit" />
//   </form>
// );

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
