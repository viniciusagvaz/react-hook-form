import { useState } from "react";
import { FormPreview } from "../../components/common/FormPreview";
import { Form, Inputs } from "../../components/ui/Form/Form";
import * as S from "./styles";

export const Home = () => {
  const [formData, setFormData] = useState<Inputs>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    password: "",
  });

  const handleFormSubmit = (data: Inputs) => {
    setFormData(data);
  };

  return (
    <S.MainContainer>
      <Form onFormSubmit={handleFormSubmit} />
      <FormPreview formData={formData} />
    </S.MainContainer>
  );
};
