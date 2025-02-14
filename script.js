document.addEventListener("DOMContentLoaded", function () {
    const notifyBtn = document.getElementById("notify-btn");
    const messageInput = document.getElementById("message");

    notifyBtn.addEventListener("click", function () {
        const message = messageInput.value.trim();
        
        // Prepare data to send
        const notificationData = {
            sender: "charanika@gmail.com", // Change dynamically in future
            receiver: "ashish@gmail.com", // Change dynamically in future
            message: message || "Hey! You have a new notification ❤️"
        };

        // Send request to backend
        fetch("http://localhost:5000/send-notification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notificationData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Notification sent successfully!");
            messageInput.value = ""; // Clear input after sending
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to send notification.");
        });
    });
});
