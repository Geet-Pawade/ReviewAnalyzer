document.addEventListener("DOMContentLoaded", function () {
    const inputReview = document.getElementById("input_review");
    const predictionResult = document.querySelector(".pred p");
    const getPredictionButton = document.querySelector("button");

    getPredictionButton.addEventListener("click", function () {
        const review = inputReview.value;
        console.log(review);
        const apiUrl = 'http://localhost:8000/predict'; // Ensure this URL is correct

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "review": review })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            predictionResult.textContent = `Sentiment: ${data.sentiment}, Emotion: ${data.emotion}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
