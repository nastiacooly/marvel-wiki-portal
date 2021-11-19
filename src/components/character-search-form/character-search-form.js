import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import {useState} from 'react';

import useMarvelAPIService from '../../services/marvel-api-service';

import './character-search-form.scss';

const CharacterSearchForm = () => {
    const {getCharacterByName, clearError} = useMarvelAPIService();

    const [character, setCharacter] = useState(null);

    const onCharacterFound = (character) => {
        /**
         * Saves character data to state
         * of this component.
         */
        setCharacter(character);
    }

    const getCharacterData = (name) => {
        /**
         * Gets data (object) from Marvel API on character
         * by its name 
         * and saves it to the state of this component.
         */
        clearError();
        setCharacter({});

        getCharacterByName(name)
        .then(onCharacterFound);
    }

    return (
        <>
            <Formik
                initialValues={{name: ""}}
                validationSchema={yup.object({
                    name: yup.string()
                            .required('Обязательное поле!'),
                })}
                onSubmit={values => getCharacterData(values.name)}>
                <Form>
                    <h5>Or find a character by name:</h5>
                    <Field 
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter name"
                    />
                    <ErrorMessage name="name" component="div"/>
                    <button type="submit" className="app-button app-button_main">Find</button>
                    {character?.id ? <a href={`/characters/${character.id}` } className="app-button">To Page</a> : null}
                </Form>
            </Formik>
        </>
    );

}

export default CharacterSearchForm;