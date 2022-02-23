/**
 * Funkcionalni testi
 */
(async function dogwalkers() {
    // Knjižnice
    const {exec} = require("child_process");
    const {describe, it, after, before} = require("mocha");
    const {Builder, By, until} = require("selenium-webdriver");
    const chrome = require("selenium-webdriver/chrome");
    const expect = require("chai").expect;
    const jsdom = require("jsdom");
    const {JSDOM} = jsdom;

    // Parametri
    //let aplikacijaUrl = "https://dog-walkers-8.herokuapp.com/";
    let aplikacijaUrl = "http://localhost:4200";
    let seleniumStreznikUrl = "http://localhost:4445/wd/hub";
    let pathToImg = "C:\\Users\\Simon\\Desktop\\tpo\\LP234-08\\test\\test-id.jpg";
    let brskalnik, jwtZeton;
    let adminMail = "admin@gmail.com";
    let adminPassword = "Geslo123"
    let potrjevalecMail = "potrjevalec@gmail.com"
    let potrjevalecGeslo = "Geslo123"

    const axios = require('axios').create({
        baseURL: aplikacijaUrl + "api/",
        timeout: 5000
    });

    // Obvladovanje napak
    process.on("unhandledRejection", (napaka) => {
        console.log(napaka);
    });

    // Počakaj določeno število sekund na zahtevani element na strani
    let pocakajStranNalozena = async (brskalnik, casVS, xpath) => {
        await brskalnik.wait(() => {
            return brskalnik.findElements(By.xpath(xpath)).then(elementi => {
                return elementi[0];
            });
        }, casVS * 1000, `Stran se ni naložila v ${casVS} s.`);
    };

    try {

        before(() => {
            brskalnik = new Builder()
                .forBrowser("chrome")
                .setChromeOptions(new chrome.Options()
                    .addArguments("start-maximized")
                    .addArguments("disable-infobars")
                    .addArguments("allow-insecure-localhost")
                    .addArguments("allow-running-insecure-content")
                )
                .usingServer(seleniumStreznikUrl)
                .build();
        });

        describe("Registracija", function () {
            this.timeout(30 * 1000);
            before(async function () {
                await brskalnik.get(aplikacijaUrl);
            });

            context("Preverjanje veljavnosti vnosnih podatkov - neveljavno ime", function () {

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos neveljavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Janez123");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Kranjski123");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez46@kranjski.net");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("Geslo123!");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");

                    let id = await brskalnik.findElement(
                        //By.xpath("//label[contains(text(), 'Upload ID')]"));
                        By.id("documentID"));
                    id.sendKeys(pathToImg);

                    brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();
                    //await new Promise(r => setTimeout(r, 10000));
                });

                it("prikaz sporocila o napaki", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "/html/body/app-root/app-register/div/div/div/ngb-alert");
                    let obvestilo = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-register/div/div/div/ngb-alert"));
                    expect(obvestilo).to.not.be.empty;
                });
            });

            context("Preverjanje veljavnosti vnosnih podatkov - gesli se ne ujemata", function () {

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos neveljavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Janez");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Kranjski");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez46@kranjski.net");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("Geslo123456!");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");

                    let id = await brskalnik.findElement(
                        //By.xpath("//label[contains(text(), 'Upload ID')]"));
                        By.id("documentID"));
                    id.sendKeys(pathToImg);

                    brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();
                });

                it("prikaz sporocila o napaki", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "/html/body/app-root/app-register/div/div/div/ngb-alert");
                    let obvestilo = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-register/div/div/div/ngb-alert"));
                    expect(obvestilo).to.not.be.empty;
                });
            });

            context("Preverjanje veljavnosti vnosnih podatkov - ni slike osebnega dokumenta", function () {

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos neveljavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Janez");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Kranjski");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez46@kranjski.net");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("Geslo123!");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");

                    let registriraj = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();

                    expect(registriraj).to.be.null;
                });
            });

            context("Preverjanje veljavnosti vnosnih podatkov - neveljavno geslo", function () {

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos neveljavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Janez");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Kranjski");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez46@kranjski.net");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("123");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("123");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");

                    let id = await brskalnik.findElement(
                        By.id("documentID"));
                    id.sendKeys(pathToImg);

                    brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();
                });

                it("prikaz sporocila o napaki", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "/html/body/app-root/app-register/div/div/div/ngb-alert");
                    let obvestilo = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-register/div/div/div/ngb-alert"));
                    expect(obvestilo).to.not.be.empty;
                });
            });

            context("Preverjanje veljavnosti vnosnih podatkov - neveljaven email", function () {

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos neveljavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Janez");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Kranjski");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez.kranjski");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("Geslo123!");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");
                    let id = await brskalnik.findElement(
                        //By.xpath("//label[contains(text(), 'Upload ID')]"));
                        By.id("documentID"));
                    id.sendKeys(pathToImg);

                    let registriraj = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();

                    expect(registriraj).to.be.null;
                });
            });

            context("Registracija novega uporabnika z veljavnimi podatki (lastnik psov)", function () {

                before(async function () {
                    await brskalnik.get(aplikacijaUrl);
                });

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos podatkov uporabnika", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Janez");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Kranjski");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez46@kranjski.net");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("Geslo123!");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");

                    let id = await brskalnik.findElement(
                        //By.xpath("//label[contains(text(), 'Upload ID')]"));
                        By.id("documentID"));
                    id.sendKeys(pathToImg);

                    brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();
                    //await new Promise(r => setTimeout(r, 10000));
                });

                it("uspesna registracija", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1[contains(text(), 'Home')]");
                    let home = await brskalnik.findElement(
                        By.xpath("//h1[contains(text(), 'Home')]"));
                    expect(home).to.not.be.empty;
                });

                it("pridobi JWT žeton", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    const {localStorage, sessionStorage} = (new JSDOM(``, {url: aplikacijaUrl})).window;
                    jwtZeton = await brskalnik.executeScript(function () {
                        return localStorage.getItem('dog-walkers-token');
                    });
                    expect(jwtZeton).to.not.be.null;
                });
            });
        });

        describe("Oglasi", function () {
            this.timeout(60 * 1000 + 1000);
            before(() => {
                brskalnik.get(aplikacijaUrl);
            });

            context("Sortiranje oglasov po oceni", function () {

                it("prikaži vse oglase", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Home')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("sortiraj po oceni", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h5");
                    //let sortiraj = await brskalnik.findElement(By.xpath("/html/body/app-root/app-home/div/div[3]/button")).click();
                    let sortiraj = await brskalnik.findElement(By.xpath("//button[contains(text(), 'Sort by best')]"));
                    expect(sortiraj).to.not.be.empty;
                    await sortiraj.click();
                });

                // it("preveri pravilnost sortiranja", async function () {
                //     await pocakajStranNalozena(brskalnik, 10, "//h5");
                //     let ocena = await brskalnik.findElement(By.xpath("/html/body/app-root/app-home/div/div[4]/h5/div[1]/i[5]"));
                //     let ocenaClass = ocena.getAttribute("class");
                //     expect(ocenaClass).to.include("fas");
                // });
            });

            this.timeout(60 * 1000 + 1000);
            before(() => {
                brskalnik.get(aplikacijaUrl);
            });

            context("Sortiranje oglasov po kraju", function () {

                it("prikaži vse oglase", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Home')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("prikaži dropwdown (teaching api)", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"filterLocation\"]/option[1]");
                    let dropdown = await brskalnik.findElement(
                        By.id("filterLocation")
                    );
                    expect(dropdown).to.not.be.empty;
                    await dropdown.click();
                });

                it("izberi kraj in sortiraj", async function () {
                    let kraj = await brskalnik.findElement(
                        By.xpath("//option[contains(text(), 'Grosuplje')]"));
                    expect(kraj).to.not.be.empty;
                    await kraj.click();

                    let potrdi = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Apply')]")
                    );
                    expect(potrdi).to.not.be.empty;
                    await potrdi.click();
                });

                it("preveri pravilnost sortiranja", async function () {
                    let kraj = await brskalnik.findElement(
                        //By.xpath("/html/body/app-root/app-home/div/div[2]/div[3]/div/div/div[1]/div/p"));
                        By.xpath("//p[contains(text(), 'Grosuplje')]"));
                    expect(kraj).to.not.be.empty;
                });
            });

            context("Prikaži dodatne informacije o oglasih", function () {

                it("prikaži vse oglase", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Home')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("prikaži podrobne informacije enega oglasa", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h5");
                    let povezava = await brskalnik.findElement(By.xpath("//button[contains(text(), 'More')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("prikaz zemljevida na podrobnostih oglasa (leaflet api)", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"mapid\"]");
                    let zemljevid = await brskalnik.findElement(By.xpath("//*[@id=\"mapid\"]"));
                    expect(zemljevid).to.not.be.empty;
                });
            });
        });

        describe("Profil", function () {
            this.timeout(30 * 1000);
            before(() => {
                brskalnik.get(aplikacijaUrl);
            });

            it("izberi profil", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'Profile')]")
                );
                expect(povezava).to.not.be.empty;
                await povezava.click();
            });
        });

        describe("Uredi profil", function () {
            this.timeout(30 * 1000);
            before(() => {
                brskalnik.get(aplikacijaUrl);
            });

            it("izberi profil", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'Profile')]")
                );
                expect(povezava).to.not.be.empty;
                await povezava.click();
            });

            it("izberi urejanje profila", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"edit_profil\"]/img");
                let povezava = await brskalnik.findElement(By.xpath("//*[@id=\"edit_profil\"]/img"));
                expect(povezava).to.not.be.empty;
                await povezava.click();
            });

            it("vnos podatkov", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"postDescription\"]");
                let ime = await brskalnik.findElement(By.id("ime"));
                expect(ime).to.not.be.empty;
                ime.sendKeys("Janezzz");
                let priimek = await brskalnik.findElement(By.id("priimek"));
                expect(priimek).to.not.be.empty;
                priimek.sendKeys("Kranjskiii");
                let opis = await brskalnik.findElement(By.xpath("//*[@id=\"postDescription\"]"));
                expect(opis).to.not.be.empty;
                opis.sendKeys("Preko testa sem uredil opis.");
            });

            it("potrdi urejanje", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//button[contains(text(), 'Apply')]");
                let btn = await brskalnik.findElement(By.xpath("//button[contains(text(), 'Apply')]"));
                expect(btn).to.not.be.empty;
                btn.click();
            });

            it("preveri ce so podatki posodobljeni", async function () {
                await pocakajStranNalozena(brskalnik, 10, "/html/body/app-root/app-profile/div/p[2]");
                let ime = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/p[2][contains(text(), 'Janezzz')]"));
                expect(ime).to.not.be.empty;
                let priimek = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/p[3][contains(text(), 'Kranjskiii')]"));
                expect(priimek).to.not.be.empty;
                let opis = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/div[2][contains(text(), 'Preko testa sem uredil opis.')]"));
                expect(opis).to.not.be.empty;
            });
        });

        describe("Pes", async function () {
            this.timeout(30 * 1000);
            before(function () {
                brskalnik.get(aplikacijaUrl);
            });

            context("dodaj psa", function () {

                it("izberi profil", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//a");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("klik na dodajanje psa", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//img");
                    //let dodaj = await brskalnik.findElement(By.id("add_dog"));
                    let dodaj = await brskalnik.findElement(By.xpath("//*[@id=\"add_dog\"]/img"));
                    expect(dodaj).to.not.be.empty;
                    await dodaj.click();
                });

                it("vnesi podatke", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"breed\"]/option[1]");
                    let ime = await brskalnik.findElement(By.id("name"));
                    expect(ime).to.not.be.empty;
                    await ime.sendKeys("Dejan")
                    let opis = await brskalnik.findElement(By.name("description"));
                    expect(opis).to.not.be.empty;
                    await opis.sendKeys("Zelo prijazen in učljiv.")
                });

                it("prikazi dropdown", async function () {
                    let povezava = await brskalnik.findElement(By.id("breed"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi pasmo iz dropdowna", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//option[contains(text(), 'Afghan Hound')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("potrdi dodajanje", async function () {
                    let btn = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Add dog')]"));
                    expect(btn).to.not.be.empty;
                    await btn.click();
                });

                it("preveri ce je pes dodan na profilu", async function () {
                    await new Promise(r => setTimeout(r, 1000));
                    let home = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Home')]"));
                    await home.click();

                    await new Promise(r => setTimeout(r, 2000));
                    await pocakajStranNalozena(brskalnik, 10, "//a");
                    let profil = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]")
                    );
                    await profil.click();

                    await new Promise(r => setTimeout(r, 2000));
                    await pocakajStranNalozena(brskalnik, 10, "/html/body/app-root/app-profile/div/div[3]/div[1]/div[1]/img");
                    let ime = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/div[3]/div[1]/div[2]/p[1][contains(text(), 'Dejan')]"));
                    expect(ime).to.not.be.empty;
                });
            });
        });

        describe("Odjava", function () {
            this.timeout(30 * 1000);
            before(() => {
                brskalnik.get(aplikacijaUrl);
            });

            it("izberi odjavo", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'Logout')]")
                );
                expect(povezava).to.not.be.empty;
                await povezava.click();
            });

            it("preveri odjavo", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'Profile')]")
                );
                expect(povezava).to.not.be.empty;
                await povezava.click();
                let registracija = await brskalnik.findElement(
                    By.xpath("//button[contains(text(), 'Register')]")
                );
                expect(registracija).to.not.be.empty;
            });

            it("uniči JWT žeton", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                const {localStorage, sessionStorage} = (new JSDOM(``, {url: aplikacijaUrl})).window;
                jwtZeton = await brskalnik.executeScript(function () {
                    return localStorage.getItem('dog-walkers-token');
                });
                expect(jwtZeton).to.be.null;
            });
        });

        describe("Sprehajalec", function () {
            this.timeout(30 * 1000);
            before(async function () {
                await brskalnik.get(aplikacijaUrl);
            });

            context("Registracija novega sprehajalca psov", function () {

                it("pojdi na prijavo", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izbira registracije", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos podatkov za sprehajalca", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let ime = await brskalnik.findElement(By.id("firstname"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("Sprehajalec");
                    let priimek = await brskalnik.findElement(By.id("surname"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("Sprehajalec");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("sprehajalec@gmail.com");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");
                    let gesloConf = await brskalnik.findElement(By.id("password_confirm"));
                    expect(gesloConf).to.not.be.empty;
                    gesloConf.sendKeys("Geslo123!");
                    let date = await brskalnik.findElement(By.id("birthday"));
                    expect(date).to.not.be.empty;
                    await date.sendKeys("01.01.2000");

                    let id = await brskalnik.findElement(
                        By.id("documentID"));
                    id.sendKeys(pathToImg);

                    await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-register/div/div/form/div[4]/label")).click();

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")).click();
                });

                it("uspesna registracija", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1[contains(text(), 'Home')]");
                    let home = await brskalnik.findElement(
                        By.xpath("//h1[contains(text(), 'Home')]"));
                    expect(home).to.not.be.empty;
                });

                it("pridobi JWT žeton", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    const {localStorage, sessionStorage} = (new JSDOM(``, {url: aplikacijaUrl})).window;
                    jwtZeton = await brskalnik.executeScript(function () {
                        return localStorage.getItem('dog-walkers-token');
                    });
                    expect(jwtZeton).to.not.be.null;
                });
            });

            context("Ustvari nov oglas na Home", function () {

                it("preveri ce lahko na Home dodas oglas", async function () {
                    let dodaj = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Add post')]"));
                    expect(dodaj).to.not.be.empty;
                    await dodaj.click();
                });

                it("vnesi podatke in objavi", async function () {

                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"postLocation\"]/option[1]");

                    let naslov = await brskalnik.findElement(
                        By.id("postTitle"));
                    expect(naslov).to.not.be.empty;
                    await naslov.sendKeys("Testni oglas");

                    let dropdown = await brskalnik.findElement(
                        By.id("postLocation")
                    );
                    expect(dropdown).to.not.be.empty;
                    await dropdown.click();

                    let kraj = await brskalnik.findElement(
                        By.xpath("//option[contains(text(), 'Ajdovščina')]"));
                    expect(kraj).to.not.be.empty;
                    await kraj.click();

                    let cena = await brskalnik.findElement(
                        By.id("postPrice"));
                    expect(cena).to.not.be.empty;
                    await cena.sendKeys("666");

                    let opis = await brskalnik.findElement(
                        By.id("postDescription"));
                    expect(opis).to.not.be.empty;
                    await opis.sendKeys("Testni opis");

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Submit')]")).click();
                });

                it("preveri uspesno objavo oglasa", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h5[contains(text(), 'Testni oglas')]");
                    let naziv = await brskalnik.findElement(
                        By.xpath("//h5[contains(text(), 'Testni oglas')]"));
                    expect(naziv).to.not.be.empty;
                    await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]")).click();
                });
            });

            context("Ustvari nov oglas na Profile", function () {

                it("preveri ce lahko na Profile dodas oglas", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h5[contains(text(), 'Testni oglas')]");
                    let dodaj = await brskalnik.findElement(
                        By.className("plus"));
                    expect(dodaj).to.not.be.empty;
                    await dodaj.click();
                    ///html/body/app-root/app-profile/div/div[5]/img
                    ///html/body/app-root/app-profile/div/div[4]/img
                });

                it("vnesi podatke in objavi", async function () {

                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"postLocation\"]/option[1]");

                    let naslov = await brskalnik.findElement(
                        By.id("postTitle"));
                    expect(naslov).to.not.be.empty;
                    await naslov.sendKeys("Testni oglas2");

                    let dropdown = await brskalnik.findElement(
                        By.id("postLocation")
                    );
                    expect(dropdown).to.not.be.empty;
                    await dropdown.click();

                    let kraj = await brskalnik.findElement(
                        By.xpath("//option[contains(text(), 'Radovljica')]"));
                    expect(kraj).to.not.be.empty;
                    await kraj.click();

                    let cena = await brskalnik.findElement(
                        By.id("postPrice"));
                    expect(cena).to.not.be.empty;
                    await cena.sendKeys("420");

                    let opis = await brskalnik.findElement(
                        By.id("postDescription"));
                    expect(opis).to.not.be.empty;
                    await opis.sendKeys("Testni opis2");

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Submit')]")).click();
                });

                it("preveri uspesno objavo oglasa", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h5[contains(text(), 'Testni oglas2')]");
                    let naziv = await brskalnik.findElement(
                        By.xpath("//h5[contains(text(), 'Testni oglas2')]"));
                    expect(naziv).to.not.be.empty;
                });
            });
        });

        describe("Prijava", function () {
            this.timeout(30 * 1000);
            before(async function () {
                await brskalnik.get(aplikacijaUrl);
            });

            it("izberi odjavo", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'Logout')]")
                );
                expect(povezava).to.not.be.empty;
                await povezava.click();
            });

            it("preveri odjavo", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'Profile')]")
                );
                expect(povezava).to.not.be.empty;
                await povezava.click();
                let registracija = await brskalnik.findElement(
                    By.xpath("//button[contains(text(), 'Register')]")
                );
                expect(registracija).to.not.be.empty;
            });

            it("uniči JWT žeton", async function () {
                await pocakajStranNalozena(brskalnik, 10, "//h1");
                const {localStorage, sessionStorage} = (new JSDOM(``, {url: aplikacijaUrl})).window;
                jwtZeton = await brskalnik.executeScript(function () {
                    return localStorage.getItem('dog-walkers-token');
                });
                expect(jwtZeton).to.be.null;
            });

            context("Prijava z emailom, ki ni registriran", function () {

                it("izbira prijave", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos prijavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Login')]");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("asdasdasd@asdasdas.asd");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("Geslo123!");

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Login')]")).click();
                });

                it("prikaz sporocila o napaki", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "/html/body/app-root/app-login/div/div/div/ngb-alert");
                    let obvestilo = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-login/div/div/div/ngb-alert"));
                    expect(obvestilo).to.not.be.empty;
                });
            });

            context("Prijava z napačnim geslom", function () {

                it("izbira prijave", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos prijavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Login')]");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys("janez46@kranjski.net");
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys("napacno geslo");

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Login')]")).click();
                });

                it("prikaz sporocila o napaki", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "/html/body/app-root/app-login/div/div/div/ngb-alert");
                    let obvestilo = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-login/div/div/div/ngb-alert"));
                    expect(obvestilo).to.not.be.empty;
                });
            });

            context("Prijava potrjevalca uporabniskih racunov", function () {

                before(async function () {
                    await brskalnik.get(aplikacijaUrl);
                });

                it("izbira prijave", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos prijavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys(potrjevalecMail);
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys(potrjevalecGeslo);

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Login')]")).click();
                });

                it("uspesna prijava", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//b[contains(text(), 'potrjevalec')]");
                    let home = await brskalnik.findElement(
                        By.xpath("//b[contains(text(), 'potrjevalec')]"));
                    expect(home).to.not.be.empty;
                });
            });
        });

        describe("Potrjevanje uporabniških računov", async function () {
            this.timeout(30 * 1000);
            before(function () {
                brskalnik.get(aplikacijaUrl);
            });

            context("Potrditev uporabniškega računa", function () {

                it("pojdi na potrjevanje", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//a");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Verify')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi profil", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//a");
                    let potrdi = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-verify/div[1]/div/div[2]/div/div/label[1]")
                    );
                    expect(potrdi).to.not.be.empty;
                    await potrdi.click();
                });

                it("potrdi profil", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//button");
                    let potrdi = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Verify')]")
                    );
                    expect(potrdi).to.not.be.empty;
                    await potrdi.click();
                });
            });

            context("Zavrnitev uporabniškega računa", function () {

                it("pojdi na potrjevanje", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//a");

                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Verify')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi profil", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//a");
                    let potrdi = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-verify/div[1]/div/div[2]/div/div/label[2]")
                    );
                    expect(potrdi).to.not.be.empty;
                    await potrdi.click();
                });

                it("zavrni profil", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//button");
                    let potrdi = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Reject')]")
                    );
                    expect(potrdi).to.not.be.empty;
                    await potrdi.click();
                });
            });
        });

        describe("Admin modul", async function () {

            context("Prijava kot admin", function () {

                before(async function () {
                    await brskalnik.get(aplikacijaUrl);
                });

                it("izberi odjavo", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Logout')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("preveri odjavo", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                    let registracija = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Register')]")
                    );
                    expect(registracija).to.not.be.empty;
                });

                it("uniči JWT žeton", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    const {localStorage, sessionStorage} = (new JSDOM(``, {url: aplikacijaUrl})).window;
                    jwtZeton = await brskalnik.executeScript(function () {
                        return localStorage.getItem('dog-walkers-token');
                    });
                    expect(jwtZeton).to.be.null;
                });

                it("izbira prijave", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos prijavnih podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10,
                        "//button[contains(text(), 'Register')]");
                    let email = await brskalnik.findElement(
                        By.id("email"));
                    expect(email).to.not.be.empty;
                    email.sendKeys(adminMail);
                    let geslo = await brskalnik.findElement(By.id("password"));
                    expect(geslo).to.not.be.empty;
                    geslo.sendKeys(adminPassword);

                    await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Login')]")).click();
                });

                it("uspesna prijava", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//b[contains(text(), 'admin')]");
                    let home = await brskalnik.findElement(
                        By.xpath("//b[contains(text(), 'admin')]"));
                    expect(home).to.not.be.empty;
                });
            });

            context("Admin uredi profil preko dashboarda", function () {

                this.timeout(30 * 1000);
                before(() => {
                    brskalnik.get(aplikacijaUrl);
                });

                it("pojdi na dashboard", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Dashboard')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi profil", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-dashboard/div[3]/h5/div/button[1]/img")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi urejanje profila", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"edit_profil\"]/img");
                    let povezava = await brskalnik.findElement(By.xpath("//*[@id=\"edit_profil\"]/img"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("vnos podatkov", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"postDescription\"]");
                    let ime = await brskalnik.findElement(By.id("ime"));
                    expect(ime).to.not.be.empty;
                    ime.sendKeys("AdminEdit");
                    let priimek = await brskalnik.findElement(By.id("priimek"));
                    expect(priimek).to.not.be.empty;
                    priimek.sendKeys("AdminEdit");
                    let opis = await brskalnik.findElement(By.xpath("//*[@id=\"postDescription\"]"));
                    expect(opis).to.not.be.empty;
                    opis.sendKeys("Admin spremenil opis.");
                });

                it("potrdi urejanje", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//button[contains(text(), 'Apply')]");
                    let btn = await brskalnik.findElement(By.xpath("//button[contains(text(), 'Apply')]"));
                    expect(btn).to.not.be.empty;
                    btn.click();
                });

                it("preveri ce so podatki posodobljeni", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "/html/body/app-root/app-profile/div/p[2]");
                    let ime = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/p[2][contains(text(), 'AdminEdit')]"));
                    expect(ime).to.not.be.empty;
                    let priimek = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/p[3][contains(text(), 'AdminEdit')]"));
                    expect(priimek).to.not.be.empty;
                    let opis = await brskalnik.findElement(By.xpath("/html/body/app-root/app-profile/div/div[2][contains(text(), 'Admin spremenil opis.')]"));
                    expect(opis).to.not.be.empty;
                });
            });

            context("Admin uporabniku doda psa preko dashboarda", function () {

                this.timeout(30 * 1000);
                before(() => {
                    brskalnik.get(aplikacijaUrl);
                });

                it("pojdi na dashboard", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//h1");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Dashboard')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi profil za urejanje", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "/html/body/app-root/app-dashboard/div[3]/h5/div/button[1]/img");
                    let povezava = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-dashboard/div[3]/h5/div/button[1]/img")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("klik na dodajanje psa", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//img");
                    let dodaj = await brskalnik.findElement(By.xpath("//*[@id=\"add_dog\"]/img"));
                    expect(dodaj).to.not.be.empty;
                    await dodaj.click();
                });

                it("vnesi podatke", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"breed\"]/option[1]");
                    let ime = await brskalnik.findElement(By.id("name"));
                    expect(ime).to.not.be.empty;
                    await ime.sendKeys("Adminov pes")
                    let opis = await brskalnik.findElement(By.name("description"));
                    expect(opis).to.not.be.empty;
                    await opis.sendKeys("Testni pes, ki ga je dodal admin.")
                });

                it("prikazi dropdown", async function () {
                    let povezava = await brskalnik.findElement(By.id("breed"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi pasmo iz dropdowna", async function () {
                    let povezava = await brskalnik.findElement(
                        By.xpath("//option[contains(text(), 'Afghan Hound')]"));
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("potrdi dodajanje", async function () {
                    let btn = await brskalnik.findElement(
                        By.xpath("//button[contains(text(), 'Add dog')]"));
                    expect(btn).to.not.be.empty;
                    await btn.click();
                });
            });

            context("Admin uredi oglas na Home", function () {

                this.timeout(30 * 1000);
                before(() => {
                    brskalnik.get(aplikacijaUrl);
                });

                it("pojdi na Home", async function () {

                    await new Promise(r => setTimeout(r, 1000));
                    let profile = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Profile')]"));
                    await profile.click();

                    await new Promise(r => setTimeout(r, 2000));
                    await pocakajStranNalozena(brskalnik, 10, "//a");
                    let home = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Home')]")
                    );
                    await home.click();

                    await pocakajStranNalozena(brskalnik, 10, "//h5");
                    let povezava = await brskalnik.findElement(
                        By.xpath("//a[contains(text(), 'Home')]")
                    );
                    expect(povezava).to.not.be.empty;
                    await povezava.click();
                });

                it("izberi oglas za urejanje", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "/html/body/app-root/app-home/div/div[2]/div[3]/h5/div[2]/button[1]/img");
                    let oglas = await brskalnik.findElement(
                        By.xpath("/html/body/app-root/app-home/div/div[2]/div[3]/h5/div[2]/button[1]/img")
                    );
                    expect(oglas).to.not.be.empty;
                    await oglas.click();
                });

                it("uredi oglas", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "//*[@id=\"postLocation\"]/option[1]");
                    let opis = await brskalnik.findElement(
                        By.xpath("//*[@id=\"postDescription\"]")
                    );
                    expect(opis).to.not.be.empty;
                    await opis.sendKeys("Edited post by admin.");
                    let confirm = await brskalnik.findElement(
                        By.xpath("/html/body/ngb-modal-window/div/div/div[3]/button[1]")
                    );
                    await confirm.click();
                });

                it("preveri ce je oglas posodobljen", async function () {
                    await pocakajStranNalozena(brskalnik, 10, "/html/body/app-root/app-home/div/div[2]/div[3]/div/p");
                    let editedOpis = await brskalnik.findElement(By.xpath("/html/body/app-root/app-home/div/div[2]/div[3]/div/p[contains(text(), 'Edited post by admin.')]"));
                    expect(editedOpis).to.not.be.empty;
                });
            });
        });

        after(async () => {
            brskalnik.quit();
        });

    } catch (napaka) {
        console.log("Med testom je prišlo do napake!");
    }
})();