from selenium import webdriver #Selenium Webdriverをインポートして

driver = webdriver.Chrome("C:\\Users\\maso_\\Columbo\\code\\myvenv\\chromedriver.exe") #Chromeを動かすドライバを読み込み

driver.get("http://127.0.0.1:8000")

driver.find_element_by_id('createButton').click()

deckName = driver.find_element_by_name('deckName')

deckName.send_keys("Hello WebDriver!")

driver.find_element_by_id("submit").click()
