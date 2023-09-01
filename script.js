let selectedMenu = "promotion";

const menuClick = (value) => {
	const promotionText = document.getElementById("promotion-menu");
	const tinText = document.getElementById("tin-menu");
	const maacText = document.getElementById("maac-menu");

	promotionText.classList.remove("promotion-text-selected");
	tinText.classList.remove("promotion-text-selected");
	maacText.classList.remove("promotion-text-selected");
	if (value === 1) {
		promotionText.classList.add("promotion-text-selected");
	} else if (value === 2) {
		tinText.classList.add("promotion-text-selected");
	} else {
		maacText.classList.add("promotion-text-selected");
	}
};

const signUp = () => {
	const fullName = document.getElementById("fullName");
	const dob = document.getElementById("dob");
	const phone = document.getElementById("phone");
	const email = document.getElementById("email");
	const studyOption = document.getElementById("studyOption");

	fetch("https://maac.getflycrm.com/api/opp/regis", {
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			data_form: {
				user_id: "3",
				recipient: "",
				token_api: "Nqbnhdxqdj",
				opportunity_status: "46",
				opp_type_source: "https://www.google.com",
				opp_source_content: "https://maac.edu.vn",
				account_type: "",
				key: "yUjfR6tWq1oezjLV84nAucJJTSgO0rWAZOdSxN6zVnQFaGYHD3",
				opp_url_source: "https://maac.edu.vn/en/",
				referrer_as_account_manager: false,
				account_name: fullName.value,
				account_phone: phone.value,
				account_email: email.value,
				account_birthday: dob.value,
				custom_fields: { nganh_hoc_ban_quan_tam: studyOption.value },
				utm_params: {
					utm_source: "",
					utm_campaign: "",
					utm_medium: "",
					utm_content: "",
					utm_term: "",
					utm_user: "",
					utm_account: "",
				},
			},
		}),
	})
		.then((response) => response.json())
		.then((response) => {
			alert("Thành công");
			const success = document.getElementById("success");
			success.classList.toggle("hidden");
		})
		.catch((err) => {
			const success = document.getElementById("fail");
			success.classList.toggle("hidden");
		});
};

let cthNumber = 1;

const cthClick = (direction) => {
	cthNumber += direction;
	if (cthNumber === 0) {
		cthNumber = 3;
	} else if (cthNumber === 4) {
		cthNumber = 1;
	}
	const section = document.getElementById("maac");
	section.className = "";
	section.classList.add("maac-" + cthNumber);

	const cth1 = document.getElementById("cth-1");
	const cth2 = document.getElementById("cth-2");
	const cth3 = document.getElementById("cth-3");
	const cth1Char = document.getElementById("cth-char-1");
	const cth2Char = document.getElementById("cth-char-2");
	const cth3Char = document.getElementById("cth-char-3");
	const cthTextChar1 = document.getElementById("cth-text-1");
	const cthTextChar3 = document.getElementById("cth-text-3");

	cth1.classList.add("hidden");
	cth2.classList.add("hidden");
	cth3.classList.add("hidden");

	cth1Char.classList.add("lg:hidden");
	cth2Char.classList.add("lg:hidden");
	cth3Char.classList.add("lg:hidden");

	cthTextChar1.classList.add("hidden");
	cthTextChar3.classList.add("hidden");

	const cth = document.getElementById("cth-" + cthNumber);
	const cthChar = document.getElementById("cth-char-" + cthNumber);
	const cthText = document.getElementById("cth-text-" + cthNumber);
	cth.classList.remove("hidden");
	cthChar.classList.remove("lg:hidden");
	console.log(cthNumber);
	if (cthNumber !== 2) {
		cthText.classList.remove("hidden");
	}
};

let selectedTeacher = 1;
const teacherHover = (index) => {
	const selectedTeacherElem = document.getElementById("teacher-" + selectedTeacher);
	selectedTeacherElem.classList.toggle("scale-110");
	selectedTeacherElem.classList.toggle("teacher-effect");
	const selectedDiamond = document.getElementById("diamond-teacher-" + selectedTeacher);
	if (selectedDiamond) {
		selectedDiamond.classList.toggle("hidden");
	}
	const selectedSquare = document.getElementById("square-teacher-" + selectedTeacher);
	if (selectedSquare) {
		selectedSquare.classList.toggle("hidden");
	}

	selectedTeacher = index;
	const hoverTeacher = document.getElementById("teacher-" + index);
	hoverTeacher.classList.toggle("scale-110");
	hoverTeacher.classList.toggle("teacher-effect");
	const hoverDiamond = document.getElementById("diamond-teacher-" + index);
	if (hoverDiamond) {
		hoverDiamond.classList.toggle("hidden");
	}
	const hoverSquare = document.getElementById("square-teacher-" + index);
	if (hoverSquare) {
		hoverSquare.classList.toggle("hidden");
	}
};

let selectedWhy = 1;
const whyClick = (index) => {
	const currentWhy = document.getElementById("why-" + selectedWhy);
	const currentImg = document.getElementById("why-img-" + selectedWhy);

	currentWhy.classList.toggle("border");
	currentImg.classList.toggle("hidden");

	selectedWhy = index;

	const newWhy = document.getElementById("why-" + index);
	const newImg = document.getElementById("why-img-" + index);

	newWhy.classList.toggle("border");
	newImg.classList.toggle("hidden");
};

let selectedLogo = 1;
const logoClick = (index) => {
	const currentLogo = document.getElementById("logo-" + selectedLogo);
	currentLogo.classList.toggle("hidden");

	selectedLogo = index;
	const newLogo = document.getElementById("logo-" + index);
	newLogo.classList.toggle("hidden");
};

setInterval(() => {
	let newSelected = selectedWhy;
	newSelected++;
	if (newSelected === 5) {
		newSelected = 1;
	}
	whyClick(newSelected);

	let newSelectedLogo = selectedLogo;
	newSelectedLogo++;
	if (newSelectedLogo === 3) {
		newSelectedLogo = 1;
	}
	logoClick(newSelectedLogo);
}, 3000);
