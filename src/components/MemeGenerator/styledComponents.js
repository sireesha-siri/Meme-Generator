// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 125vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const FormLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const FormInput = styled.input`
  color: #000000;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
`

export const FormSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
export const FormOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
