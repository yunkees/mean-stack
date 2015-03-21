exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function() {
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.id('entrar')).click();
    browser.driver.findElement(by.id('login_field'))
    	.sendKeys('yunkees@yahoo.com.br');
    browser.driver.findElement(by.id('password'))
    	.sendKeys('021091Ab');
    browser.driver.findElement(by.name('commit')).click();
  }
};
