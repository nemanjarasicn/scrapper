import puppeteer from "puppeteer";

interface IParserRepository {
  getJakpotData(): Promise<string>;
}

class ParserRepository implements IParserRepository {
  async getJakpotData(): Promise<string> {
    try {
      // Launch Puppeteer
      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();

      // Navigate to the webpage
      await page.goto(
        "http://ec2-16-170-250-169.eu-north-1.compute.amazonaws.com/"
      );

      // Wait for the dynamic content to load
      await page.waitForSelector("#root");

      // Extract the content of the label with attribute for="password"
      const passwordLabelText = await page.evaluate(() => {
        const labelElement = document.querySelector('label[for="password"]');
        return labelElement ? labelElement.textContent?.trim() : ""; // Provide default value
      });

      // Close the browser
      await browser.close();

      return passwordLabelText || "";
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export default new ParserRepository();
