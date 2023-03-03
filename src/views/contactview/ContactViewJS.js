/* eslint-disable no-undef */
import { useState } from "react";
//import { RadioComponent } from "../../components/formulierencomponenten/radiocomponent/RadioComponent";
//import { PageWrappernietOverzicht } from "../../components/pagewrapper/PageWrapperNietOverzicht";
//https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
//https://react-hook-form.com/
//https://mui.com/
//import "../../App.scss";
import {
  ErrorMessage,
  TextField,
  FormTitle,
  Card,
  CardContent,
  Heading,
  Paragraph,
  TextArea,
  RadioGroup,
  Label,
  Radio
} from "@amsterdam/asc-ui";
//import ErrorComponent from "../../components/formcomponenten/errorcomponent/ErrorComponent";

//import ReactDOM from 'react-dom/client';

export const ContactViewJS = () => {
  const [voorletters, setVoorletters] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [straat, setStraat] = useState("");
  const [opmerking, setOpmerking] = useState("");
  const [woonplaats, setWoonplaats] = useState("");
  const [email, setEmail] = useState("");
  const [telefoon, setTelefoon] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    alert(
      `Opmerking: ${opmerking} Uw naam is: ${voorletters} ${achternaam} Uw woont in: ${woonplaats} en dit is uw mailadres:${email} en telefoonnummer ${telefoon}`
    );
  };

  return (
    <div className="container__form">
      <form onSubmit={handleSubmit} className="main" id="contactForm">
        <FormTitle className="container__form__input">
          U kunt contact met ons opnemen middels dit formulier
        </FormTitle>
        <Card maxWidth={500} backgroundColor="level2" shadow>
          <CardContent className="container__form__input">
            <Heading as="h6">This is a card</Heading>
            <Paragraph>
              Mocht u een van deze characters aanstootgevend vinden, laat het
              ons dan weten. Alle andere opmerkingen zijn ook welkom
            </Paragraph>
          </CardContent>
        </Card>

        <p className="container__form__label">Opmerkingen</p>
        <TextArea
          className="container__form__input"
          label="Opmerking"
          required
          type="text"
          value={opmerking}
          placeholder="Vul hier uw  opmerking in"
          onChange={e => setOpmerking(e.target.value)}
        />

        <TextField
          className="container__form__input"
          label="Voorletters"
          required
          type="text"
          value={voorletters}
          placeholder="Vul hier uw  voorletters in"
          onChange={e => setVoorletters(e.target.value)}
        />

        <TextField
          className="container__form__input"
          label="Achternaam"
          required
          type="text"
          value={achternaam}
          placeholder="Vul hier uw achternaam in"
          onChange={e => setAchternaam(e.target.value)}
        />
        <p className="container__form__label"> Woonplaats </p>
        <RadioGroup
          name="woonplaats"
          required
          error
          className="container__form__input"
        >
          <Label htmlFor="Amsterdam" label="Amsterdam">
            <Radio
              id="Amsterdam"
              checked={woonplaats === "Amsterdam"}
              value="Amsterdam"
              onClick={() => setWoonplaats("Amsterdam")}
            />
          </Label>
          <Label htmlFor="Weesp" label="Weesp">
            <Radio
              id="Weesp"
              checked={woonplaats === "Weesp"}
              value="Weesp"
              onClick={() => setWoonplaats("Weesp")}
            />
          </Label>

          <Label htmlFor="Anders" label="Anders">
            <Radio
              id="Anders"
              checked={woonplaats === "Anders"}
              value="Anders"
              onClick={() => setWoonplaats("Anders")}
            />
          </Label>
        </RadioGroup>

        <ErrorMessage
          onClick={() => {
            if (id === "") {
              message = "Maak een keuze";
            }
          }}
        />

        <TextField
          className="container__form__input"
          label="Straat"
          value={straat}
          type="text"
          name="woonplaats"
          onChange={e => setStraat(e.target.value)}
          placeholder="Vul hier uw straat in"
        />
        <TextField
          className="container__form__input"
          label="Email"
          required
          value={email}
          type="email"
          name="woonplaats"
          onChange={e => setEmail(e.target.value)}
          placeholder="Vul hier uw emailadres in"
        />
        <TextField
          className="container__form__input"
          label="Telefoonnummer"
          value={telefoon}
          type="tel"
          name="telefoon"
          onChange={e => setTelefoon(e.target.value)}
          placeholder="Vul hier uw telefoonnummer in"
        />
        <input type="submit" className="container__form__btn" />
        <input
          type="reset"
          patterd="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          onclick="resetForm()"
          value="Reset form"
          className="container__form__btn container__form__btn__transparant"
        />
      </form>
    </div>
  );
};

// const [inputs, setInputs] = useState({});

//   const handleChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     alert(inputs);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="main">
//       <fieldset>
//         <label>
//           <p>
//             Enter your name<span className="required">*</span>:
//           </p>
//           <input
//             required
//             type="text"
//             name="username"
//             value={inputs.username || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Enter your age:
//           <input
//             type="number"
//             name="age"
//             value={inputs.age || ""}
//             onChange={handleChange}
//           />
//         </label>
//       </fieldset>

//       <fieldset>

//         <label>
//           Enter your street:
//           <input
//             type="text"
//             name="street"
//             value={inputs.street || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <input type="submit" />
//         <Datepicker id="with-value" value="13-03-2021" />
//       </fieldset>
//     </form>
//   );
// };

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
