const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

if (dropdownButton) {
    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
    });
}

const photoInput = document.querySelector("#avatar");
const photoPreview = document.querySelector("#preview-avatar");
if (photoInput) {
    photoInput.onchange = () => {
        const [file] = photoInput.files;
        if (file) {
            photoPreview.src = URL.createObjectURL(file);
        }
    };
}

const conversationThread = document.querySelector(".room__box");
if (conversationThread) conversationThread.scrollTop = conversationThread.scrollHeight;

const showMoreButton = document.getElementById('showMoreTopics');
const additionalTopics = document.getElementById('additionalTopics');

if (showMoreButton && additionalTopics) {
    showMoreButton.addEventListener('click', function (event) {
        event.preventDefault();
        additionalTopics.style.display = 'block';
        showMoreButton.style.display = 'none';
    });
}

const showMoreRoomsButton = document.getElementById('showMoreRooms');
const additionalRooms = document.getElementById('additionalRooms');

if (showMoreRoomsButton && additionalRooms) {
    showMoreRoomsButton.addEventListener('click', function (event) {
        event.preventDefault();
        additionalRooms.style.display = 'block';
        showMoreRoomsButton.style.display = 'none';
    });
}
