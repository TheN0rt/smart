import { useEffect, useState } from "react"

const useValidation = (value, validations) => {
   const [isEmpty, setIsEmpty] = useState(true)
   const [phoneErr, setPhoneErr] = useState(false)
   const [nameErr, setNameErr] = useState(false)
   const [inputValid, setInputValid] = useState(true)

   useEffect(() => {
      for(const validation in validations){
         switch(validation){
            case 'isEmpty':
               value ? setIsEmpty(false) : setIsEmpty(true)
               break;
            case 'phone':
               const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
               re.test(String(value)) ? setPhoneErr(false) : setPhoneErr(true)
               break;
            case 'name':
               const reName = /^[\u0400-\u04FFA-Za-z]+$/i
               reName.test(String(value).toLowerCase()) ? setNameErr(false) : setNameErr(true)
               break;
            default:
               break;
         }
      }
   }, [value])

   useEffect(() => {

      if( isEmpty || phoneErr || nameErr ){
         setInputValid(false)
      }
      else{
         setInputValid(true)
      }


   }, [isEmpty, phoneErr, nameErr])

   return{
      isEmpty,
      phoneErr,
      nameErr,
      inputValid
   }
}

const useInput = (initialValue, validations) => {
   const [value, setValue] = useState(initialValue)
   const [isDirty, setIsDirty] = useState(false)

   const valid = useValidation(value, validations)

   const onChange = (e) => {
      setValue(e.target.value)
   }

   const onBlur = () => {
      setIsDirty(true)
   }

   return{
      value, 
      onChange,
      onBlur,
      isDirty,
      ...valid
   }
}

export default useInput