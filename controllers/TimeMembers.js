var models = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

module.exports.TimeMembers = async (req, res) => {
    var timestamp;
    var time11, time18, date,day, month, year;
    await axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=EX8CJXV04R96&format=json&country=VN')
        .then((res) => {
            const data = res.data.zones[0];
            timestamp = new Date(data.timestamp * 1000);
        })
        .catch(error => {
            console.log(error);
        });

    timestamp = Math.floor(timestamp / 1000);
    const dateTimestamp = new Date(timestamp * 1000);
    time11 = new Date(dateTimestamp.getUTCFullYear(), dateTimestamp.getUTCMonth(), dateTimestamp.getUTCDate(), 18, 0, 0, 0);
    time18 = new Date(dateTimestamp.getUTCFullYear(), dateTimestamp.getUTCMonth(), dateTimestamp.getUTCDate(), 25, 0, 0, 0);
    time11 = Math.round(time11 / 1000);
    time18 = Math.round(time18 / 1000);
    date = dateTimestamp.getUTCFullYear() + "-" + (dateTimestamp.getUTCMonth() < 10 ? "0" + dateTimestamp.getUTCMonth() :  dateTimestamp.getUTCMonth()) + "-" + (dateTimestamp.getUTCDate() < 10? "0" + dateTimestamp.getUTCDate() : dateTimestamp.getUTCDate())

    const restime11 = await time11 - timestamp;
    const restime18 = await time18 - timestamp;
    day = dateTimestamp.getUTCDate();
    month = dateTimestamp.getUTCMonth() + 1; 
    year = dateTimestamp.getUTCFullYear();
    if (restime11 > 0) {
        res.json({ time11: restime11, time18: restime18, date,day,month,year});
    }
    else if (restime11 <= 0 && restime18 > 0) {
        res.json({ time11: 0, time18: restime18, date,day,month,year});
    }
    else if (restime11 <= 0 && restime18 <= 0) {
        res.json({ time11: 0, time18: 0, date,day,month,year });
    }
}
