var request = require('request');

var weather = {
    getWheather: async function (req, res, next) {
        try {
            let date = new Date().getTime();
            function isPrime(num) {
                for (var i = 2; i < num; i++)
                    if (num % i === 0) return false;
                return num > 1;
            }

            if (isPrime(date)) {
                const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02';
                return new Promise((resolve, reject) => {
                    request({
                        method: 'GET',
                        url,
                        rejectUnauthorized: false,
                        json: true,
                    }, (err, response, body) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        res.status(200).json({ body })
                    });
                });
            } else {
                res.status(200).json('Date is not prime so no date')
            }
        } catch (err) {
            next(err)
        }
    }

}

module.exports = weather;