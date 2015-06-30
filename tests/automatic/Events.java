package Proto;

import java.io.File;
import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class Events {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "http://www.rxeffex.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testUntitled() throws Exception {
    driver.get(baseUrl + "/index.html");
    assertTrue(isElementPresent(By.linkText("Home")));//Verify Home link
    assertTrue(isElementPresent(By.linkText("Consumers")));// Verify Consumer link
    assertTrue(isElementPresent(By.linkText("Medical Professionals")));// verify Medical Professionals link
    assertTrue(isElementPresent(By.linkText("Researchers"))); //Verify Researchers link
    
    assertEquals("\"Transparency through timely, controlled and effective communication.\"", driver.findElement(By.xpath("//h3")).getText());// verify text
    assertTrue(isElementPresent(By.xpath("//div[3]/div/div"))); //verify Information
    assertEquals("Visualization", driver.findElement(By.xpath("//h2")).getText());
    assertEquals("Communicating critical information in easy to consume pictorial or graphical format.", driver.findElement(By.xpath("//div[2]/div/p")).getText());
    assertEquals("Data Consolidation", driver.findElement(By.xpath("//div[2]/h2")).getText());
    assertEquals("Providing consolidated data sets from multiple sources enabling researchers and medical professionals to extract information for external examination.", driver.findElement(By.xpath("//div[2]/p")).getText());
    assertEquals("Analytics", driver.findElement(By.xpath("//div[3]/h2")).getText());
    assertEquals("Transform the reported data into meaning knowledge", driver.findElement(By.xpath("//div[3]/p")).getText());
    assertEquals("Information Management Consultants, Inc", driver.findElement(By.xpath("//strong")).getText());
   
    assertEquals("Additional Information: https://clinicaltrials.com", driver.findElement(By.xpath("//h6[2]")).getText());
    
    try {
        assertEquals("https://clinicaltrials.com", driver.findElement(By.linkText("https://clinicaltrials.com")).getText());
      } catch (Error e) {
        verificationErrors.append(e.toString());
      }
    driver.findElement(By.linkText("Medical Professionals")).click();// verify links working
    driver.navigate().back(); //go to previous page
    
    driver.findElement(By.linkText("Researchers")).click();
    driver.navigate().back();
   
    driver.findElement(By.linkText("Consumers")).click();
    Thread.sleep(3000);
   
   assertTrue(isElementPresent(By.xpath("//legend")));//verify Drug name on Consumers page
    
   //Take a screen shot
    if(driver.getTitle().equals("Adverse Events"))
    {
    System.out.println(" Adverse Events Page Displayed successfully");
    }
    else
    {
    	 File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        
         FileUtils.copyFile(scrFile, new File("C:\\Users\\PPatel\\Desktop\\Screenshot\\snap8.png"));
    }

  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
