import styled from 'styled-components';

export const Title = styled.h1`
  padding-top: ${props => props.theme.space[6]}px;
  padding-bottom: ${props => props.theme.space[6]}px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
`;

export const PhonebookContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormWrapper = styled.div`
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  padding-left: ${props => props.theme.space[5]}px;

  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  border-radius: ${props => props.theme.radii.normal};
`;

export const Text = styled.p`
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 18px;
`;

export const ContactInput = styled.input`
  display: block;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  font-size: 20px;

  border: 1px solid #21212133;
  border-radius: 4px;

  outline: transparent;

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: ${props => props.theme.colors.secondary};

  &:focus {
    border: 1px solid ${props => props.theme.colors.accentColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  min-width: 120px;
  height: 40px;

  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.accentColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #eef7ff;
    color: ${props => props.theme.colors.accentColor};
  }
`;
