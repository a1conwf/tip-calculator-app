import React, {useState, useEffect} from "react";
import Form from "./components/Form/Form";
import OutputArea from "./components/OutputArea/OutputArea";

//styles
import "./App.scss";

//logo
import Logo from "./assets/brand/logo.svg";

const App = () => {
	//form
	const [bill, setBill] = useState("");
	const [selectedTip, setSelectedTip] = useState({
		tip: "",
		customTip: "",
	});
	const [peopleNum, setPeopleNum] = useState("");

	//output
	const [tipPerPerson, setTipPerPerson] = useState("");
	const [totalPerPerson, setTotalPerPerson] = useState("");

	//calculated tip
	const [calculatedBillTip, setCalculatedBillTip] = useState("");

	//Calculate tip, tip per person, total per person
	const calculateBill = (tipAmount) => {
		if (bill > 0 && tipAmount > 0 && peopleNum > 0) {
			setCalculatedBillTip(bill * (tipAmount / 100));
			setTotalPerPerson(((bill + calculatedBillTip) / peopleNum).toFixed(2));
			setTipPerPerson((calculatedBillTip / peopleNum).toFixed(2));
		} else {
			setTotalPerPerson("");
			setTipPerPerson("");
		}
	};

	useEffect(() => {
		if (selectedTip.tip) {
			calculateBill(selectedTip.tip);
		} else if (selectedTip.customTip) {
			calculateBill(selectedTip.customTip);
		}
	}, [bill, selectedTip, peopleNum, calculatedBillTip]);

	//Reset form
	const handleResetBtn = () => {
		setBill("");
		setSelectedTip({
			tip: "",
			customTip: "",
		});
		setPeopleNum("");
		setCalculatedBillTip("");
		setTotalPerPerson("");
		setTipPerPerson("");
	};

	//Check if form inputs are empty
	const checkEmptyForm = () => {
		return bill === "" || isNaN(bill) || peopleNum === "" || (selectedTip.tip === "" && selectedTip.customTip === "");
	};

	return (
		<main>
			<img className="logo" src={Logo} alt="app-logo" />
			<div className="calculator">
				<Form bill={bill} setBill={setBill} peopleNum={peopleNum} setPeopleNum={setPeopleNum} selectedTip={selectedTip} setSelectedTip={setSelectedTip} />
				<OutputArea totalPerPerson={totalPerPerson} tipPerPerson={tipPerPerson} checkEmptyForm={checkEmptyForm} handleResetBtn={handleResetBtn} />
			</div>
		</main>
	);
};

export default App;
