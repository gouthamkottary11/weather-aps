document.getElementById("getWeather").addEventListener("click", async () => {
    const location = document.getElementById("location").value;
    const apiKey = '773f025ee56d46429ca114530252803';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=hi`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById("result").innerHTML = `<p>${data.error.message}</p>`;
        } else {
            const temperature = data.current.temp_c;
            const faranheat = data.current.temp_f;
            const condition = data.current.condition.text;
            const icon = data.current.condition.icon;
            const locationName = data.location.name;

            document.getElementById("result").innerHTML = `
         
                <h3>${locationName}</h3>
                 <h3>${faranheat}</h3>
                <p>Temperature: ${temperature}°f</p>
                <p>Condition: ${condition}</p>
            `;
        }
    } catch (error) {
        document.getElementById("result").innerHTML = `<p>Could not fetch the weather data. Please try again.</p>`;
    }
});