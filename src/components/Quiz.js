import { nanoid } from 'nanoid';
// Decodes text replacing entities to characters. Unknown entities are left as is.
import { decode } from 'html-entities';

function Quiz(props){

	// getting the incorrect answers
    const incorrectAnswersElements = props.incorrectAnswers.map(answer => {
		const incorrectAnswerClassName = `
			${props.selectedAnswer === answer ? "question-btn-selected" : "question-btn"}
			${(props.showAnswer && props.selectedAnswer === answer) && "question-btn-incorrect"}
		`;

		return <button
			key={nanoid()}
			className={incorrectAnswerClassName}
			onClick={() => props.handleSelectAnswer(props.id, answer)}
		>
			{ decode(answer) }
		</button>
	});

	// getting the correct answers
	const correctAnswerClassName = `
		${props.selectedAnswer === props.correctAnswer ? "question-btn-selected" : "question-btn"}
		${props.showAnswer && "question-btn-correct"}
	`;

	
	const correctAnswerElement =
		<button
			key={nanoid()}
			className={correctAnswerClassName}
			onClick={() => props.handleSelectAnswer(props.id, props.correctAnswer)}
		>
			{ decode(props.correctAnswer) }
		</button>
	
	incorrectAnswersElements.push(correctAnswerElement);

	const sortedAnswerElements = incorrectAnswersElements.sort((a, b) => (
		a.props.children.localeCompare(b.props.children))
	);

	return (
		<article className="question-container">
			<div>
				<h3 className="question-text">{ decode(props.question) }</h3>
				{ sortedAnswerElements }
			</div>
			
			{
				props.showAnswer &&
					(props.selectedAnswer === props.correctAnswer
						? <span>✅</span>
						: <span>❌</span>)
			}
		</article>
	);
}

export default Quiz;