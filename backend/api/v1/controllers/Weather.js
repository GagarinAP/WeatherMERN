import cron from 'node-cron';
import request from 'request';
import moment from 'moment';
import config from '../../../config';
import { Weather } from './../models';

const get = (req, res) => {
  const today = moment().startOf('day');
  const tomorrow = moment(today).endOf('day');
  Weather.find({ time: { $gte: today.toDate(), $lt: tomorrow.toDate() } }, (err, weather) => {
    if (err) return res.status(500).send("There was a problem finding the weather.");
    if (!weather) return res.status(404).send("No weather found.");
    res.status(200).send(weather);
  });
};

const post = (data) => {
  Weather.create({ temp: data.main.temp });
};

const getWeatherFromAPI = () => {
  request(config.apiWeatherUrl + config.city + config.apiWeatherKey, (error, response, body) => {
    if (error) return false;
    post(JSON.parse(body));
  });
};

const cronInit = () => {
  return cron.schedule(config.everyHour, () => {
    getWeatherFromAPI();
  }, { scheduled: false });
};

export default {
  get,
  cronInit
};