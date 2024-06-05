const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const places = [
	{
		imageURL: "images/trip1.jpg",
		description: "Normal path through the nature"
	},

	{
		imageURL: "images/trip2.jpg",
		description: "Hills and mountain path"
	},

	{
		imageURL: "images/trip3.jpg",
		description: "Forest path"
	},
];

function createplaceCard(filteredPlaces) {
	filteredPlaces.forEach (place => {
		let card = document. createElement("section");
		let img = document. createElement("img");
		let description = document. createElement("p");

		description.innerHTML = `${place.description}`

		img.setAttribute("src", place.imageURL);
		img.setAttribute("alt", "place");
		img.setAttribute("loading", "lazy");

		card.appendChild(img);
		card.appendChild(description);

		document.querySelector(".container-places").appendChild(card);

	});
}

createplaceCard(places);