import "./Skeleton.scss";

export const Skeleton = () => {
	return (
		<div className="character__skeleton">
			<p className="character__select">
				Please select a character to see information
			</p>
			<div className="skeleton">
				<div className="pulse skeleton__header">
					<div className="pulse skeleton__circle"></div>
					<div className="pulse skeleton__mini"></div>
				</div>
				<div className="pulse skeleton__block"></div>
				<div className="pulse skeleton__block"></div>
				<div className="pulse skeleton__block"></div>
			</div>
		</div>
	);
};
