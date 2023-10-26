// Define an array to store notes
let notes = [];

// Function to add a new note
function addNote() {
	console.log('Button Clicked');
	// Get user input for the note
	const noteTitle = prompt('Enter the note title:');
	const noteContent = prompt('Enter the note content:');

	// Create a new note object
	const newNote = {
		title: noteTitle,
		content: noteContent,
	};

	// Add the new note to the notes array
	notes.push(newNote);

	// Redirect to the "Add Note" page with the added note
	window.location.href = `add_note.html?title=${encodeURIComponent(
		noteTitle
	)}&content=${encodeURIComponent(noteContent)}`;
}

const addNoteButton = document.getElementById('addNoteButton');
addNoteButton.addEventListener('click', addNote);
