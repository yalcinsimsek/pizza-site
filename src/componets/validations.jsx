import * as yup from 'yup';
const validations = yup.object().shape({
    email: yup.string().email('Geçerli bir mail giriniz.').required('Zorunlu alan.'),
    password: yup.string().min(5 , 'min. 5 karakter').required('Zorunlu alan.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')] , 'Parolalar uyuşmuyor').required('Zorunlu alan.'),
    phone: yup.number().typeError('Sayı olmalı').required('Zorunlu alan.'),
    // name: yup.string().required('Zorunlu alan.'),
    // surname: yup.string().required('Zorunlu alan.'),
    // emailL: yup.string().email('Geçerli bir mail giriniz.').required('Zorunlu alan.'),
    // passwordL: yup.string().min(5 , 'min. 5 karakter').required('Zorunlu alan.'),


  });

  export default validations;