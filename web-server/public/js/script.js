console.log('Client-side JavaScript file is loaded!');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const search = document.querySelector('input').value;
    console.log(search);
    fetch('/weather?address=' + search).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                document.querySelector('#location').textContent = data.error;
            } else {

                console.log(data.location);
                console.log(data.forecast);
                console.log(data.address);
                console.log(data.precip);
                document.querySelector('#location').textContent = data.location;
                document.querySelector('#temperature').textContent = data.forecast;
                document.querySelector('#address').textContent = data.address;
                document.querySelector('#precip').textContent = data.precip;
            }
        });
    }
    );
}
);