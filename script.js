function authenticateMessage() {
    let message = prompt("Enter the message to verify:");
    if (!message) {
        document.getElementById("result").innerHTML = "No message entered.";
        return;
    }

    let hasUpperFR = message.includes("FR");
    let hasLowerFR = message.includes("fr");
    let hasUpperAI = message.includes("AI");
    let hasLowerAI = message.includes("ai");
    let hasMixedAI = message.includes("aI") || message.includes("Ai");

    let result;

    if (hasUpperFR && (hasUpperAI || hasLowerAI)) {
		result = " is legitimate!";
	} else if (hasUpperFR) {
		result = " is legitimate!";
	} else if (hasMixedAI || hasUpperAI) {
		result = " is tampered with!";
	} else if (hasLowerFR || hasLowerAI) {
		result = " is yet to be encoded!";
	} else {
		result = " is yet to be encoded!";
	}

    document.getElementById("result").innerHTML = 'The message "' + message + '"' + result;
}