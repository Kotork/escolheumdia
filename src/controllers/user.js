let options = {
  title: 'Perfil',
  page: 'Profile',
  error: ''
};

const cards = [{
  id: 1,
  name: 'Rui Lopes',
  photo: 4000056655665556,
  cvv: 123,
  validity: '01/22',
  user_id: 2
}, {
  id: 1,
  name: 'Luis Fonseca',
  number: 3566002020360505,
  cvv: 356,
  validity: '03/26',
  user_id: 1
}]

const staff = [{

}]

export const userPage = (req, res) => {
  options.page = req.url === '/' ? 'Profile' : req.url.substr(2)[0].toUpperCase() + req.url.substr(2).substr(1).toLowerCase();

  switch (options.page) {
    case 'Cards':
      options = { ...options, card: cards.find( (card) => card.user_id === req.session.user.id ) }
      break;
    default:
      console.log('other page')
  }

  console.log(options)

  res.render('user', {data: options});
}