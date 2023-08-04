import fetch, { FormData } from 'node-fetch';

module.exports = () => {
    const form = new FormData();
    form.append('username', '"tima23a@gmail.com"');
    form.append('password', '"P@TiTTqAejw#6^Do"');
    form.append('grant_type', '"password"');
    form.append('scope', '"*"');

    fetch('https://api.signnow.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic NmRmNDk4OGY5MDhhZDIzN2NiNjBhMGI5MmE0ZTFiZjk6NzcwZDc3Yjk2NDc0YTk0MGY1MTRjNjBlYWUxOGYwZWE'
      },
      body: form
    })
      .then(res => res.text())
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.dir(err);
      })
}