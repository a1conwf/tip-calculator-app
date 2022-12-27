import React, {useState} from "react";

//styles
import "./Form.scss";

//icons
import iconDollar from "../../assets/svg/icon-dollar.svg";
import iconPerson from "../../assets/svg/icon-person.svg";

const Form = (props) => {
	const {bill, setBill, peopleNum, setPeopleNum, selectedTip, setSelectedTip} = props;

	//people num error
	const [peopleNumError, setPeopleNumError] = useState(false);

	const handleBillChange = (e) => {
		setBill((prevBill) => parseFloat(e.target.value));
	};

	const handleTipSelected = (e) => {
		const tipValue = e.target.value;

		if (e.target.name === "tip") {
			setSelectedTip({
				tip: tipValue,
				customTip: "",
			});
		} else if (e.target.name === "customTip") {
			setSelectedTip({
				tip: "",
				customTip: tipValue,
			});
		}
	};

	const handlePeopleChange = (e) => {
		if (e.target.value !== "0") {
			setPeopleNumError(false);
			setPeopleNum((prevNum) => e.target.value);
		} else {
			setPeopleNumError(true);
		}
	};

	return (
		<form className="form">
			<div className="form__group">
				<div className="form__group-header">
					<label className="form__group-lbl" htmlFor="bill">
						Bill
					</label>
				</div>

				<div className="form__group-input">
					<input type="number" name="bill" value={bill} placeholder="0" onChange={handleBillChange} onWheel={(e) => e.target.blur()} />
					<img src={iconDollar} alt="dollar-icon" />
				</div>
			</div>

			<div className="form__group tips">
				<label className="form__group-lbl tips-lbl">Select Tip %</label>

				<div className="tips-grid">
					<input type="number" name="customTip" value={selectedTip.customTip} placeholder="Custom" onInput={handleTipSelected} onWheel={(e) => e.target.blur()} />
					<input type="radio" name="tip" id="tip5" value={5} onClick={handleTipSelected} />
					<label htmlFor="tip5">5%</label>

					<input type="radio" name="tip" id="tip10" value={10} onClick={handleTipSelected} />
					<label htmlFor="tip10">10%</label>

					<input type="radio" name="tip" id="tip15" value={15} onClick={handleTipSelected} />
					<label htmlFor="tip15">15%</label>

					<input type="radio" name="tip" id="tip25" value={25} onClick={handleTipSelected} />
					<label htmlFor="tip25">25%</label>

					<input type="radio" name="tip" id="tip50" value={50} onClick={handleTipSelected} />
					<label htmlFor="tip50">50%</label>
				</div>
			</div>

			<div className="form__group">
				<div className="form__group-header">
					<label className="form__group-lbl" htmlFor="peopleNum">
						Number of People
					</label>
					<p className="form__group-error">{peopleNumError ? "Can't be zero" : ""}</p>
				</div>

				<div className={peopleNumError ? "form__group-input error" : "form__group-input"}>
					<input type="number" id="peopleNum" name="peopleNum" placeholder="0" value={peopleNum} onChange={handlePeopleChange} onWheel={(e) => e.target.blur()} />
					<img src={iconPerson} alt="dollar-icon" />
				</div>
			</div>
		</form>
	);
};

export default Form;
