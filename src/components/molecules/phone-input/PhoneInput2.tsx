/* eslint-disable react/prop-types */
import { useFormikContext } from 'formik';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormikError, Label } from '../../atoms';


const PhoneInput2 = ({ label, required, customClass }:any) => {
  const [phone, setPhone] = useState('');
  const { setFieldValue, errors, handleBlur, values, touched, validateField } = useFormikContext<any>();

  const handlePhoneChange = (value, selectedCountry, name, number) => {
  console.log("🚀 ~ handlePhoneChange ~ number:", number)

    const modifiedPhone = number?.trim()?.split(' ')?.join('')?.slice(4);
    setPhone(value);
    setFieldValue('phone', modifiedPhone);
    setFieldValue("dialing_code", "+" + selectedCountry?.dialCode);
    // validateField('phone');
  };
  const isError = !!touched.phone && !!errors.phone;
  const generateClassName = () => {
    const baseClasses = 'your-base-classes';
    const errorClasses = 'phone-input-error';
    return `${baseClasses} ${isError ? errorClasses : ''} ${customClass}`;
  };
  return (
    <div className="col-span-1 mt-2 ">
      <div className="flex flex-col ">
        <Label htmlFor=''>
          {label}
          <span className="mx-1 text-red-500">{required == '1' ? '*' : ''}</span>
        </Label>

        <PhoneInput
          country={'sa'}
          onlyCountries={['sa']}
          value={values?.phone ? values.dialing_code + values.phone : phone}
          onChange={handlePhoneChange}
          id="phone"
          placeholder="رقم الجوال"
          name="phone"
          onBlur={handleBlur}
          countryCodeEditable={false}
          masks={{ sa: '.. ... ....', at: '.. ... ....' }}
          showDropdown={false}
          disableCountryCode={false}
          inputProps={{
            name: 'phone'
          }}
          disableDropdown={true}
          className={generateClassName()}
        />
      </div>

      <div>
        {' '}
        <FormikError name={'phone'} />{' '}
      </div>
    </div>
  );
};

export default PhoneInput2;
