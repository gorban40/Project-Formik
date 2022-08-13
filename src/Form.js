import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // {...formik.getFieldProps('name')} //---> место трёъх строк 
            />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
};

const Forms = () => {

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         amount: 0,
    //         currency: '',
    //         text: '',
    //         terms: false
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //                  .min(2, 'Min required symbol is 2')
    //                  .required('Required'),
    //         email: Yup.string()
    //                   .email('Wrong email')
    //                   .required('Required'),
    //         amount: Yup.number()
    //                    .min(5, 'Not less 5')
    //                    .required('Required'),
    //         currency: Yup.string().required('Chose currency'),
    //         text: Yup.string()
    //                  .min(10, 'Not less 10 symbols'),
    //         terms: Yup.boolean()
    //                     .required('Need agree with politic !')
    //                     .oneOf([true], 'Need agree with politic !')
    //     }),
    //     onSubmit: values => console.log(JSON.stringify(values, null, 2))
    // })

    return (

        // <form className="form" onSubmit={formik.handleSubmit}>
        //     <h2>Отправить пожертвование</h2>
        //     <label htmlFor="name">Ваше имя</label>
        //     <input
        //         id="name"
        //         name="name"
        //         type="text"
        //         // value={formik.values.name}
        //         // onChange={formik.handleChange}
        //         // onBlur={formik.handleBlur}
        //         {...formik.getFieldProps('name')} //---> место трёъх строк
        //     />
        //     {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
        //     <label htmlFor="email">Ваша почта</label>
        //     <input
        //         id="email"
        //         name="email"
        //         type="email"
        //         value={formik.values.email}
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //     />
        //     {formik.errors.email && formik.touched.email ?  <div className='error'>{formik.errors.email}</div> : null}
        //     <label htmlFor="amount">Количество</label>
        //     <input
        //         id="amount"
        //         name="amount"
        //         type="number"
        //         value={formik.values.amount}
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //     />
        //     {formik.errors.amount && formik.touched.amount ? <div className='error'>{formik.errors.amount}</div> : null}
        //     <label htmlFor="currency">Валюта</label>
        //     <select
        //         id="currency"
        //         name="currency"
        //         value={formik.values.currency}
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}>
        //         <option value="">Выберите валюту</option>
        //         <option value="USD">USD</option>
        //         <option value="UAH">UAH</option>
        //         <option value="RUB">RUB</option>
        //     </select>
        //     {formik.errors.currency && formik.touched.currency ? <div className='error'>{formik.errors.currency}</div> : null}
        //     <label htmlFor="text">Ваше сообщение</label>
        //     <textarea
        //         id="text"
        //         name="text"
        //         value={formik.values.text}
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //     />
        //     {formik.errors.text && formik.touched.text ? <div className='error'>{formik.errors.text}</div> : null}
        //     <label className="checkbox">
        //         <input name="terms"
        //             type="checkbox"
        //             value={formik.values.terms}
        //             onChange={formik.handleChange}
        //             onBlur={formik.handleBlur} />
        //         Соглашаетесь с политикой конфиденциальности?
        //     </label>
        //     {formik.errors.terms && formik.touched.terms ? <div className='error'>{formik.errors.terms}</div> : null}
        //     <button type="submit">Отправить</button>
        // </form>
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Min required symbol is 2')
                    .required('Required'),
                email: Yup.string()
                    .email('Wrong email')
                    .required('Required'),
                amount: Yup.number()
                    .min(5, 'Not less 5')
                    .required('Required'),
                currency: Yup.string().required('Chose currency'),
                text: Yup.string()
                    .min(10, 'Not less 10 symbols'),
                terms: Yup.boolean()
                    .required('Need agree with politic !')
                    .oneOf([true], 'Need agree with politic !')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}>

            <Form className="form">
                <h2>Отправить пожертвование</h2>
                {/* <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // {...formik.getFieldProps('name')} //---> место трёъх строк
                />
                <ErrorMessage  className='error' name='name' component='div' /> */}
                <MyTextInput 
                    label='Ваше имя'
                    id="name"
                    name="name"
                    type="text"
                />
                {/* <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
                <ErrorMessage  className='error' name='email' component='div' /> */}
                <MyTextInput 
                    label='Ваша почта' 
                    id="email"
                    name="email"
                    type="email"/>
                {/* <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                    // value={formik.values.amount}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
                <ErrorMessage  className='error' name='amount' component='div' /> */}
                <MyTextInput 
                    label="Количество"
                    id="amount"
                    name="amount"
                    type="number" />



                    
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                    // value={formik.values.currency}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage  className='error' name='currency' component='div' />
                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                    // value={formik.values.text}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    as="textarea"
                />
                <ErrorMessage  className='error' name='text' component='div' />
                <label className="checkbox">
                    <Field name="terms"
                        type="checkbox"
                        // value={formik.values.terms}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur} 
                        />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage  className='error' name='term' component='div' />
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default Forms;