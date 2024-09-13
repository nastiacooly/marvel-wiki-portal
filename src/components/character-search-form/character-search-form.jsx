import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMarvelAPIService from "../../services/marvel-api-service";

import Spinner from "../spinner/spinner";
import ErrorView from "../error-view/error-view";

import "./character-search-form.scss";

const CharacterSearchForm = () => {
	const { process, setProcess, getCharacterByName, clearError } =
		useMarvelAPIService();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		setProcess("success");
	}, []);

	const onCharacterFound = (character) => {
		/**
		 * Saves character data to state
		 * of this component.
		 */
		setCharacter(character);
	};

	const getCharacterData = (name) => {
		/**
		 * Gets data (object) from Marvel API on character
		 * by its name
		 * and saves it to the state of this component.
		 */
		clearError();
		setCharacter({});

		getCharacterByName(name)
			.then(onCharacterFound)
			.then(() => setProcess("success"));
	};

	return (
		<>
			<Formik
				initialValues={{ name: "" }}
				validationSchema={yup.object({
					name: yup.string().required("This field is required"),
				})}
				onSubmit={(values) => getCharacterData(values.name)}
			>
				<Form className="form">
					<h5 className="form__header">Or find a character by name:</h5>
					<div className="form__main">
						<Field
							id="name"
							name="name"
							type="text"
							placeholder="Enter name"
							className="form__input"
						/>
						<button
							type="submit"
							className="app-button app-button_main"
							disabled={process === "loading"}
						>
							Find
						</button>
					</div>

					<div className="form__result">
						<ErrorMessage name="name" component="div" className="form__error" />
						{!character ? (
							<div className="form__error">
								The character was not found. Please, check the name and try
								again.
							</div>
						) : null}
						{character?.id ? (
							<>
								<div className="form__success">
									Found! Click to visit {character.name}'s page.
								</div>
								<Link to={`/characters/${character.id}`} className="app-button">
									To Page
								</Link>
							</>
						) : null}
					</div>
					<Spinner process={process} />
					<ErrorView process={process} />
				</Form>
			</Formik>
		</>
	);
};

export default CharacterSearchForm;
