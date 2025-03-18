import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import logo from "../../../assets/react.svg";

export type Inputs = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  password: string;
};

interface FormProps {
  onFormSubmit: (data: Inputs) => void;
}

export const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const countries = [
    {
      id: 1,
      country: "Brasil",
      flag: "🇧🇷",
    },
    {
      id: 2,
      country: "Estados Unidos",
      flag: "🇺🇸",
    },
    {
      id: 3,
      country: "França",
      flag: "🇫🇷",
    },
    {
      id: 4,
      country: "Alemanha",
      flag: "🇩🇪",
    },
    {
      id: 5,
      country: "Itália",
      flag: "🇮🇹",
    },
    {
      id: 6,
      country: "Japão",
      flag: "🇯🇵",
    },
    {
      id: 7,
      country: "China",
      flag: "🇨🇳",
    },
    {
      id: 8,
      country: "Índia",
      flag: "🇮🇳",
    },
    {
      id: 9,
      country: "Espanha",
      flag: "🇪🇸",
    },
    {
      id: 10,
      country: "Rússia",
      flag: "🇷🇺",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onFormSubmit(data);
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader className="flex">
          <img src={logo} alt="React" className="logo" />
          <h1>React-Hook-Form</h1>
        </S.FormHeader>

        <S.FormGroup>
          <S.Input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            type="text"
          />
          {errors.name && <S.Error>{errors.name.message}</S.Error>}

          <S.Input
            {...register("lastName", { required: "Last Name is required" })}
            placeholder="Last Name"
            type="text"
          />
          {errors.lastName && <S.Error>{errors.lastName.message}</S.Error>}
        </S.FormGroup>

        <S.Input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" },
          })}
          placeholder="Email"
        />
        {errors.email && <S.Error>{errors.email.message}</S.Error>}

        <select {...register("country", { required: "Country is required" })}>
          {countries.map((country) => (
            <option key={country.id} value={country.country}>
              {country.flag} | {country.country}
            </option>
          ))}
        </select>

        {errors.country && <S.Error>{errors.country.message}</S.Error>}

        <S.Input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <S.Error>{errors.password.message}</S.Error>}

        <S.SubmitButton type="submit">Submit</S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};
