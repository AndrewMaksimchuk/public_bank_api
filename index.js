// 840 - ISO 4217 код валюти доллара США/USD;
// 978 - ISO 4217 код валюти євро/EUR;
// 980 - ISO 4217 код валюти гривні/UAH;


const url_monobank_online = 'https://api.monobank.ua/bank/currency';
const url_privatbank_online = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
const url_privatbank_department = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const currentTime = 'Дата: ' + new Date().toLocaleDateString();

// Показуємо курс валюти від monobank в онлайн
fetch(url_monobank_online)
	.then(response => response.json())
	.then(result => {
		console.log('Онлайн monobank: ', result[0]);
		document.getElementById('mono_online_buy').innerText = 'Купівля: ' + result[0].rateBuy;
		document.getElementById('mono_online_sell').innerText = 'Продаж: ' + result[0].rateSell;
		document.getElementById('mono_online_date').innerText = currentTime;
	});

// Показуємо курс валюти від privatbank в онлайн
fetch(url_privatbank_online)
	.then(response => response.json())
	.then(result => {
		console.log('Онлайн privatbank: ', result);
		document.getElementById('privat_online_buy').innerText = 'Купівля: ' + result[0].buy;
		document.getElementById('privat_online_sell').innerText = 'Продаж: ' + result[0].sale;
		document.getElementById('privat_online_date').innerText = currentTime;
	});

// Показуємо курс валюти від privatbank у відділеннях
fetch(url_privatbank_department)
	.then(response => response.json())
	.then(result => {
		console.log('Відділеннях privatbank: ', result);
		document.getElementById('privat_department_buy').innerText = 'Купівля: ' + result[0].buy;
		document.getElementById('privat_department_sell').innerText = 'Продаж: ' + result[0].sale;
		document.getElementById('privat_department_date').innerText = currentTime;
	});