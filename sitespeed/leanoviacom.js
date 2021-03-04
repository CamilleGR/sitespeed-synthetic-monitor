

module.exports = async function(context, commands) {
  try{
    await commands.measure.start('https://www.leanovia.com/fr/');
    await commands.js.run('document.body.innerHTML = ""; document.body.style.backgroundColor = "white";');
    await commands.measure.start('https://www.leanovia.com/fr/conseil/');
    await commands.js.run('document.body.innerHTML = ""; document.body.style.backgroundColor = "white";');
    await commands.measure.start('https://www.leanovia.com/fr/pourquoi-leanovia/');
    await commands.js.run('document.body.innerHTML = ""; document.body.style.backgroundColor = "white";');
    await commands.measure.start('https://www.leanovia.com/fr/recrutement/');
    await commands.js.run('document.body.innerHTML = ""; document.body.style.backgroundColor = "white";');
    return commands.measure.start('https://www.leanovia.com/fr/expertise/');
  }catch(e){
    console.error(e)
    throw e;
  }

};
