const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

// mock to delete
const mockExams = [
	{
		student: {
			first_name: "Marie",
			last_name: "Dupont",
		},
		meeting_point: "Auto-école Central - 15 rue de la République",
		date: "2024-08-15T14:30:00",
		status: "confirmé",
	},
	{
		student: {
			first_name: "Pierre",
			last_name: "Martin",
		},
		meeting_point: "Centre d'examen Bordeaux Nord",
		date: "2024-08-20T09:15:00",
		status: "à organiser",
	},
	{
		student: {
			first_name: "Sophie",
			last_name: "Bernard",
		},
		meeting_point: "Préfecture - Place Pey Berland",
		date: "2024-08-12T16:45:00",
		status: "annulé",
	},
	{
		student: {
			first_name: "Thomas",
			last_name: "Rousseau",
		},
		status: "Recherche de place",
	},
];

let items = [...mockExams];

app.get("/api/exams", (req, res) => {
	res.json(items);
});

app.post("/api/exams", (req, res) => {
	const newItem = req.body;
	items.push(newItem);
	res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

