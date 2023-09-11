import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

export type SignInProps = {
  id: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSignIn: (e: FormEvent) => void;
};

const SignIn = ({ id, password, onChange, onSignIn }: SignInProps) => {
  return <Form onSubmit={onSignIn}>SignIn</Form>;
};

export default SignIn;

const Form = styled.form``;
