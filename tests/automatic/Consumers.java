package Proto;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class Consumers {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "https://www.rxeffex.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testUntitled() throws Exception {
    driver.get(baseUrl + "/consumer.html");
    assertEquals("Search: Drug Name", driver.findElement(By.xpath("//legend")).getText());
   /* try {
      //assertEquals("", driver.findElement(By.id("inputSearchCriteria")).getText());
    	 assertEquals("", driver.findElement(By.id("inputSearchCriteria")).getAttribute("value"));
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }*/
    driver.findElement(By.id("inputSearchCriteria")).clear();
    
    driver.findElement(By.id("inputSearchCriteria")).sendKeys("aaaaa");
    driver.findElement(By.id("generateChartButton")).click();
    Thread.sleep(3000);
   assertEquals("Oh snap! Your search criteria did not give a result. Please change some parameters and try again.", driver.findElement(By.id("ajaxErrorNoReturnData")).getText());
   //Thread.sleep(3000);
   assertEquals("Significance of the event", driver.findElement(By.xpath("//label")).getText());
    assertEquals("Serious", driver.findElement(By.id("seriousSignificant")).getText());
    assertEquals("Non-Serious", driver.findElement(By.id("nonSeriousSignificant")).getText());
    try {
      assertEquals("Outcomes", driver.findElement(By.xpath("//div[@id='divOutcomes']/label")).getText());
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    assertEquals("Results in death", driver.findElement(By.linkText("Results in death")).getText());
    assertEquals("Life-threatening", driver.findElement(By.linkText("Life-threatening")).getText());
    assertEquals("Caused/prolonged hospitalization", driver.findElement(By.linkText("Caused/prolonged hospitalization")).getText());
    assertEquals("Disabling/Incapacitating", driver.findElement(By.linkText("Disabling/Incapacitating")).getText());
    assertEquals("Congenital anomaly/birth defect", driver.findElement(By.linkText("Congenital anomaly/birth defect")).getText());
    driver.findElement(By.id("inputSearchCriteria")).clear();
    //enter drug name
    driver.findElement(By.id("inputSearchCriteria")).sendKeys("synthroid");
    //select Serious as the significance of the event
    driver.findElement(By.id("seriousSignificant")).click();
    //select outcome
    driver.findElement(By.linkText("Results in death")).click();
    driver.findElement(By.id("generateChartButton")).click();
    Thread.sleep(3000);
    try {
      assertTrue(isElementPresent(By.cssSelector("svg.chart")));
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    System.out.println(driver.findElement(By.cssSelector("svg.chart")).getText()); 
    //Thread.sleep(5000); 
   
    assertEquals("synthroid serious results in death", driver.findElement(By.xpath("//div[@id='searchBreadCrumbs']/ul")).getText());
    //Reset
    driver.findElement(By.id("resetButton")).click();
    //select multiple outcomes
    driver.findElement(By.id("inputSearchCriteria")).clear();
    driver.findElement(By.id("inputSearchCriteria")).sendKeys("synthroid");
    driver.findElement(By.id("seriousSignificant")).click();
    
    driver.findElement(By.linkText("Results in death")).click();
    Thread.sleep(1000);
    driver.findElement(By.linkText("Life-threatening")).click();
    Thread.sleep(1000);
    driver.findElement(By.linkText("Caused/prolonged hospitalization")).click();
    driver.findElement(By.linkText("Disabling/Incapacitating")).click();
    driver.findElement(By.linkText("Congenital anomaly/birth defect")).click();
    driver.findElement(By.linkText("Other medically important condition")).click();
    driver.findElement(By.id("generateChartButton")).click();
    
    //select Non-serious
    driver.findElement(By.id("inputSearchCriteria")).clear();
    driver.findElement(By.id("inputSearchCriteria")).sendKeys("vitamin");
    driver.findElement(By.id("nonSeriousSignificant")).click();
    assertEquals("Non-Serious", driver.findElement(By.id("nonSeriousSignificant")).getText());
    
    driver.findElement(By.id("generateChartButton")).click();
    Thread.sleep(3000);
    assertEquals("vitamin non-serious", driver.findElement(By.xpath("//div[@id='searchBreadCrumbs']/ul")).getText());
    
    try {
      assertEquals("www.IMC.com", driver.findElement(By.linkText("www.IMC.com")).getText());
    } catch (Error e) {
      verificationErrors.append(e.toString());
    }
    try {
      assertEquals("http://clinicaltrials.gov", driver.findElement(By.linkText("http://clinicaltrials.gov")).getText());
    } catch (Error e) {
      verificationErrors.append(e.toString());
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
