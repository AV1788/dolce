import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          main: {
            coffee: 'Coffee & Tea',
            food: 'Food',
            tea: 'Tea',
            drinks: 'Drinks',
            phone: 'Contacts',
            adress: 'Adress',
          },
          header: {
            light: 'Light breakfasts',
            nutritious: 'Nutritious breakfasts',
            croissants: 'Croissants',
            burgers: 'Burgers',
            soups: 'Soups',
            salads: 'Salads',
            tostadas: 'Tostadas',
            pancakes: 'Sweet pancakes and crepes',
            brunches: 'Brunches',
            naturalTea: 'Natural tea',
            brewedTea: 'Brewed tea',
            hotCoffee: 'Hot coffee',
            coldCoffee: 'Cold coffee',
            lemonades: 'Lemonades',
            cocktails: 'Cocktails',
            nonAlcoholic: 'Non-Alcoholic Drinks',
            drinks: 'Alcoholic Drinks',
            crepes: 'Savory crepes gluten-free',
          },
          lightBreakfast: {
            name: {
              sunDried: 'Cottage cheese pancakes with sun-dried tomatoes and pesto sauce',
              cherries: 'Cottage cheese pancakes with cherries and Greek yogurt',
              caramel: 'Cottage cheese pancakes with caramel, pear and coconut',
              wildBerries: 'Cottage cheese donuts with wild berries, nuts and vanilla cream',
              mango: 'Cottage cheese donuts with mango, nuts and vanilla cream',
              oatmeal: 'Oatmeal with coconut milk, banana, blueberries and cinnamon',
              chia: 'Chia pudding with granola, Greek yogurt, wild berries and jam',
              granola: 'Granola with Greek yogurt, wild berries, banana, nuts and jam',
              berry: 'Berry mix smoothie bowl with strawberries and mango, granola and nuts',
              passion: 'Passion fruit and mango smoothie bowl with kiwi, banana, granola and nuts',
              acai: 'Acai bowl with chia seeds, granola, mango, kiwi, berries and homemade hazelnut butter'
            }
          },
          nutritious: {
            name: {
              shakshukaFeta: 'Shakshuka with feta cheese',
              shakshukaMushroom: 'Shakshuka with mushrooms and bacon',
              cocotte: 'Egg cocotte with spanish ham, cheese and herbs',
              englishBreak: 'English breakfast',
              hashBrown: 'Hash brown with salmon, avocado and homemade tartar sauce',
              zucchini: 'Zucchini pancakes with salmon, poached egg, guacamole, cucumber and Béarnaise sauce',
              bowl: 'Bowl with quinoa, salmon, mango, cucumber and avocado',
              roll: 'Fresh roll with shrimp',
              camembert: 'Fried camembert in breadcrumbs with berry sauce, potatoes and cheese sauce',
              pastrami: 'Sandwich with pastrami, Cheddar cheese and signature sauce with potatoes',
              club: 'Club sandwich with chicken, bacon, cheese, tomatoes, lettuce and mustard sauce, served with potatoes',
              sandwich: 'Sandwich with salmon, avocado, omelette, tomatoes, lettuce and Philadelphia cheese',
              chicken_sand: 'Chicken sandwich with tomato, Cheddar cheese, lettuce and mayonnaise',
              fried: 'Fried rice with chicken in sweet and sour sauce, scrambled eggs and vegetables',
              kiev: 'Kiev cutlet with mashed potatoes',
            }
          },
          croissants: {
            name: {
              caesar: 'New York croissant "Caesar"',
              caprese: 'Croissant "Caprese" with tomatoes, mozzarella cheese and pesto sauce',
              tuna: 'Croissant with tuna, Philadelphia cheese, cucumber, lettuce and egg',
              bakedGoat: 'Croissant with baked goat cheese, Сheddar cheese, berry sauce, berries and honey',
              turkey: 'Croissant with turkey, fresh cheese, Caesar sauce, tomatoes and lettuce',
            }
          },
          burgers: {
            name: {
              mushroom: 'Mushroom burger (Burger with beef patty, Cheddar cheese, mushroom julienne, fried bacon, tomatoes, lettuce and truffle mayonnaise with potatoes)',
              spicy: 'Spicy burger (Burger with beef patty, Cheddar cheese, pickled jalapeno peppers, tomatoes, lettuce and ketchup with potatoes)',
              goat: 'Burger with goat cheese (Burger with beef patty, goat cheese, caramelized onions, tomatoes, lettuce and signature sauce with potatoes)',
            }
            
          },
          soups: {
            name: {
              cheese: 'Cheese soup with ham and parmesan',
              cream: 'Cream of mushroom soup with bacon and croutons',
              finnish: 'Finnish soup with fresh salmon',
            }
          },
          salads: {
            name: {
              chicken: 'Salad with chicken, mozzarella and tomatoes',
              ham: 'Salad with ham, pear and goat cheese',
              beetroot: 'Salad with beetroot, feta cheese, walnuts and cranberries',
              turkey: 'Salad with turkey, sun-dried tomatoes, parmesan and honey-mustard dressing',
            }
          },
          tostadas: {
            name: {
              poached: 'Tostada with poached eggs, guacamole, salmon, Béarnaise sauce',
              toast: 'Tostada with poached egg, mustard sauce, spinach, bacon and Béarnaise sauce',
              brie: 'Tostada with brie cheese, ham, cherry tomatoes, sun-dried tomatoes and balsamic sauce',
              phila: 'Tostada with Philadelphia cheese, salmon and avocado',
              tomato: 'Tostada with tomatoes',
              manchego: 'Tostada with manchego cheese, nuts, dried cranberries and honey',
              liver: 'Tostada with chicken liver pate, forest fruit jam and pine nuts',
              french: 'French toast with mascarpone cream, fresh berries and nuts',
            }
          },
          crepes: {
            name: {
              bacon: 'Breton crepe with bacon, cheese and egg',
              salmon: 'Breton crepe with salmon, avocado and cheese Philadelphia',
              champignon: 'Breton crepe with champignons and chicken',
            }
          },
          pancakes: {
            name: {
              strawberry: 'Classic pancakes with strawberry cream, banana and fruit',
              hazelnut: 'Classic pancakes with homemade blueberry jam, banana, berries and hazelnut butter',
              banana: 'Chocolate pancakes with banana, ice cream and chocolate sauce',
              poppy: 'Crepe with poppy seeds, cherries and cottage cheese',
              cinnamon: 'Crepe with apples, caramel, cinnamon and nuts',
              suzette: 'Crepe suzette with orange caramel, fruit and ice cream',
              nutella: 'Crepe with Nutella and bananas',
              condensed: 'Crepe with condensed milk and banana',
            }
            
          },
          brunches: {
            name: {
              bacon: 'Bacon brunch (New York croissant with bacon, Philadelphia cheese, spinach and egg; for dessert chia pudding with Greek yogurt, granola and fruit, coffee, orange juice or lemonade to choose from)',
              salmon: 'Salmon brunch (brioche with guacamole, salmon, poached egg, Béarnaise sauce and salad; for dessert mini pancakes with fruit and Nutella; coffee, orange juice or lemonade to choose from)',
              greek: 'Greek brunch (omelette with tomatoes, peppers, feta cheese and olives; for dessert donuts with vanilla cream and fruit; coffee and orange juice or lemonade to choose from)'
            }
          },
          naturalTea: {
            name: {
              citrus: 'Citrus',
              berries: 'Forest Berries',
              tropical: 'Tropical',
              
            }
          },
          brewedTea: {
            name: {
              black: 'Black',
              green: 'Green',
              red: 'Red',
              
            }
          },
          coffee: {
            name: {
              espresso: 'Espresso',
              americano: 'Americano',
              cortado: 'Cortado',
              coffeeS: 'Coffee with Milk (S)',
              coffeeM: 'Coffee with Milk (M)',
              latte: 'Latte',
              flatWhite: 'Flat White',
              bombon: 'Bombon (espresso and condensed milk)',
              carajillo: 'Carajillo (espresso and brandy)',
              belmonte: 'Belmonte (espresso, brandy and condensed milk)',
              cappuccino: 'Cappuccino',
              baileysCap: 'Baileys cappuccino',
              matcha: 'Matcha latte',
              colacao: 'Colacao',
              whc: 'White hot chocolate',
              chc: 'Classic hot chocolate',
              raf: 'Raf (espresso, cream, syrup of choice)',
              irish: 'Irish coffee (espresso, cream and brandy)',
              iceLatte: 'Iced latte',
              matchaRaspberry: 'Iced matcha-raspberry latte',
              frappeStrawberry: 'Strawberry frappe',
              frappeCaramel: 'Caramel frappe',
              affogato: 'Affogato (espresso, ice cream and nuts)',
              matchaIce: 'Iced matcha latte',
              matchaOrange: 'Matcha orange',
              espressoTonic: 'Espresso tonic',
              bumble: 'Bumble (orange juice, espresso)',
              
            }
          },
          lemonades: {
            name: {
              citrus: 'Citrus',
              lavender: 'Lavender-Blackcurrant',
              pear: 'Pear-Vanilla',
              cucumber: 'Cucumber-Grapefruit',
              raspberry: 'Raspberry-Coconut',
              
            }
          },
          cocktails: {
            name: {
              coconutCherry: 'Coconut-Cherry (vodka, coconut liqueur, cherry juice)',
              cremeBrulee: 'Martini Crème Brûlée (vodka, sugar syrup, vanilla syrup, cream, egg white)',
              martiniEspresso: 'Martini Espresso (vodka, coffee liqueur, vanilla syrup, espresso)',
              loveIs: 'Love is... (Baileys, sugar syrup, strawberry syrup, cream, milk)',
              sangria: 'Sangria (wine (red or white), frozen berries, lemon, orange, sugar syrup, soda water, mint)',
              aperol: 'Strawberry Aperol (Aperol, sparkling wine, strawberry syrup, soda water)',
              mojito: 'Mojito (rum, mint, lime, cane sugar, lime juice, Sprite)',
              blueMargarita: 'Blue Margarita (tequila, orange liqueur, lemon juice, sugar syrup, Blue Curacao syrup)',
              ginTonic: 'Gin Tonic (gin, tonic, lemon, cucumber)',
              cosmo: 'Cosmopolitan (vodka, orange liqueur, cranberry juice, lemon juice, sugar syrup)',
              aviation: 'Aviation (gin, blackberry liqueur, violet syrup, lemon juice)',
              negroni: 'Negroni (gin, red vermouth, Campari)',
              pinkLady: 'Pink Lady (gin, grenadine, sugar syrup, lemon juice, egg white)',
              whiskySour: 'Whisky Sour (Soberano, cranberry syrup, lemon juice, sugar syrup, egg white)',
              tequilaSunrise: 'Tequila Sunrise (tequila, orange juice, grenadine, orange)',
              bramble: 'Bramble (gin, blackberry liqueur, blackcurrant syrup, lemon juice, sugar syrup, blackberry)',
              bellini: 'Bellini (champagne and peach juice)',
              mimosa: 'Mimosa (champagne and orange juice)',
              rossini: 'Rossini (champagne and strawberry puree)',
              kirRoyal: 'Kir Royal (champagne and blackberry liqueur)',
            }
          },
          nonAlcoholic: {
            name: {
              orangeJuice: 'Orange Fresh Juice',
              cola: 'Coca-Cola',
              fanta: 'Fanta',
              sprite: 'Sprite',
              tonic: 'Tonic',
              water: 'Water',
              sparkl: 'Sparkling Water',
              juices: 'Juices',
            }
          },
          drinks: {
            name: {
              whiteWine: 'White Wine',
              redWine: 'Red Wine',
              beer: 'Beer',
              nonBeer: 'Non-Alcoholic Beer',
            }
          },
          
          
        }
      },
      ru: {
        translation: {
          main: {
            coffee: 'Кофе и чай',
            food: 'Еда',
            tea: 'Чай',
            drinks: 'Напитки',
            phone: 'Контакты',
            adress: 'Адрес',
          },
          header: {
            light: 'Легкие завтраки',
            nutritious: 'Сытные завтраки',
            croissants: 'Круассаны',
            burgers: 'Бургеры',
            soups: 'Супы',
            salads: 'Салаты',
            tostadas: 'Тостады',
            pancakes: 'Сладкие блинчики и панкейки',
            brunches: 'Бранчи',
            naturalTea: 'Натуральный чай',
            brewedTea: 'Заварной чай',
            hotCoffee: 'Горячий кофе',
            coldCoffee: 'Холодный кофе',
            lemonades: 'Лимонады',
            cocktails: 'Коктейли',
            nonAlcoholic: 'Безалкогольные напитки',
            drinks: 'Алкогольные напитки',
            crepes: 'Соленые блинчики без глютена',
          },
          lightBreakfast: {
            name: {
              sunDried: 'Сырники с вялеными томатами и соусом песто',
              cherries: 'Сырники с вишней и греческим йогуртом',
              caramel: 'Сырники с карамелью, грушей и кокосом',
              wildBerries: 'Творожные пончики с лесными ягодами, орехами и ванильным кремом',
              mango: 'Творожные пончики с манго, орехами и ванильным кремом',
              oatmeal: 'Овсянка на кокосовом молоке с бананом, черникой и корицей',
              chia: 'Чиа-пудинг с гранолой, греческим йогуртом, лесными ягодами и джемом',
              granola: 'Гранола с греческим йогуртом, лесными ягодами, бананом, орехами и джемом',
              berry: 'Смузи-боул из микса ягод с клубникой и манго, гранолой и орехами',
              passion: 'Смузи-боул из маракуи и манго с киви, бананом, гранолой и орехами',
              acai: 'Acai-боул с семенами чиа, гранолой, манго, киви, ягодами и домашней ореховой пастой)'
            }
          },
          nutritious: {
            name: {
              shakshukaFeta: 'Шакшука с сыром фета и зеленью',
              shakshukaMushroom: 'Шакшука с грибами и беконом',
              cocotte: 'Яйцо-кокот с хамоном, сыром и зеленью',
              englishBreak: 'Английский завтрак',
              hashBrown: 'Хашбраун с лососем, авокадо и домашним соусом тартар',
              zucchini: 'Оладки из цукини с лососем, яйцом пашот, гуакамоле, огурцом и соусом "Беарнез"',
              bowl: 'Боул с киноа, лососем, манго, огурцом и авокадо',
              roll: 'Фреш-ролл с креветками',
              camembert: 'Жаренный камамбер в панировке с ягодным соусом, картофелем и сырным соусом',
              pastrami: 'Сэндвич с пастрами, сыром "Чеддер" и авторским соусом, подаётся вместе с картофелем',
              club: 'Клаб сэндвич с курицей, беконом, сыром, томатами, салатом и горчичным соусом, подаётся вместе с картофелем',
              sandwich: 'Сэндвич с лососем, авокадо, омлетом, томатами, салатом и сыром "Филадельфия"',
              chicken_sand: 'Сэндвич с курицей, помидором, сыром "Чеддер", листьями салата и майонезом',
              fried: 'Жареный рис с курицей в кисло-сладком соусе, с яичницей и овощами',
              kiev: 'Котлета по-киевски с пюре',
            }
          },
          croissants: {
            name: {
              caesar: 'Нью-Йорк круассан "Цезарь"',
              caprese: 'Круассан "Капрезе" с томатами, сыром моцарелла и соусом песто',
              tuna: 'Круассан с тунцом, сыром "Филадельфия", огурцом, салатом и яйцом',
              bakedGoat: 'Круассан с запечённым козьим сыром, сыром "Чеддер", ягодным соусом, ягодами и медом',
              turkey: 'Круассан с индейкой, свежим сыром, соусом "Цезарь", помидорами и салатом',
            }
          },
          burgers: {
            name: {
              mushroom: 'Бургер грибной (Бургер с котлетой из говядины, сыром "Чеддер", грибным жульеном, жаренным беконом, помидорами, салатом и трюфельным майонезом с картошкой)',
              spicy: 'Бургер пикантный (Бургер с котлетой из говядины, сыром "Чеддер", маринованными перчиками халапеньо, помидорами, салатом и кетчупом с картошкой)',
              goat: 'Бургер с козьим сыром (Бургер с котлетой из говядины, козьим сыром, карамелезированным луком, помидорами, салатом и авторским соусом с картошкой)',
            }
            
          },
          soups: {
            name: {
              cheese: 'Сырный суп с хамоном и пармезаном',
              cream: 'Грибной крем-суп с беконом и сухариками',
              finnish: 'Финский суп со свежей семгой',
            }
          },
          salads: {
            name: {
              chicken: 'Салат с курицей, моцареллой и томатами',
              ham: 'Салат с хамоном, грушей и козьим сыром',
              beetroot: 'Салат со свеклой, сыром фета, грецкими орехами и клюквой',
              turkey: 'Салат с индейкой, вялеными томатами, пармезаном и медово-горчичной заправкой',
            }
          },
          tostadas: {
            name: {
              poached: 'Тостада с яйцами пашот, гуакамоле, лососем и соусом "Беарнез"',
              toast: 'Тостада с яйцом пашот, горчичным соусом, шпинатом, беконом и соусом "Беарнез"',
              brie: 'Тостада с сыром бри, хамоном, помидорами черри, помидорами вялеными и бальзамическим соусом',
              phila: 'Тостада с сыром "Филадельфия", лососем и авокадо',
              tomato: 'Тостада с томатами',
              manchego: 'Тостада с сыром манчего, орехами, вяленой клюквой и медом',
              liver: 'Тостада с паштетом из куриной печени, джемом из лесных фруктов и кедровыми орешками',
              french: 'Французский тост с кремом маскарпоне, свежими ягодами и орехами',
            }
          },
          crepes: {
            name: {
              bacon: 'Бретонский блинчик с беконом, сыром и яйцом',
              salmon: 'Бретонский блинчик с лососем, авокадо и сыром "Филадельфия"',
              champignon: 'Бретонский блинчик с шампиньонами и курицей',
            }
          },
          pancakes: {
            name: {
              strawberry: 'Классические панкейки с клубничным кремом, бананом и фруктами',
              hazelnut: 'Классические панкейки с домашним черничным джемом, бананом, ягодами и ореховой пастой',
              banana: 'Шоколадные панкейки с бананом, мороженым и шоколадным соусом',
              poppy: 'Блинчик с маком, вишней и творогом',
              cinnamon: 'Блинчик с яблоками, карамелью, корицей и орехами',
              suzette: 'Креп-сюзет с апельсиновой карамелью, фруктами и мороженым',
              nutella: 'Блинчик с нутелой и бананами',
              condensed: 'Блинчик со сгущенкой и бананом',
            }
          },
          brunches: {
            name: {
              bacon: 'Бранч с беконом ( Нью-Йорк круассан с беконом, сыром "Филадельфия", шпинатом и яйцом; на десерт чиа-пудинг с греческим йогуртом, гранолой и фруктами, кофе, апельсиновый сок или лимонад на выбор)',
              salmon: 'Бранч с лососем (бриошь с гуакамоле, лососем, яйцом-пашот, соусом "Беарнез" и салатом; на десерт мини-панкейки с фруктами и нутелой; кофе, апельсиновый сок или лимонад на выбор)',
              greek: 'Греческий бранч (омлет с помидорами, перцем, сыром фета и оливками; на десерт пончики с ванильным кремом и фруктами; кофе и апельсиновый сок или лимонад на выбор)'
            }
          },
          naturalTea: {
            name: {
              citrus: 'Цитрусовый',
              berries: 'Лесные ягоды',
              tropical: 'Тропические',
              
            }
          },
          brewedTea: {
            name: {
              black: 'Черный',
              green: 'Зелёный',
              red: 'Красный',
              
            }
          },
          coffee: {
            name: {
              espresso: 'Эспрессо',
              americano: 'Американо',
              cortado: 'Кортадо',
              coffeeS: 'Кофе с молоком (S)',
              coffeeM: 'Кофе с молоком (М)',
              latte: 'Латте',
              flatWhite: 'Флет-вайт',
              bombon: 'Бомбон (эспрессо и сгущённое молоко)',
              carajillo: 'Карахийо (эспрессо и бренди)',
              belmonte: 'Бельмонте(эспрессо, бренди и сгущённое молоко)',
              cappuccino: 'Капучино',
              baileysCap: 'Бейлис капучино',
              matcha: 'Матча латте',
              colacao: 'Колакао',
              whc: 'Белый горячий шоколад',
              chc: 'Горячий шоколад классический',
              raf: 'Раф (эспрессо, сливки и сироп на выбор)',
              irish: 'Айриш кофе (эспрессо, сливки и бренди)',
              iceLatte: 'Холодный латте',
              matchaRaspberry: 'Холодный латте матча-малина',
              frappeStrawberry: 'Клубничный фраппе',
              frappeCaramel: 'Карамельный фраппе',
              affogato: 'Аффогато (эспрессо, мороженное и орехи)',
              matchaIce: 'Холодный латте матча',
              matchaOrange: 'Матча апельсин',
              espressoTonic: 'Эспрессо тоник',
              bumble: 'Бамбл (апельсиновый сок, эспрессо)',
              
            }
          },
          lemonades: {
            name: {
              citrus: 'Цитрусовый',
              lavender: 'Лаванда-смородина',
              pear: 'Груша-ваниль',
              cucumber: 'Огурец-грейпфрут',
              raspberry: 'Малина-кокос',
              
            }
          },
          cocktails: {
            name: {
              coconutCherry: 'Кокос-вишня (водка, кокосовый ликер, вишневый сок)',
              cremeBrulee: 'Мартини крем-брюле (водка, сахарный сироп, ванильный сироп, сливки, яичный белок)',
              martiniEspresso: 'Мартини-эспрессо (водка, кофейный ликер, ванильный сироп, эспрессо)',
              loveIs: 'Love is... (Бейлис, сахарный сироп, клубничный сироп, сливки, молоко)',
              sangria: 'Сангрия (вино (красное или белое), замороженные ягоды, лимон, апельсин, сахарный сироп, газированная вода, мята)',
              aperol: 'Клубничный апероль (Апероль, игристое вино, клубничный сироп, газированная вода)',
              mojito: 'Мохито (ром, мята, лайм, тростниковый сахар, сок лайма, спрайт)',
              blueMargarita: 'Голубая Маргарита (текила, апельсиновый ликер, лимонный сок, сахарный сироп, сироп Blue Curacao)',
              ginTonic: 'Джин-тоник (джин, тоник, лимон, огурец)',
              cosmo: 'Космополитан (водка, апельсиновый ликер, клюквенный сок, лимонный сок, сахарный сироп) ',
              aviation: 'Авиация (джин, ликер ежевики, фиалковый сироп, лимонный сок)',
              negroni: 'Негрони (джин, красный вермут, Campari)',
              pinkLady: 'Pink Lady (джин, гренадин, сахарный сироп, лимонный сок, яичный белок)',
              whiskySour: 'Whisky Sour (Soberano, клюквенный сироп, лимонный сок, сахарный сироп, яичный белок)',
              tequilaSunrise: 'Текила Санрайз (текила, апельсиновый сок, гренадин, апельсин)',
              bramble: 'Брамбл (джин, ликер ежевики, сироп черной смородины, лимонный сок, сахарный сироп, ежевика)',
              bellini: 'Беллини (шампанское и персиковый сок)',
              mimosa: 'Мимоза (шампанское и апельсиновый сок)',
              rossini: 'Россини (шампанское и клубничное пюре)',
              kirRoyal: 'Kir Royal (шампанское и ликер ежевики)',
            }
          },
          nonAlcoholic: {
            name: {
              orangeJuice: 'Апельсиновый фреш',
              cola: 'Кока-Кола',
              fanta: 'Фанта',
              sprite: 'Спрайт',
              tonic: 'Тоник',
              water: 'Вода',
              sparkl: 'Газированная вода',
              juices: 'Соки',
            }
          },
          drinks: {
            name: {
              whiteWine: 'Белое вино',
              redWine: 'Красное вино',
              beer: 'Пиво',
              nonBeer: 'Безалкогольное пиво',
            }
          },
        }
      },
      es: {
        translation: {
          main: {
            coffee: 'Café y Té',
            food: 'Comida',
            tea: 'Té',
            drinks: 'Bebidas',
            phone: 'Contactos',
            adress: 'Dirección',
          },
          header: {
            light: 'Desayunos ligeros',
            nutritious: 'Desayunos abundantes',
            croissants: 'Cruasanes',
            burgers: 'Hamburguesas',
            soups: 'Sopas',
            salads: 'Ensaladas',
            tostadas: 'Tostadas',
            pancakes: 'Tortitas y crepes',
            brunches: 'Branch',
            naturalTea: 'Té natural',
            brewedTea: 'Té preparado',
            hotCoffee: 'Café caliente',
            coldCoffee: 'Café frío',
            lemonades: 'Limonadas',
            cocktails: 'Cócteles',
            nonAlcoholic: 'Bebidas sin alcohol',
            drinks: 'Bebidas alcohol',
            crepes: 'Crepes salados sin gluten',
          },
          lightBreakfast: {
            name: {
              sunDried: 'Tortitas de queso con tomates secos, yogur griego y salsa pesto',
              cherries: 'Tortitas de queso con cereza y yogur griego',
              caramel: 'Tortitas de queso con caramelo, pera y coco',
              wildBerries: 'Donuts de queso con frutos del bosque, frutos secos y crema de vanilla',
              mango: 'Donuts de queso con mango, frutos secos y crema de vanilla',
              oatmeal: 'Papilla con leche de coco, arándanos, plátano y canela',
              chia: 'Pudding de chia con granola, yogur griego, frutas del bosque, almendra y mermelada',
              granola: 'Granola con yogur griego, plátano, frutas del bosque, almendra y mermelada',
              berry: 'Smoothie bowl con granola, fresa y mango',
              passion: 'Smoothie bowl de maracuya y mango con kiwi, plátano, granola y frutos secos',
              acai: 'Açaí bowl con semillas de chía, granola, mango, kiwi, frutos rojos y mantequilla de avellanas casera',
            }
          },
          nutritious: {
            name: {
              shakshukaFeta: 'Shakshuka con queso feta',
              shakshukaMushroom: 'Shaksuka con champiñones y bacon',
              cocotte: 'Huevos cocotte con jamón, queso и verduras',
              englishBreak: 'Desayuno inglés',
              hashBrown: 'Hash brown con salmón, aguacate y salsa tartar casera',
              zucchini: 'Tortitas de calabacin con salmón, huevo poché, guacamole, pepino y salsa bearnesa',
              bowl: 'Bowl con quinoa, salmón, mango, pepino y aguacate',
              roll: 'Rollo de gambas',
              camembert: 'Camamber frito con salsa de frutos rojos con patatas y salsa de queso',
              pastrami: 'Sandwich con pastrami, queso cheddar, patatas y salsa de autor',
              club: 'Clab Sandwich con pollo, bacon, queso, tomates, verduras y salsa de mostaza(se sirve con patatas)',
              sandwich: 'Sandwich con salmon, aguacate, tortilla, tomates, verduras y queso Philadelphia',
              chicken_sand: 'Sandwich de pollo con tomate, queso cheddar, lechuga y mayonesa',
              fried: 'Arroz frito con pollo en salsa agridulce, huevos revueltos y verduras',
              kiev: 'El pollo Kyiv con puré de patata',
            }
          },
          croissants: {
            name: {
              caesar: 'Cruasán Nueva York "César"',
              caprese: 'Cruasán "Caprese" con tomates, mozarella y salsa pesto',
              tuna: 'Cruasán con atún, queso Philadelphia, pepino, verduras y huevo',
              bakedGoat: 'Cruasán con queso de cabrá al horno, queso chedar, salsa de frutos rojos, frutos del bosque y miel',
              turkey: 'Cruasán con pavo, queso fresco, salsa César, tomates y verduras',
            }
          },
          burgers: {
            name: {
              mushroom: 'Hamburguesa de champiñones (Hamburguesa de ternera, queso chedar, pollo con champiñones con nata, bacon frito, tomates, lechuga y mayonesa de trufa con patatas)',
              spicy: 'Hamburguesa picante (Hamburguesa de ternera, queso chedar, pimientos jalapeños encurtidos, tomates, verduras y ketchup con patatas)',
              goat: 'Hamburguesa con queso de cabra (Hamburguesa de ternera, queso de cabra, cebolla caramelizada, tomates, lechuga y salsa de autor con patatas)',
            }
            
          },
          soups: {
            name: {
              cheese: 'Sopa de queso con jamón y parmesano',
              cream: 'Sopa cremosa de cetas con bacon y picatostes',
              finnish: 'Sopa filandesa con salmón',
            }
          },
          salads: {
            name: {
              chicken: 'Ensalada con pollo, mozarella y tomates',
              ham: 'Ensalada con jamon, pera y queso de cabra',
              beetroot: 'Ensalada con remolacha, queso feta, nueces y arandanos',
              turkey: 'Ensalada con pavo, tomates secos, parmesano y relledano de salsa de miel y mostaza',
            }
          },
          tostadas: {
            name: {
              poached: 'Tostada con huevos escalfados, guacamole, salmón y salsa bearnesa',
              toast: 'Tostada con huevo escalfado, salsa de mostaza, espinacas, bacon y salsa bearnesa',
              brie: 'Tostada con queso brie, jamón, tomates cherry, tomates secos y salsa balsámica',
              phila: 'Tostada con queso Philadelphia, salmón y aguacate',
              tomato: 'Tostada con tomates',
              manchego: 'Tostada con queso manchego, nueces, arándanos secos y miel',
              liver: 'Tostada con paté de hígado de pollo, mermelada de frutos del bosque y piñones',
              french: 'Tostada francesa con crema de mascarpone, frutos rojos frescos y frutos secos',
            }
          },
          crepes: {
            name: {
              bacon: 'Crepe bretona con bacon, queso y huevo',
              salmon: 'Crepe bretona con salmón, aguacate y queso Philadelphia',
              champignon: 'Crepe bretona con champiñones y pollo',
            }
          },
          pancakes: {
            name: {
              strawberry: 'Tortitas clásicas con crema de fresa, plátano y frutas del bosque',
              hazelnut: 'Tortitas clásicas con mermelada casera de arándano, plátano, frutos rojos y crema de avellanas',
              banana: 'Tortitas de chocolate con helado, plátano y salsa de chocolate',
              poppy: 'Crepe con amapola, cereza y requesón',
              cinnamon: 'Crepe con manzanas, caramelo, canela y nueces',
              suzette: 'Crepe suzette con caramelo de naranja y helado de vainilla',
              nutella: 'Crepe con nutella y plátano',
              condensed: 'Crepe con leche condensada y plátano',
            }
          },
          brunches: {
            name: {
              bacon: 'Branch con bacon (Cruasán Nueva York con bacon, queso Philadelphia, espinacas y huevo; para el postre pudding de chia con el yogur griego, granola y frutos, café, zumo de naranja natural o limonada para eligir)',
              salmon: 'Branch con salmon (brioche con guacamole, salmón, huevo poché, salsa bearnesa y verduras; para el postre mini tortitas con frutas y chocolate; café, zumo de naranja natural o limonada para eligir)',
              greek: 'Branch griego (tortilla con tomates, pimiento, queso feta y olivas; para el postre los donuts con crema de vanilla y frutos; café, zumo de naranja natural o limonada para eligir)'
            }
          },
          naturalTea: {
            name: {
              citrus: 'Cítrico',
              berries: 'Frutos del Bosque',
              tropical: 'Tropical',
              
            }
          },
          brewedTea: {
            name: {
              black: 'Negro',
              green: 'Verde',
              red: 'Rojo',
              
            }
          },
          coffee: {
            name: {
              espresso: 'Espresso',
              americano: 'Americano',
              cortado: 'Cortado',
              coffeeS: 'Café con leche (S) ',
              coffeeM: 'Café con leche (M)',
              latte: 'Latte',
              flatWhite: 'Flat White',
              bombon: 'Bombon (espresso y leche condensada)',
              carajillo: 'Carajillo (espresso y brandy)',
              belmonte: 'Belmonte (espresso, brandy y leche condensada)',
              cappuccino: 'Capuchino',
              baileysCap: 'Capuchino con Baileys',
              matcha: 'Matcha Latte',
              colacao: 'Colacao',
              whc: 'Chocolate blanco caliente',
              chc: 'Chocolate caliente clásico',
              raf: 'Raf (espresso, crema y sirope a elección)',
              irish: 'Café irlandés (espresso, crema y brandy)',
              iceLatte: 'Latte frío',
              matchaRaspberry: 'Latte frío de matcha y frambuesa',
              frappeStrawberry: 'Frappe de fresa',
              frappeCaramel: 'Frappe de caramelo',
              affogato: 'Affogato (espresso, helado y nueces)',
              matchaIce: 'Latte frío de matcha',
              matchaOrange: 'Matcha naranja',
              espressoTonic: 'Espresso tonica',
              bumble: 'Bumble (zumo de naranja y espresso)',
              
            }
          },
          lemonades: {
            name: {
              citrus: 'Cítrico',
              lavender: 'Lavanda con grosella negra',
              pear: 'Pera con vainilla',
              cucumber: 'Pepino con pomelo',
              raspberry: 'Frambuesa con coco',
              
            }
          },
          cocktails: {
            name: {
              coconutCherry: 'Coco-Cereza (vodka, licor de coco, jugo de cereza)',
              cremeBrulee: 'Martini Crème Brûlée (vodka, jarabe de azúcar, jarabe de vainilla, crema, clara de huevo)',
              martiniEspresso: 'Martini Espresso (vodka, licor de café, jarabe de vainilla, espresso)',
              loveIs: 'Love is... (Baileys, jarabe de azúcar, jarabe de fresa, crema, leche)',
              sangria: 'Sangría (vino (tinto o blanco), frutas congeladas, limón, naranja, jarabe de azúcar, agua con gas, menta)',
              aperol: 'Aperol de Fresa (Aperol, vino espumoso, jarabe de fresa, agua con gas)',
              mojito: 'Mojito (ron, menta, lima, azúcar de caña, jugo de lima, Sprite)',
              blueMargarita: 'Margarita Azul (tequila, licor de naranja, jugo de limón, jarabe de azúcar, jarabe de Blue Curacao)',
              ginTonic: 'Gin Tonic (ginebra, tónica, limón, pepino)',
              cosmo: 'Cosmopolitan (vodka, licor de naranja, jugo de arándano, jugo de limón, jarabe de azúcar)',
              aviation: 'Aviación (ginebra, licor de mora, jarabe de violeta, jugo de limón)',
              negroni: 'Negroni (ginebra, vermut rojo, Campari)',
              pinkLady: 'Pink Lady (ginebra, granadina, jarabe de azúcar, jugo de limón, clara de huevo) ',
              whiskySour: 'Whisky Sour (Soberano, jarabe de arándano, jugo de limón, jarabe de azúcar, clara de huevo)',
              tequilaSunrise: 'Tequila Sunrise (tequila, jugo de naranja, granadina, naranja)',
              bramble: 'Bramble (ginebra, licor de mora, jarabe de grosella, jugo de limón, jarabe de azúcar, mora)',
              bellini: 'Bellini (champán y jugo de durazno)',
              mimosa: 'Mimosa (champán y jugo de naranja)',
              rossini: 'Rossini (champán y puré de fresa)',
              kirRoyal: 'Kir Royal (champán y licor de mora)',
            }
          },
          nonAlcoholic: {
            name: {
              orangeJuice: 'Zumo de Naranja Natural',
              cola: 'Coca-Cola',
              fanta: 'Fanta',
              sprite: 'Sprite',
              tonic: 'Tónica',
              water: 'Agua',
              sparkl: 'Agua con Gas',
              juices: 'Zumos',
            }
          },
          drinks: {
            name: {
              whiteWine: 'Vino Blanco',
              redWine: 'Vino Tinto',
              beer: 'Cerveza',
              nonBeer: 'Cerveza Sin Alcohol',
            }
          },
        }
      },
      uk: {
        translation: {
          main: {
            coffee: 'Кава і чай',
            food: 'Їжа',
            tea: 'Чай',
            drinks: 'Напої',
            phone: 'Контакти',
            adress: 'Адреса',
          },
          header: {
            light: 'Легкі сніданки',
            nutritious: 'Ситні сніданки',
            croissants: 'Круасани',
            burgers: 'Бургери',
            soups: 'Супи',
            salads: 'Салати',
            tostadas: 'Тостади',
            pancakes: 'Солодкі млинці та панкейки',
            brunches: 'Бранчі',
            naturalTea: 'Натуральний чай',
            brewedTea: 'Заварний чай',
            hotCoffee: 'Гаряча кава',
            coldCoffee: 'Холодна кава',
            lemonades: 'Лимонади',
            cocktails: 'Коктейлі',
            nonAlcoholic: 'Безалкогольні напої',
            drinks: 'Алкогольні напої',
            crepes: 'Солені млинці без глютену',

          },
          lightBreakfast: {
            name: {
              sunDried: 'Сирники з в\'яленими томатами та соусом песто',
              cherries: 'Сирники з вишнею та грецьким йогуртом',
              caramel: 'Сирники з карамеллю, грушею та кокосом',
              wildBerries: 'Сирні пончики з лісовими ягодами, горіхами та ванільним кремом',
              mango: 'Сирні пончики з манго, горіхами та ванільним кремом',
              oatmeal: 'Вівсянка на кокосовому молоці з бананом, чорницею та корицею',
              chia: 'Чіа-пудинг з гранолою, грецьким йогуртом, лісовими ягодами та джемом',
              granola: 'Гранола з грецьким йогуртом, лісовими ягодами, бананом, горіхами та джемом',
              berry: 'Смузі-боул з міксу ягід, полуницею, манго, гранолою і горіхами',
              passion: 'Смузі-боул з маракуї, манго, ківі, бананом, гранолою і горіхами',
              acai: 'Acai-боул з насіннням чіа, гранолою, манго, ківі, ягодами та домашньою горіховою пастою',
            }
            
          },
          nutritious: {
            name: {
              shakshukaFeta: 'Шакшука з сиром фета і зеленню',
              shakshukaMushroom: 'Шакшука з грибами та беконом',
              cocotte: 'Яйце-кокот з хамоном, сиром і зеленню',
              englishBreak: 'Англійський сніданок',
              hashBrown: 'Хашбраун з лососем, авокадо та домашнім соусом тартар',
              zucchini: 'Оладки з цукіні, лососем, яйцем пашот, гуакамоле, огірком і соусом "Беарнез"',
              bowl: 'Боул з кіноа, лососем, манго, огірком і авокадо',
              roll: 'Фреш-рол з креветками',
              camembert: 'Смажений камамбер у паніровці з ягідним соусом, картоплею та сирним соусом',
              pastrami: 'Сендвіч з бастурмою, сиром "Чеддер" і авторським соусом, подається з картоплею',
              club: 'Клаб-сендвіч з куркою, беконом, сиром, томатами, салатом і гірчичним соусом, подається з картоплею',
              sandwich: 'Сендвіч з лососем, авокадо, омлетом, томатами, салатом і сиром "Філадельфія"',
              chicken_sand: 'Сендвіч з куркою, томатом, сиром "Чеддер", листям салату та майонезом',
              fried: 'Смажений рис з куркою у кисло-солодкому соусі з яєчнею та овочами',
              kiev: 'Котлета по-київськи з пюре',
            }
          },
          croissants: {
            name: {
              caesar: 'Нью-Йорк круасан "Цезар"',
              caprese: 'Круасан "Капрезе" з томатами, сиром моцарелла та соусом песто',
              tuna: 'Круасан з тунцем, сиром "Філадельфія", огірком, салатом та яйцем',
              bakedGoat: 'Круасан із запеченим козячим сиром, сиром "Чеддер", ягідним соусом, ягодами та медом',
              turkey: 'Круасан з індичкою, свіжим сиром, соусом "Цезар", помідорами та салатом',
            }
          },
          burgers: {
            name: {
              mushroom: 'Грибний бургер (Бургер з котлетою з яловичини, сиром "Чеддер", грибним жульєном, смаженим беконом, помідорами, салатом і трюфельним майонезом, подається з картоплею)',
              spicy: 'Пікантний бургер (Бургер з котлетою з яловичини, сиром "Чеддер", маринованими перчиками халапеньо, помідорами, салатом і кетчупом, подається з картоплею)',
              goat: 'Бургер з козячим сиром (Бургер з котлетою з яловичини, козячим сиром, карамелізованою цибулею, помідорами, салатом і авторським соусом, подається з картоплею)',
            }
            
          },
          soups: {
            name: {
              cheese: 'Сирний суп з хамоном і пармезаном',
              cream: 'Грибний крем-суп з беконом і сухариками',
              finnish: 'Фінський суп зі свіжого лосося',
            }
          },
          salads: {
            name: {
              chicken: 'Салат з куркою, моцарелою та томатами',
              ham: 'Салат з хамоном, грушею та козячим сиром',
              beetroot: 'Салат з буряком, сиром фета, грецькими горіхами та журавлиною',
              turkey: 'Салат з індичкою, в\'яленими томатами, пармезаном і медово-гірчичною заправкою',
            }
          },
          tostadas: {
            name: {
              poached: 'Тостада з яйцями пашот, гуакамоле, лососем і соусом "Беарнез"',
              toast: 'Тостада з яйцем пашот, гірчичним соусом, шпинатом, беконом і соусом "Беарнез"',
              brie: 'Тостада з сиром брі, хамоном, помідорами чері, в\'яленими помідорами та бальзамічним соусом',
              phila: 'Тостада з сиром "Філадельфія", лососем та авокадо',
              tomato: 'Тостада з томатами',
              manchego: 'Тостада з сиром манчего, горіхами, в\'яленою журавлиною та медом ',
              liver: 'Тостада з паштетом з курячої печінки, джемом з лісових ягід та кедровими горішками',
              french: 'Французький тост з кремом маскарпоне, свіжими ягодами та горіхами',
            }
          },
          crepes: {
            name: {
              bacon: 'Бретонський млинець з беконом, сиром та яйцем',
              salmon: 'Бретонський млинець з лососем, авокадо та сиром Philadelphia',
              champignon: 'Бретонський млинець з шампіньйонами та куркою',
            }
          },
          pancakes: {
            name: {
              strawberry: 'Класичні панкейки з полуничним кремом, бананом і фруктами',
              hazelnut: 'Класичні панкейки з домашнім чорничним джемом, бананом, ягодами та горіховою пастою',
              banana: 'Шоколадні панкейки з бананом, морозивом і шоколадним соусом ',
              poppy: 'Млинець з маком, вишнею і сиром',
              cinnamon: 'Млинець з яблуками, карамеллю, корицею і горіхами',
              suzette: 'Креп-сюзет з апельсиновою карамеллю, фруктами і морозивом',
              nutella: 'Млинець з нутеллою і бананами',
              condensed: 'Млинець зі згущеним молоком і бананом',
            }
          },
          brunches: {
            name: {
              bacon: 'Бранч з беконом ( Нью-Йорк круасан з беконом, сиром "Філадельфія", шпинатом та яйцем; на десерт чіа-пудинг з грецьким йогуртом, гранолою та фруктами, кава, апельсиновий сік або лимонад на вибір)',
              salmon: 'Бранч з лососем (бріош з гуакамоле, лососем, яйцем-пашот, соусом "Беарнез" та салатом; на десерт міні-панкейки з фруктами та нутелою; кава, апельсиновий сік або лимонад на вибір)',
              greek: 'Грецький бранч (омлет з помідорами, перцем, сиром фета та оливками; на десерт сирні пончики з ванільним кремом та фруктами; кава, апельсиновый сік або лимонад на вибір)'
            }
          },
          naturalTea: {
            name: {
              citrus: 'Цитрусовий',
              berries: 'Лісові ягоди',
              tropical: 'Тропічний',
              
            }
          },
          brewedTea: {
            name: {
              black: 'Чорний',
              green: 'Зелений',
              red: 'Червоний',
              
            }
          },
          coffee: {
            name: {
              espresso: 'Еспресо',
              americano: 'Американо',
              cortado: 'Кортадо',
              coffeeS: 'Кава з молоком (S)',
              coffeeM: 'Кава з молоком (M)',
              latte: 'Лате',
              flatWhite: 'Флет-вайт',
              bombon: 'Бомбон (еспресо та згущене молоко)',
              carajillo: 'Карахійо (еспресо та бренді)',
              belmonte: 'Бельмонте (еспресо, бренді та згущене молоко)',
              cappuccino: 'Капучино',
              baileysCap: 'Бейліс-капучино',
              matcha: 'Матча-лате',
              colacao: 'Колакао',
              whc: 'Білий гарячий шоколад',
              chc: 'Класичний гарячий шоколад',
              raf: 'Раф (еспресо, вершки, сироп на вибір)',
              irish: 'Ірландська кава (еспресо, вершки та бренді)',
              iceLatte: 'Холодний лате',
              matchaRaspberry: 'Холодний лате матча-малина',
              frappeStrawberry: 'Полуничний фрапе',
              frappeCaramel: 'Карамельний фрапе',
              affogato: 'Афогато (еспресо, морозиво та горіхи)',
              matchaIce: 'Холодний лате-матча',
              matchaOrange: 'Матча-апельсин',
              espressoTonic: 'Еспресо-тонік',
              bumble: 'Бамбл (апельсиновий сік, еспресо)',
              
            }
          },
          lemonades: {
            name: {
              citrus: 'Цитрусовий',
              lavender: 'Лаванда-смородина',
              pear: 'Груша-ваніль',
              cucumber: 'Огірок-грейпфрут',
              raspberry: 'Малина-кокос',
              
            }
          },
          cocktails: {
            name: {
              coconutCherry: 'Кокос-вишня (горілка, кокосовий лікер, вишневий сік)',
              cremeBrulee: 'Мартіні крем-брюле (горілка, цукровий сироп, ванільний сироп, вершки, яєчний білок)',
              martiniEspresso: 'Мартіні-еспрессо (горілка, кавовий лікер, ванільний сироп, еспресо)',
              loveIs: 'Love is...(бейліс, цукровий сироп, полуничний сироп, вершки, молоко)',
              sangria: 'Сангрія (вино (червоне або біле), заморожені ягоди, лимон, апельсин, цукровий сироп, газована вода, м*ята)',
              aperol: 'Полуничний апероль (апероль, ігристе вино, полуничний сироп, газована вода)',
              mojito: 'Мохіто (ром, м\'ята, лайм, тростинний цукор, сік лайму, спрайт)',
              blueMargarita: 'Голуба маргарита (текіла, апельсиновий лікер, лимонний сік, цукровий сироп, сироп Blue Curacao)',
              ginTonic: 'Джин тонік (джин, тонік, лимон, огірок)',
              cosmo: 'Космополітан (горілка, апельсиновий лікер, сік журавлини, лимонний сік, цукровий сироп)',
              aviation: 'Авіація (джин, лікер ожини, фіалковий сироп, лимонний сік)',
              negroni: 'Негроні (джин, червоний вермут, Campari)',
              pinkLady: 'Pink lady (джин, гренадин, цукровий сироп, лимонний сік, яєчний білок)',
              whiskySour: 'Whisky sour (Soberano, сироп журавлини, лимонний сік, цукровий сироп, яєчний білок)',
              tequilaSunrise: 'Текіла Санрайз (текіла, апельсиновий сік, гренадин, апельсин)',
              bramble: 'Брамбл (джин, лікер ожини, сироп смородини, лимонний сік, цукровий сироп, ожина)',
              bellini: 'Белліні (шампанське і персиковий сік)',
              mimosa: 'Мімоза (шампанське і апельсиновий сік)',
              rossini: 'Россіні (шампанське і полуничне пюре)',
              kirRoyal: 'Kir Royal (шампанське і лікер ожини)',
            }
          },
          nonAlcoholic: {
            name: {
              orangeJuice: 'Апельсиновий фреш',
              cola: 'Кока-Кола',
              fanta: 'Фанта',
              sprite: 'Спрайт',
              tonic: 'Тонік',
              water: 'Вода',
              sparkl: 'Газована вода',
              juices: 'Соки',
            }
          },
          drinks: {
            name: {
              whiteWine: 'Біле вино',
              redWine: 'Червоне вино',
              beer: 'Пиво',
              nonBeer: 'Безалкогольне пиво',
            }
          },
        }
      },
    }
  });

export default i18n;