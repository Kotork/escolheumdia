import { runQuery } from '../helpers/query.js';

/* Object that needs to be passed to every page */
const options = {
  title: 'booking',
  page: 'Reservas',
  error: '',
  success: '',
};

export const bookingPage = (req, res) => {
  res.render('booking', {data: options});
}
