import styled from "styled-components";

export const PageWrapper = styled.div``;

export const WhichPhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background: #36454f;
  color: white;
`;

export const PhoneSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const WhichPhoneLogo = styled.img`
  max-height: 50%;
  max-width: 100%;
`;

export const HeaderText = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: larger;
`;

// Phone Styles
export const PhoneContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #36454f;
`;
export const PhoneLogo = styled.img`
  max-height: 25%;
  max-width: 25%;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CostYearInput = styled.input`
  margin: 1rem;
  min-width: 100%;
  min-height: 100%;
  border: solid 2px #f6f1c1;
  border-radius: 8px;
  background: #e9e9e9;
  text-align: center;
  font-size: larger;
`;

export const SubmitButton = styled.button`
  min-height: 2rem;
  min-width: 5rem;
  border: solid 2px white;
  background: #f6f1c1;
  border-radius: 5px;
  margin: 1rem;
  color: black;
`;

export const TextOutputIndividual = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: medium;
`;

export const TextOutPutContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 2px solid;
  border-radius: 8px;
  color: white;
`;
