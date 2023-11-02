// Function to handle form submission and display added note
function addNote(event) {
    event.preventDefault(); // Prevent the form from submitting and page reloading

    // Get user input for the note title and content
    const noteTitle = document.getElementById("noteTitle").value;
    const noteContent = document.getElementById("noteContent").value;

    // Display the added note in a box
    const noteDisplay = document.getElementById("noteDisplay");
    const noteBox = document.createElement("div");
    noteBox.className = "note-box";
    noteBox.innerHTML = `<h2>${noteTitle}</h2><p>${noteContent}</p>`;
    noteDisplay.appendChild(noteBox);

    // Optionally, you can reset the form fields after submission
    document.getElementById("noteForm").reset();
}

// Add a form submit event listener
document.getElementById("noteForm").addEventListener("submit", addNote);

// Show/hide the note container when the plus button is clicked
document.getElementById("showNoteButton").addEventListener("click", function() {
    const noteContainer = document.getElementById("noteContainer");
    noteContainer.style.display = (noteContainer.style.display === "none") ? "block" : "none";
});
