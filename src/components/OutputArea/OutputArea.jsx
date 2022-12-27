import React, {useState} from "react";

//styles
import "./OutputArea.scss";

const OutputArea = (props) => {
	const {totalPerPerson, tipPerPerson, checkEmptyForm, handleResetBtn} = props;

	return (
		<div className="output">
			<div className="output__tip">
				<div className="output__tip-info">
					<span className="output__tip-info-name">Tip Amount</span>
					<span className="output__tip-info-unit">/ person</span>
				</div>
				<span className="output__tip-num">${tipPerPerson ? tipPerPerson : "0.00"}</span>
			</div>

			<div className="output__tip">
				<div className="output__tip-info">
					<span className="output__tip-info-name">Total</span>
					<span className="output__tip-info-unit">/ person</span>
				</div>
				<span className="output__tip-num">${totalPerPerson ? totalPerPerson : "0.00"}</span>
			</div>

			{checkEmptyForm() ? (
				<button className="btn-reset" disabled>
					Reset
				</button>
			) : (
				<button className="btn-reset" onClick={handleResetBtn}>
					Reset
				</button>
			)}
		</div>
	);
};

export default OutputArea;
