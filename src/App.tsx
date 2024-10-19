import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/App.scss';
import { useTranslation } from 'react-i18next';
import { CustomDropdown } from './CustomDropdown';
import lightBreakfastFromServer from './api/light_breakfasts.json';
import nutritiousBreakfastFromServer from './api/nutritious_breakfasts.json';
import croissantsFromServer from './api/croissants.json';
import burgersFromServer from './api/burgers.json';
import soupsFromServer from './api/soups.json';
import saladsFromServer from './api/salads.json';
import tostadasFromServer from './api/tostadas.json';
import saltPancakesFromServer from './api/saltPancakes.json';
import pancakesFromServer from './api/pancakes.json';
import brunchesFromServer from './api/brunches.json';
import naturalTeaFromServer from './api/natural-tea.json';
import brewedTeaFromServer from './api/brewed-tea.json'
import hotCoffeeFromServer from './api/hot-coffee.json';
import coldCoffeeFromServer from './api/cold-coffee.json';
import lemonadesFromServer from './api/lemonades.json';
import cocktailsFromServer from './api/cocktails.json';
import nonAlcoholicFromServer from './api/non-alcohol.json';
import drinksFromServer from './api/drinks.json';

export const App = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showStart, setShowStart] = useState(true);
  const [hideStart, setHideStart] = useState(false);

  const options = [
    { value: 'en', label: 'English', icon: 'icons/uk.png' },
    { value: 'es', label: 'Español', icon: 'icons/spain.png' },
    { value: 'ru', label: 'Русский', icon: 'icons/russia.png' },
    { value: 'uk', label: 'Українська', icon: 'icons/ukraine.png' },
  ];

  const changeLanguage = (lng: string) => {
    setLoading(true);
    // Затримка 3 секунди перед зміною мови
    setTimeout(() => {
      i18n.changeLanguage(lng).then(() => {
        setLoading(false);
        setLanguage(lng);
      });
    }, 1000); // 3000 мс = 3 секунди
  };

  useEffect(() => {
    i18n.changeLanguage('en');
    document.body.classList.add('no-scroll');

    const timer = setTimeout(() => {
      setHideStart(true); // Починаємо зникнення через прозорість
      setTimeout(() => {
        setShowStart(false);
        document.body.classList.remove('no-scroll'); // Повністю вимикаємо через display: none
      }, 1000); // Затримка 1 секунда, поки завершується анімація зникнення
    }, 5000);

    // Очистити таймер при розмонтуванні компонента
    return () => clearTimeout(timer);
  }, []);

  function toggleMenu(isOpen: boolean): void {
    const menu = document.getElementById("menu");
    const header = document.getElementById("header");
    if (menu && header) {
      menu.classList.toggle("open", isOpen);
      header.classList.toggle("hidden", isOpen);
    }
  }

  return (
    <div className="app">
      <div className={`start ${hideStart ? 'start--hidden' : 'start--visible'}`}>
        <div className="start__content">
          <img src="logo.png" alt="" className="start__logo"/>
          <img src="coffee.gif" alt="" className="start__gif"/>
          <h1 className="start__header">Start your day with coffee</h1>
        </div>
      </div>

      <header className="header" id="header">
        <div className="header__icon">
          <a href="#menu" className="icon icon--menu" onClick={() => toggleMenu(true)}></a>
        </div>

        <div className="header__logo">
          <a href="" className="icon icon--logo"></a>
        </div>
        <CustomDropdown options={options} selectedLanguage={language} onLanguageChange={changeLanguage}/>
      </header>

      <nav className="app__menu menu" id="menu">
        <div className="menu__top">
          <div className="menu__icon">
            <a href="#header" className="icon icon--close" onClick={() => toggleMenu(false)}></a>
          </div>
          <div className="menu__logo">
            <a href="" className="icon icon--logo"></a>
          </div>
          <CustomDropdown options={options} selectedLanguage={language} onLanguageChange={changeLanguage}/>
        </div>
        <div className="menu__nav">
          <ul className="menu-nav accordion" id="accordionExample">
            <li className="menu-nav__item">
            
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {t('main.coffee')}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#hotCoffee" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                          {t('header.hotCoffee')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#coldCoffee" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                          {t('header.coldCoffee')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#naturalTeas" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.naturalTea')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#brewedTeas" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.brewedTea')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </li>
            <li className="menu-nav__item">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {t('main.food')}
                  </button>
                </h2>
                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                   <div className="accordion-body">
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#burger" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.burgers')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#croissant" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.croissants')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#light" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.light')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#nutritious" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.nutritious')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#soups" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.soups')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#salads" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.salads')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#tostadas" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.tostadas')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#pancakes" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.pancakes')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#brunches" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.brunches')}
                        </a>
                      </li>
                    </ul>
                   </div>
                 </div>
              </div>
            </li>
            <li className="menu-nav__item">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    {t('main.drinks')}
                  </button>
                </h2>
                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                   <div className="accordion-body">
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#lemonades" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.lemonades')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#cocktails" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.cocktails')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#nonAlcohol" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.nonAlcoholic')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#alcohol" className="accordion-body__link" onClick={() => toggleMenu(false)}>
                        {t('header.drinks')}
                        </a>
                      </li>
                    </ul>
                   </div>
                 </div>
              </div>
            </li>
            
          </ul>
        </div>
      </nav>
      <main>
        <section className="drinks">
          <div className="hotCoffee" id="hotCoffee">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.hotCoffee')}
                </h1>

                <ul className="drinks__list">
                  {hotCoffeeFromServer.map(hotCoffee => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`coffee.name.${hotCoffee.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{hotCoffee.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <img src="coffee_icon.png" alt="" className="drinks__icon drinks__icon--coffee"/>
              </div>
            </div>
            <div className="container">
              <img src="hot_coffee.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="coldCoffee" id="coldCoffee">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.coldCoffee')}
                </h1>

                <ul className="drinks__list">
                  {coldCoffeeFromServer.map(coldCoffee => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`coffee.name.${coldCoffee.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{coldCoffee.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <img src="coldCoffee_icon.png" alt="" className="drinks__icon drinks__icon--coldCoffee"/>
              </div>
            </div>
            <div className="container">
              <img src="cold_coffee.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="naturalTeas" id="naturalTeas">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.naturalTea')}
                </h1>

                <ul className="drinks__list drinks__list--tea">
                  {naturalTeaFromServer.map(naturalTea => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`naturalTea.name.${naturalTea.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{naturalTea.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="tea_icon.png" alt="" className="drinks__icon drinks__icon--tea"/>
            </div>
            <div className="container">
              <img src="natural_tea.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="brewedTeas" id="brewedTeas">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.brewedTea')}
                </h1>

                <ul className="drinks__list">
                  {brewedTeaFromServer.map(brewedTea => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`brewedTea.name.${brewedTea.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{brewedTea.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
              <img src="brewed_icon.png" alt="" className="drinks__icon drinks__icon--brewedTea"/>
            </div>
            <div className="container">
              <img src="hot_tea.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="lemonades" id="lemonades">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.lemonades')}
                </h1>

                <ul className="drinks__list">
                  {lemonadesFromServer.map(lemonade => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`lemonades.name.${lemonade.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{lemonade.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <img src="lemonade_icon.png" alt="" className="drinks__icon drinks__icon--lemonade"/>
              </div>
            </div>
            <div className="container">
              <img src="lemonade.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="cocktails" id="cocktails">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.cocktails')}
                </h1>

                <ul className="drinks__list">
                  {cocktailsFromServer.map(cocktail => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`cocktails.name.${cocktail.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{cocktail.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <img src="cocktail_icon1.png" alt="" className="drinks__icon drinks__icon--cocktail"/>
              </div>
            </div>
            <div className="container">
              <img src="cocktail.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="nonAlcohol" id="nonAlcohol">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.nonAlcoholic')}
                </h1>

                <ul className="drinks__list">
                  {nonAlcoholicFromServer.map(nonAlcohol => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`nonAlcoholic.name.${nonAlcohol.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{nonAlcohol.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <img src="nonalcohol_icon.png" alt="" className="drinks__icon drinks__icon--nonAlcohol"/>
              </div>
            </div>
            <div className="container">
              <img src="drinks.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="drink" id="alcohol">
            <div className="app__type-off drinks__info">
              <div className="container">
                <h1 className="title drinks__title">
                  {t('header.drinks')}
                </h1>

                <ul className="drinks__list">
                  {drinksFromServer.map(drink => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`drinks.name.${drink.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{drink.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <img src="drinks_icon.png" alt="" className="drinks__icon drinks__icon--drinks"/>
              </div>
            </div>
            <div className="container">
              <img src="wine.jpg" alt="" className="foto drink__foto"/>
            </div>

          </div>

          
          
        </section>

        <section className="food">
          <div className="burger" id="burger">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.burgers')}
                </h1>
                <ul className="food__list">
                  {burgersFromServer.map(burger => (
                    <li className="product">
                    <div className="product__main">
                      <span className="product__name">{t(`burgers.name.${burger.id}`)}</span>
                      <span className="product__separator"></span>
                      <span className="product__price">{burger.price}€</span>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
              <img src="burger_icon1.png" alt="" className="food__icon food__icon--burger"/>
            </div>
            <div className="container">
              <img src="burger.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="croissant" id="croissant">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.croissants')}
                </h1>
                <ul className="food__list">
                  {croissantsFromServer.map(croissant => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`croissants.name.${croissant.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{croissant.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="croissant_icon.png" alt="" className="food__icon food__icon--croissant"/>
            </div>
            <div className="container">
              <img src="croissant.jpg" alt="" className="foto"/>
            </div>
            
          </div>

          <div className="light-breakfast" id="light">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.light')}
                </h1>
                <ul className="food__list">
                  {lightBreakfastFromServer.map(lightBreakfast => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`lightBreakfast.name.${lightBreakfast.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{lightBreakfast.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="light_icon2.png" alt="" className="food__icon food__icon--light"/>
            </div>
            <div className="container">
              <img src="oatmeal.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="nutritious" id="nutritious">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.nutritious')}
                </h1>
                <ul className="food__list">
                  {nutritiousBreakfastFromServer.map(nutritious => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`nutritious.name.${nutritious.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{nutritious.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="fork.png" alt="" className="food__icon food__icon--nutritious"/>
            </div>
            <div className="container">
              <img src="english_breakfast.jpg" alt="" className="foto"/>
            </div>
          </div>


          <div className="soups" id="soups">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.soups')}
                </h1>
                <ul className="food__list">
                  {soupsFromServer.map(soups => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`soups.name.${soups.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{soups.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="soup_icon.png" alt="" className="food__icon food__icon--soup"/>
            
            </div>
            <div className="container">
              <img src="soup.png" alt="" className="foto"/>
            </div>
          </div>

          <div className="salads" id="salads">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.salads')}
                </h1>
                <ul className="food__list">
                  {saladsFromServer.map(salads => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`salads.name.${salads.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{salads.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="salad_icon.png" alt="" className="food__icon food__icon--salad"/>
            
            </div>
            <div className="container">
              <img src="salads.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="tostadas" id="tostadas">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.tostadas')}
                </h1>
                <ul className="food__list">
                  {tostadasFromServer.map(tostadas => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`tostadas.name.${tostadas.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{tostadas.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="tostada_icon.png" alt="" className="food__icon food__icon--tostada"/>
            
            </div>
            <div className="container">
              <img src="tostada.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="saltPancakes" id="saltPancakes">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.crepes')}
                </h1>
                <ul className="food__list">
                  {saltPancakesFromServer.map(crepe => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`crepes.name.${crepe.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{crepe.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="saltPancake_icon1.png" alt="" className="food__icon food__icon--crepe"/>
            
            </div>
            <div className="container">
              <img src="pancake.jpg" alt="" className="foto"/>
            </div>
          </div>


          <div className="pancakes" id="pancakes">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.pancakes')}
                </h1>
                <ul className="food__list">
                  {pancakesFromServer.map(pancakes => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`pancakes.name.${pancakes.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{pancakes.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="pancake_icon.png" alt="" className="food__icon food__icon--pancake"/>
            
            </div>
            <div className="container">
              <img src="pancake.jpg" alt="" className="foto"/>
            </div>
          </div>

          <div className="brunches" id="brunches">
            <div className="app__type-off food__info">
              <div className="container">
                <h1 className="food__title title">
                  {t('header.brunches')}
                </h1>
                <ul className="food__list">
                  {brunchesFromServer.map(brunches => (
                    <li className="product">
                      <div className="product__main">
                        <span className="product__name">{t(`brunches.name.${brunches.id}`)}</span>
                        <span className="product__separator"></span>
                        <span className="product__price">{brunches.price}€</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <img src="brunch_icon.png" alt="" className="food__icon food__icon--brunch"/>
            
            </div>
            <div className="container">
              <img src="brunch.jpg" alt="" className="foto"/>
            </div>
          </div>


          
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">
              <a href="" className="icon icon--logo"></a>
            </div>
            <div className="footer__insta">
              <a href="https://www.instagram.com/dolce.caffe.torrevieja1?igsh=MTN3aXBnYW4wN3Voeg==" className="icon icon--insta"></a>
            </div>
            <div className="footer__phone">
              <p className="footer__label">{t('main.phone')}: 
                <br/>
                <a href="tel:+34613510469" className="footer__link">613 51 04 69</a>
              </p>
            </div>
            <div className="footer__adress">
              <p className="footer__label">{t('main.adress')}:
                <br/>
                <a href="https://maps.app.goo.gl/xKKN2eDrS2pDi3VX8" className="footer__link" target="_blank">
                   Torrevieja, calle Moriones 27
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
