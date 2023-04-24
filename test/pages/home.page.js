const Page = require("./page");

class HomePage extends Page {

  get newsFeedContainer() {
    return $("~newsfeed-container");
  }

  indexStrip() {
    return $("~indexstrip-container");
  }

  async scrollToIndexStrip() {

    await this.scrollToElement(
        { anchor: "x" },
        await this.indexStrip()
    );
  }
}
module.exports = new HomePage();
