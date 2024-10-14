document.addEventListener('DOMContentLoaded', function () {
    // Play the UFO sound immediately when the page loads
    let ufoSound = document.getElementById('ufoSound');
    ufoSound.play();

    // When the 'Start Journey' button is clicked
    document.getElementById('startJourney').addEventListener('click', function() {
        // Play space sound
        let spaceSound = document.getElementById('spaceSound');
        spaceSound.play();

        // Hide the heading, "Start Journey" button, and spaceship
        document.querySelector('h1').classList.add('hidden');
        document.getElementById('startJourney').classList.add('hidden');
        document.getElementById('spaceship').classList.add('hidden');

        // Show the transition buttons and trigger space journey animation
        document.getElementById('transitionButtons').classList.remove('hidden');
        document.getElementById('spaceJourneyAnimation').classList.remove('hidden');
    });

    // Function to show a loading animation
    function showLoadingAnimation() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading'; // Create a loading div
        loadingDiv.innerHTML = 'Loading...'; // Add loading text
        document.body.appendChild(loadingDiv);
        return loadingDiv; // Return the loading div for later removal
    }

    // Function to show a confirmation modal
    function showModal(quest) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <p>Are you sure you want to go to ${quest}?</p>
                <button id="confirm">Yes</button>
                <button id="cancel">No</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Confirm button
        document.getElementById('confirm').addEventListener('click', function() {
            const loadingDiv = showLoadingAnimation(); // Show loading animation
            setTimeout(function() {
                // Navigate to the selected quest page
                window.location.href = quest === 'Constellation Quest' ? 'constellation.html' : 'galacticrealm.html';
            }, 1000); // Duration of loading animation
            document.body.removeChild(modal); // Remove the modal
            document.body.removeChild(loadingDiv); // Remove loading div
        });

        // Cancel button
        document.getElementById('cancel').addEventListener('click', function() {
            document.body.removeChild(modal); // Remove the modal
        });
    }

    // Handle clicks on the image buttons
    document.getElementById('ConstellationQuest').addEventListener('click', function() {
        const questSound = document.getElementById('questSound');
        questSound.play(); // Play sound effect
        showModal('Constellation Quest'); // Show confirmation modal
    });

    document.getElementById('GalacticRealm').addEventListener('click', function() {
        const questSound = document.getElementById('questSound');
        questSound.play(); // Play sound effect
        showModal('Galactic Realm'); // Show confirmation modal
    });
});
