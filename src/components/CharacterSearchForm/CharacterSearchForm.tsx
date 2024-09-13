import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
	Character,
	useMarvelApiService,
} from "../../services/useMarvelApiService";
import { HttpRequestState } from "../../hooks/useHttpRequest";

import { Spinner } from "../Spinner/Spinner";
import { ErrorView } from "../ErrorView/ErrorView";

import "./CharacterSearchForm.scss";

export const CharacterSearchForm = () => {
	const { process, setProcess, getCharacterByName, clearError } =
		useMarvelApiService();

	const [character, setCharacter] = useState<Character | null>();

	useEffect(() => {
		setProcess(HttpRequestState.SUCCESS);
	}, []);

	const onCharacterFound = (character: Character | null) => {
		/**
		 * Saves character data to state
		 * of this component.
		 */
		setCharacter(character);
	};

	const getCharacterData = (name: string) => {
		/**
		 * Gets data (object) from Marvel API on character
		 * by its name
		 * and saves it to the state of this component.
		 */
		clearError();
		setCharacter(undefined);

		getCharacterByName(name)
			.then(onCharacterFound)
			.then(() => setProcess(HttpRequestState.SUCCESS));
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
							disabled={process === HttpRequestState.LOADING}
						>
							Find
						</button>
					</div>

					<div className="form__result">
						<ErrorMessage name="name" component="div" className="form__error" />
						{character === null ? (
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
