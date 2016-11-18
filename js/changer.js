document.addEventListener("DOMContentLoaded", (function (prices) {
	"use strict";

	//default monath and currency
	var currency = "gbp",
		month = "month-1";

	//DOM elements
	var table = document.getElementById("transrussian").querySelectorAll("td"),
		cost = document.getElementById("cost"), //currencies
		season = document.getElementById("month");

	priceSwich();

	//event - to switch currency
	cost.addEventListener("click", function () {
		for (let i = 0; i < this.children.length; i++) {
			if ((this.children[i].selected === true) && (this.children[i].value !== currency)) {
				currency = this.children[i].value;
				priceSwich();
			}
		}
	});

	//event - to switch season
	if (season) {
		season.addEventListener("click", function () {
			for (let i = 0; i < this.children.length; i++) {
				if ((this.children[i].selected === true) && (this.children[i].value !== month)) {
					month = this.children[i].value;
					priceSwich();
				}
			}
		});
	}

	//add prices in table
	function priceSwich() {
		let id;
		for (let i = 0; i < table.length; i++) {
			if (table[i].id !== "") {
				id = table[i].id;
				table[i].innerText = prices[month][currency][id];
			}
		}
	}

})(window.transrussian_prices));