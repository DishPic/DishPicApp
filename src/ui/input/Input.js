import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.View`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;
`;

const Label = styled.Text``;

export const StyledInput = styled.TextInput`
  width: 100%;
  border: 0;
  height: 75px;
  background-color: white;
  border-radius: 4px;
  padding: 24px;
`;

const Input = ({
  autoCapitalize,
  autoComplete,
  autoFocus,
  errorText,
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
}) => {
  const isActive = !!value || !!errorText;

  return (
    <InputContainer>
      <Label active={isActive} error={!!errorText} />
      <StyledInput
        active={isActive}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </InputContainer>
  );
};

export default Input;
