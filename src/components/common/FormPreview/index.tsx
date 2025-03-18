import React from "react";
import * as S from "./styles";
interface FormPreviewProps {
  formData: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    country: string;
    password: string;
  };
}

export const FormPreview: React.FC<FormPreviewProps> = ({ formData }) => {
  return (
    <S.FormPreviewContainer>
      <S.FormPreview>
        <h2>Form Preview</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </S.FormPreview>
    </S.FormPreviewContainer>
  );
};
