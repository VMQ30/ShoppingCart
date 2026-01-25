export function setMenuData() {
  const menu = [
    {
      category: "Milk Tea",
      items: [
        {
          name: "Classic",
          id: "mt-classic",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: true,
          description:
            "Our signature blend of premium black tea and creamy milk. It offers a perfectly balanced, nostalgic flavor that isn't too sweet. This timeless favorite is the ideal introduction for any first-time boba drinker.",
        },
        {
          name: "Chocolate",
          id: "mt-chocolate",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: false,
          description:
            "A rich and indulgent treat that combines the earthiness of tea with deep cocoa notes. It is velvety smooth and satisfies even the strongest sweet tooth. Perfect for those who want a dessert-like experience in a cup.",
        },
        {
          name: "Cookies & Cream",
          id: "mt-cookies-cream",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: true,
          description:
            "A delightful fusion of creamy milk tea and crunchy cookie bits. Every sip provides a playful texture that contrasts beautifully with the silky liquid base. It is a crowd-pleasing classic that feels like a party in your mouth.",
        },
        {
          name: "Java Chips",
          id: "mt-java-chips",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: true,
          description:
            "Experience a sophisticated blend of coffee-infused tea and dark chocolate chips. The subtle bitterness of the coffee elevates the sweetness of the milk tea. It provides a refreshing energy boost with a satisfying, crunchy finish.",
        },
        {
          name: "Melon",
          id: "mt-melon",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: false,
          description:
            "A bright and refreshing fruit-forward milk tea with a light, honeydew essence. It is incredibly smooth and serves as a great palate cleanser. This drink is perfect for those who prefer a more delicate and airy sweetness.",
        },
        {
          name: "Mocha",
          id: "mt-mocha",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: false,
          description:
            "The perfect marriage of robust espresso and sweet chocolate tea. It offers a complex flavor profile that appeals to both coffee lovers and tea enthusiasts. This drink is creamy, bold, and consistently satisfying.",
        },
        {
          name: "Blueberry",
          id: "mt-blueberry",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: true,
          description:
            "A vibrant milk tea infused with the tangy and sweet essence of forest blueberries. The fruitiness provides a refreshing twist on the traditional creamy base. It is a colorful and flavorful choice that brightens up your day.",
        },
        {
          name: "Strawberry",
          id: "mt-strawberry",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: true,
          description:
            "Sweet, nostalgic, and incredibly creamy, this drink captures the essence of fresh strawberries. It features a beautiful pink hue and a lingering berry fragrance. A favorite for those who enjoy a fun and fruity milk tea experience.",
        },
        {
          name: "Vanilla",
          id: "mt-vanilla",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: false,
          description:
            "A smooth and aromatic drink that highlights the comforting taste of premium vanilla bean. It is simple yet elegant, providing a mellow sweetness that isn't overpowering. This is a great base for adding multiple toppings.",
        },
        {
          name: "Lychee",
          id: "mt-lychee",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: false,
          description:
            "An exotic and floral milk tea featuring the delicate sweetness of tropical lychee fruit. It offers a unique fragrance that sets it apart from more traditional flavors. Refreshing and light, it is the perfect tropical escape.",
        },
        {
          name: "Ube",
          id: "mt-ube",
          size: [{ M: 60 }, { L: 65 }, { XL: 100 }],
          bestSeller: true,
          description:
            "A culturally rich favorite featuring the earthy and nutty flavors of Filipino purple yam. Its striking purple color makes it as photogenic as it is delicious. It is thick, creamy, and possesses a unique vanilla-pistachio finish.",
        },
        {
          name: "Choco Oreo",
          id: "mt-choco-oreo",
          size: [{ M: 70 }, { L: 75 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A decadent upgrade to our chocolate tea featuring a generous portion of crushed Oreo cookies. It offers a double-hit of cocoa with a satisfyingly thick texture. This drink is a dream come true for chocolate enthusiasts.",
        },
        {
          name: "Korean Banana",
          id: "mt-korean-banana",
          size: [{ M: 70 }, { L: 75 }, { XL: 105 }],
          bestSeller: false,
          description:
            "Inspired by the famous Korean bottled milk, this tea is creamy and full of banana aroma. It has a smooth, custard-like quality that is incredibly comforting. It is a playful and sweet choice for fruit lovers.",
        },
        {
          name: "Milo Blast",
          id: "mt-milo-blast",
          size: [{ M: 70 }, { L: 75 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A nostalgic malted chocolate treat that brings back childhood memories. It is topped with extra malt powder for an intense flavor explosion. This drink is thick, energizing, and wonderfully sweet.",
        },
        {
          name: "Matcha",
          id: "mt-matcha",
          size: [{ M: 75 }, { L: 80 }, { XL: 110 }],
          bestSeller: true,
          description:
            "Made from high-quality ground green tea leaves, this drink offers a sophisticated, earthy flavor. It is perfectly balanced with cream to smooth out the natural bitterness of the tea. A must-try for those who enjoy authentic Japanese flavors.",
        },
        {
          name: "Matcha Oreo",
          id: "mt-matcha-oreo",
          size: [{ M: 75 }, { L: 80 }, { XL: 110 }],
          bestSeller: true,
          description:
            "The earthy notes of matcha meet the sweet crunch of Oreo cookies in this unique fusion. The bitterness of the green tea is perfectly countered by the sweet cream filling of the cookies. It is a modern twist that offers a complex and satisfying taste.",
        },
        {
          name: "Okinawa",
          id: "mt-okinawa",
          size: [{ M: 75 }, { L: 80 }, { XL: 110 }],
          bestSeller: true,
          description:
            "A premium milk tea characterized by its roasted brown sugar flavor. It has a deep, molasses-like sweetness that feels incredibly rich on the palate. This is one of our most popular choices for its distinct and bold character.",
        },
        {
          name: "Salted Caramel",
          id: "mt-salted-caramel",
          size: [{ M: 75 }, { L: 80 }, { XL: 110 }],
          bestSeller: true,
          description:
            "A luxurious blend of buttery caramel with a hint of sea salt to enhance the flavors. It strikes the perfect balance between sweet and savory for a gourmet experience. This drink is smooth, decadent, and leaves you wanting more.",
        },
      ],
    },
    {
      category: "Milk Shake",
      items: [
        {
          name: "Cappucino",
          id: "ms-cappucino",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "A frothy and ice-cold take on the classic Italian coffee. It features a bold espresso base blended into a thick, creamy shake. This is a refreshing way to get your caffeine fix on a hot day.",
        },
        {
          name: "Chocolate",
          id: "ms-chocolate",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "Our classic chocolate shake is blended to thick, velvety perfection. It provides an intense cocoa flavor that is both cooling and indulgent. This is a timeless favorite for kids and adults alike.",
        },
        {
          name: "Cookies & Cream",
          id: "ms-cookies-cream",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A thick vanilla-based shake loaded with generous amounts of crushed chocolate cookies. Every sip is filled with crunchy bits and smooth cream. It is the ultimate comfort drink for any cookie lover.",
        },
        {
          name: "Java Chips",
          id: "ms-java-chips",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A blended coffee shake featuring real chocolate chips for an added bite. It combines the smoothness of a shake with the texture of a frozen frappe. It is perfectly sweet with a pleasant coffee kick.",
        },
        {
          name: "Melon",
          id: "ms-melon",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A refreshingly light and fruity shake with a sweet cantaloupe flavor. It is incredibly smooth and serves as a cooling treat during the summer heat. The vibrant green color makes it as fun to look at as it is to drink.",
        },
        {
          name: "Mocha",
          id: "ms-mocha",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "A decadent blend of chocolate and coffee in a frozen shake format. It offers a balanced flavor profile that isn't too bitter or too sweet. This is the perfect choice for those who want the best of both worlds.",
        },
        {
          name: "Blue Berry",
          id: "ms-blueberry",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "This fruity shake features the tart and sweet notes of mountain blueberries. It is blended into a creamy consistency that feels light and refreshing. A perfect choice for a fruity, dairy-based treat.",
        },
        {
          name: "Macchiato",
          id: "ms-macchiato",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "A sophisticated coffee shake that highlights a rich, layered espresso flavor. It is creamy and smooth with a distinct caramel undertone. This drink offers a more refined sweetness for the coffee connoisseur.",
        },
        {
          name: "Dark Choco",
          id: "ms-dark-choco",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "For those who prefer a deeper cocoa taste, this dark chocolate shake is the answer. It is less sweet than the standard chocolate but much richer in flavor. A truly indulgent experience for the serious chocoholic.",
        },
        {
          name: "Korean Banana",
          id: "ms-korean-banana",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "This shake captures the iconic sweet and creamy taste of Korean banana milk. It is blended into a thick, frozen delight that is incredibly satisfying. A unique and fruity option that stands out from the rest.",
        },
        {
          name: "Milo Blast",
          id: "ms-milo-blast",
          size: [{ M: 70 }, { L: 75 }, { XL: 110 }],
          bestSeller: true,
          description:
            "An extra-thick Milo shake topped with even more Milo powder for a 'blast' of flavor. It has a unique malty taste that is deeply satisfying and filling. This is a powerhouse shake for anyone needing a sweet pick-me-up.",
        },
        {
          name: "Strawberry",
          id: "ms-strawberry",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A classic strawberry shake made with premium fruit syrup and creamy milk. It is bright, sweet, and has a lovely smooth texture. This drink is a perennial favorite that never goes out of style.",
        },
        {
          name: "Ube",
          id: "ms-ube",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "A thick and creamy shake featuring the earthy, sweet flavor of real Ube. It has a beautiful lavender color and a uniquely nutty aftertaste. This is a must-try for fans of traditional Filipino desserts.",
        },
        {
          name: "Thai",
          id: "ms-thai",
          size: [{ M: 70 }, { L: 75 }, { XL: 110 }],
          bestSeller: true,
          description:
            "A frozen take on the famous Thai tea, featuring its signature orange color and spicy-sweet aroma. It is creamy and bold with hints of star anise and vanilla. This shake is both exotic and deeply refreshing.",
        },
        {
          name: "Salted Caramel",
          id: "ms-salted-caramel",
          size: [{ M: 70 }, { L: 75 }, { XL: 110 }],
          bestSeller: true,
          description:
            "A perfect blend of sweet caramel and savory sea salt in a thick shake. The saltiness cuts through the cream to create a multi-dimensional flavor. It is a sophisticated choice for those who enjoy complex sweets.",
        },
        {
          name: "Mango Graham",
          id: "ms-mango-graham",
          size: [{ M: 80 }, { L: 85 }, { XL: 120 }],
          bestSeller: true,
          description:
            "Inspired by the famous Filipino float, this shake features fresh mango flavor and crushed graham crackers. It is thick, fruity, and has a wonderful crust-like texture in every sip. Truly a dessert in a cup.",
        },
        {
          name: "Avocado Graham",
          id: "ms-avocado-graham",
          size: [{ M: 80 }, { L: 85 }, { XL: 120 }],
          bestSeller: true,
          description:
            "A rich and buttery avocado shake layered with crunchy graham cracker bits. It offers a unique, creamy fruitiness that is highly addictive. This is one of our most filling and luxurious shake options.",
        },
      ],
    },
    {
      category: "Premium Frappe",
      items: [
        {
          name: "Blueberry",
          id: "pf-blueberry",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "An icy, blended treat featuring premium blueberry puree and a whipped cream topper. It is sweet, tart, and incredibly cooling. This frappe is the perfect choice for a fruit-loving coffee alternative.",
        },
        {
          name: "Cappucino",
          id: "pf-cappucino",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "A classic blended coffee frappe with a strong espresso backbone. It is topped with a mountain of whipped cream and a dusting of cocoa. A sophisticated choice for those who love their coffee cold and sweet.",
        },
        {
          name: "Chocolate",
          id: "pf-chocolate",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A rich chocolate blender drink that is smoother than a shake and more indulgent than a tea. It is topped with whipped cream and a decadent chocolate drizzle. This frappe is a cocoa-lover's ultimate dream.",
        },
        {
          name: "Cookies Overload",
          id: "pf-cookies-overload",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "This frappe is packed to the brim with crushed cookies and cream. It features extra cookie bits both inside the drink and on top of the whipped cream. It is the ultimate crunchy, creamy frozen dessert.",
        },
        {
          name: "Dark Choco",
          id: "pf-dark-choco",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A premium frappe for the mature palate, featuring intense dark chocolate notes. It is thick, less sweet, and incredibly satisfying for those who love bitter cocoa. Finished with whipped cream for a touch of light sweetness.",
        },
        {
          name: "Java Chips",
          id: "pf-java-chips",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A fan-favorite frappe that combines coffee, chocolate, and real chocolate chips. The icy texture and crunchy chips provide a wonderful sensory experience. It is the perfect afternoon pick-me-up on a sunny day.",
        },
        {
          name: "Korean Banana",
          id: "pf-korean-banana",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A premium banana-flavored frappe that tastes like a frozen tropical custard. It is smooth, aromatic, and topped with a cloud of whipped cream. This unique flavor brings a taste of international sweetness to your cup.",
        },
        {
          name: "Macchiato",
          id: "pf-macchiato",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: true,
          description:
            "This frappe features a bold coffee flavor with a heavy swirl of caramel. It is layered with sweetness and finished with a rich whipped cream topping. A perfect balance of caffeine and sugary indulgence.",
        },
        {
          name: "Vanilla",
          id: "pf-vanilla",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "A silky smooth frappe that showcases the delicate and floral notes of vanilla. It is a light and airy blended drink that feels incredibly clean on the palate. Topped with whipped cream for a truly classic look and taste.",
        },
        {
          name: "Mocha",
          id: "pf-mocha",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "A perfect blend of dark roast coffee and sweet chocolate in an icy frappe format. It is balanced, creamy, and topped with a generous swirl of whipped cream. This is the go-to drink for a rich coffee experience.",
        },
        {
          name: "Ube",
          id: "pf-ube",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "Our premium Ube frappe is as beautiful as it is delicious with its bright purple hue. It features the nutty, sweet flavor of purple yam blended with ice and cream. A fantastic way to enjoy a traditional flavor in a modern format.",
        },
        {
          name: "Strawberry",
          id: "pf-strawberry",
          size: [{ M: 90 }, { L: 95 }, { XL: 130 }],
          bestSeller: false,
          description:
            "A bright and cheerful strawberry frappe that is packed with berry goodness. It is smooth, icy, and topped with whipped cream for a parfait-like experience. Perfect for a refreshing and fruity dessert on the go.",
        },
        {
          name: "Salted Caramel",
          id: "pf-salted-caramel",
          size: [{ M: 95 }, { L: 100 }, { XL: 135 }],
          bestSeller: true,
          description:
            "This premium frappe features a luxurious salted caramel sauce blended into a thick, icy base. The hint of salt makes the caramel flavor pop with every sip. It is an elegant and deeply satisfying frozen treat.",
        },
        {
          name: "Oreo Cheesecake",
          id: "pf-oreo-cheesecake",
          size: [{ M: 95 }, { L: 100 }, { XL: 135 }],
          bestSeller: false,
          description:
            "A decadent fusion of tangy cheesecake flavor and crunchy Oreo cookies. It is thick, creamy, and tastes just like a slice of frozen cake. This frappe is the ultimate choice for those who want a serious dessert.",
        },
        {
          name: "Matcha",
          id: "pf-matcha",
          size: [{ M: 95 }, { L: 100 }, { XL: 135 }],
          bestSeller: true,
          description:
            "An icy blend of premium Japanese matcha and sweet cream topped with whipped cream. It has a beautiful green color and a sophisticated earthy finish. This frappe is both refreshing and culturally inspired.",
        },
        {
          name: "Mango Graham",
          id: "pf-mango-graham",
          size: [{ M: 100 }, { L: 110 }, { XL: 140 }],
          bestSeller: true,
          description:
            "Our most premium mango drink, featuring layers of fruit, cream, and graham crackers. It is thick enough to eat with a spoon and provides a true tropical experience. This frappe is a best-seller for a reason.",
        },
        {
          name: "Avocado Graham",
          id: "pf-avocado-graham",
          size: [{ M: 100 }, { L: 110 }, { XL: 140 }],
          bestSeller: true,
          description:
            "A luxurious avocado frappe blended with ice and topped with plenty of graham crackers. It is incredibly rich, buttery, and filling. This is the gold standard for fruit-based premium frappes.",
        },
      ],
    },
    {
      category: "Fruit Tea",
      items: [
        {
          name: "Blueberry",
          id: "ft-blueberry",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A refreshing iced tea base infused with the sweet and slightly tart flavor of blueberries. It is light, crisp, and perfect for those who want a fruit fix without the milk. This drink is a great way to stay hydrated and refreshed.",
        },
        {
          name: "Honey Peach",
          id: "ft-honey-peach",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "A delicate and floral fruit tea featuring the sweet essence of sun-ripened peaches. The addition of honey provides a smooth and natural sweetness. It is an aromatic and calming drink that is perfect for any time of day.",
        },
        {
          name: "Lychee",
          id: "ft-lychee",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "An exotic and refreshing fruit tea that highlights the unique, sweet flavor of lychee. It is incredibly fragrant and served ice-cold for maximum refreshment. This drink is a tropical delight that cleanses the palate.",
        },
        {
          name: "Melon",
          id: "ft-melon",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: false,
          description:
            "A light and airy fruit tea with the subtle, sweet flavor of honeydew melon. It is crisp, clear, and very easy to drink. This is the ideal choice for someone looking for a mild and refreshing fruit beverage.",
        },
        {
          name: "Strawberry",
          id: "ft-strawberry",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A bright red, festive fruit tea filled with the sweet and tangy taste of strawberries. It is a crowd-favorite that feels like summer in a cup. Refreshing and sweet, it is a perfect alternative to traditional milk teas.",
        },
        {
          name: "Four Seasons",
          id: "ft-four-seasons",
          size: [{ M: 60 }, { L: 65 }, { XL: 105 }],
          bestSeller: true,
          description:
            "A complex and vibrant blend of various tropical fruits in one refreshing tea. It offers a symphony of sweet and tart flavors that change with every sip. This is our most dynamic and colorful fruit tea option.",
        },
      ],
    },
    {
      category: "Cheese Cake Series",
      items: [
        {
          name: "Blueberry",
          id: "cc-blueberry",
          size: [{ L: 95 }, { XL: 120 }],
          bestSeller: true,
          description:
            "A rich milk tea base topped with a thick layer of savory-sweet cheesecake cream and blueberry. It tastes exactly like a liquid blueberry cheesecake. This drink offers a luxurious texture that is incredibly indulgent.",
        },
        {
          name: "Strawberry",
          id: "cc-strawberry",
          size: [{ L: 95 }, { XL: 120 }],
          bestSeller: true,
          description:
            "This drink combines the sweetness of strawberries with a decadent cheesecake foam topper. It is a beautiful layered drink that looks as good as it tastes. Perfect for those who love dessert-inspired beverages.",
        },
        {
          name: "Salted Caramel",
          id: "cc-salted-caramel",
          size: [{ L: 100 }, { XL: 125 }],
          bestSeller: false,
          description:
            "A sophisticated blend of caramel tea topped with our signature cheesecake cream and a hint of salt. The salty cream perfectly complements the sweet caramel base. It is a gourmet experience that feels very high-end.",
        },
        {
          name: "Matcha",
          id: "cc-matcha",
          size: [{ L: 100 }, { XL: 125 }],
          bestSeller: true,
          description:
            "The earthy flavor of matcha is elevated by a rich and tangy cheesecake topping. It provides a wonderful contrast between the green tea's bitterness and the cream's sweetness. A must-try for any matcha enthusiast.",
        },
        {
          name: "Okinawa",
          id: "cc-okinawa",
          size: [{ L: 100 }, { XL: 125 }],
          bestSeller: false,
          description:
            "Our famous roasted brown sugar tea topped with a thick, velvety layer of cheesecake. The deep molasses notes of the tea pair perfectly with the savory cream. It is a rich and filling drink that satisfies all cravings.",
        },
        {
          name: "Mango Graham",
          id: "cc-mango-graham",
          size: [{ L: 103 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A tropical delight featuring mango-flavored tea, cheesecake cream, and graham cracker bits. It captures all the layers of a mango cheesecake in a drinkable format. This is one of our most decadent and popular items.",
        },
        {
          name: "Avocado Graham",
          id: "cc-avocado-graham",
          size: [{ L: 103 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A thick and buttery avocado milk tea topped with cheesecake cream and crunchy graham crackers. It is incredibly rich and feels like a true meal in a cup. This drink is a favorite for those who enjoy heavy, dessert-style teas.",
        },
      ],
    },
    {
      category: "Cream Cheese Series",
      items: [
        {
          name: "Chocolate",
          id: "ccs-chocolate",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: false,
          description:
            "A rich chocolate milk tea topped with a thick, salty cream cheese foam. The combination of sweet cocoa and savory cheese is surprisingly addictive. It provides a multi-layered tasting experience with every sip.",
        },
        {
          name: "Cookies & Cream",
          id: "ccs-cookies-cream",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: true,
          description:
            "Our classic cookies and cream tea elevated with a velvety cream cheese topper. The salty foam cuts through the sweetness of the cookies for a balanced flavor. It is a fun and indulgent twist on a fan-favorite flavor.",
        },
        {
          name: "Dark Choco",
          id: "ccs-dark-choco",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: false,
          description:
            "For the ultimate indulgence, try our dark chocolate tea with a salty cream cheese foam. The bitterness of the dark chocolate pairs beautifully with the savory topping. It is a sophisticated and rich drink for true chocolate lovers.",
        },
        {
          name: "Java Chips",
          id: "ccs-java-chips",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: true,
          description:
            "A coffee-chocolate tea blend featuring real chips and a thick cream cheese topper. It offers a wonderful variety of textures and bold, complex flavors. The cream cheese adds a luxurious finish to this energizing drink.",
        },
        {
          name: "Vanilla",
          id: "ccs-vanilla",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: false,
          description:
            "A smooth vanilla tea base topped with a savory layer of cream cheese foam. The simplicity of the vanilla allows the flavor of the cream cheese to really shine. It is a mellow and comforting choice for any time.",
        },
        {
          name: "Blueberry",
          id: "ccs-blueberry",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: false,
          description:
            "A fruity blueberry tea topped with a thick and salty cream cheese layer. It tastes like a berry-infused cheesecake but with a lighter tea base. A unique and colorful option for those who enjoy fruit and dairy combos.",
        },
        {
          name: "Choco Oreo",
          id: "ccs-choco-oreo",
          size: [{ M: 85 }, { L: 95 }, { XL: 115 }],
          bestSeller: true,
          description:
            "A double-chocolate experience featuring Oreo cookies and a rich cream cheese topper. The salty foam enhances the deep cocoa flavors of the cookies and tea. This is a very decadent drink designed for those with a serious sweet tooth.",
        },
        {
          name: "Matcha",
          id: "ccs-matcha",
          size: [{ M: 95 }, { L: 110 }, { XL: 130 }],
          bestSeller: false,
          description:
            "Authentic Japanese matcha topped with a savory and thick cream cheese foam. The earthy tea and salty cream create a perfectly balanced and sophisticated beverage. It is one of the most popular ways to enjoy matcha.",
        },
        {
          name: "Milo Blast",
          id: "ccs-milo-blast",
          size: [{ M: 95 }, { L: 110 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A malty Milo tea topped with extra powder and a thick layer of cream cheese foam. It is a nostalgic flavor profile with a modern, savory twist. This drink is incredibly filling and packed with chocolatey goodness.",
        },
        {
          name: "Okinawa",
          id: "ccs-okinawa",
          size: [{ M: 95 }, { L: 110 }, { XL: 130 }],
          bestSeller: true,
          description:
            "Our signature roasted brown sugar tea topped with a salty cream cheese topper. The molasses flavor of the tea and the savory cheese create a rich, caramel-like taste. A top-tier choice for those who love bold flavors.",
        },
        {
          name: "Oreo Overload",
          id: "ccs-oreo-overload",
          size: [{ M: 95 }, { L: 110 }, { XL: 130 }],
          bestSeller: true,
          description:
            "This drink is packed with crushed Oreos and topped with a generous amount of cream cheese foam. It provides a crunch in every sip along with a smooth, savory finish. The ultimate treat for Oreo fans.",
        },
        {
          name: "Wintermelon",
          id: "ccs-wintermelon",
          size: [{ M: 95 }, { L: 110 }, { XL: 130 }],
          bestSeller: true,
          description:
            "A light and refreshing wintermelon tea topped with a savory cream cheese foam. The caramel-like sweetness of the wintermelon pairs perfectly with the salty cream. This is a classic combination that is loved by many.",
        },
      ],
    },
    {
      category: "Nutella Series",
      items: [
        {
          name: "Cookies & Cream",
          id: "ns-cookies-cream",
          size: [{ M: 85 }, { L: 90 }, { XL: 120 }],
          bestSeller: true,
          description:
            "A delightful blend of cookies and cream tea swirled with real Nutella hazelnut spread. Every sip features the crunch of cookies and the smooth taste of chocolate-hazelnut. It is a dream come true for dessert lovers.",
        },
        {
          name: "Dark Choco",
          id: "ns-dark-choco",
          size: [{ M: 85 }, { L: 90 }, { XL: 120 }],
          bestSeller: true,
          description:
            "An intense dark chocolate tea infused with the rich, nutty flavor of Nutella. It is less sweet but far more complex than a standard chocolate drink. The hazelnut aroma makes this drink truly special.",
        },
        {
          name: "Java Chips",
          id: "ns-java-chips",
          size: [{ M: 85 }, { L: 90 }, { XL: 120 }],
          bestSeller: true,
          description:
            "A coffee-chocolate tea blend featuring chocolate chips and a generous Nutella swirl. It offers a sophisticated flavor profile with a nutty finish. This is the perfect energizing treat for a chocolate-hazelnut fan.",
        },
        {
          name: "Milo Blast",
          id: "ns-milo-blast",
          size: [{ M: 85 }, { L: 90 }, { XL: 120 }],
          bestSeller: true,
          description:
            "A malty Milo tea base with an added layer of rich Nutella spread. It is a double-hit of chocolate that is incredibly satisfying and filling. The Nutella adds a unique hazelnut depth to the classic Milo taste.",
        },
        {
          name: "Vanilla",
          id: "ns-vanilla",
          size: [{ M: 85 }, { L: 90 }, { XL: 120 }],
          bestSeller: false,
          description:
            "A smooth vanilla tea that is transformed by a swirl of rich Nutella. The light vanilla base allows the hazelnut and cocoa flavors to be the star. It is a simple yet incredibly tasty combination.",
        },
        {
          name: "Oreo Overload",
          id: "ns-oreo-overload",
          size: [{ M: 95 }, { L: 100 }, { XL: 130 }],
          bestSeller: true,
          description:
            "This drink features a massive amount of crushed Oreos and a heavy swirl of Nutella. It is thick, crunchy, and packed with chocolate-hazelnut flavor. The ultimate indulgent treat for anyone who loves branded sweets.",
        },
        {
          name: "Matcha",
          id: "ns-matcha",
          size: [{ M: 95 }, { L: 100 }, { XL: 130 }],
          bestSeller: false,
          description:
            "A unique fusion of earthy Japanese matcha and sweet Nutella spread. The bitterness of the green tea is perfectly balanced by the nutty chocolate. This is a modern and adventurous flavor for the curious palate.",
        },
        {
          name: "Okinawa",
          id: "ns-okinawa",
          size: [{ M: 95 }, { L: 100 }, { XL: 130 }],
          bestSeller: true,
          description:
            "Our signature roasted brown sugar tea with an added Nutella hazelnut swirl. The molasses notes of the tea combine with the nutty chocolate for a deep flavor. It is one of our most rich and aromatic offerings.",
        },
        {
          name: "Wintermelon",
          id: "ns-wintermelon",
          size: [{ M: 95 }, { L: 100 }, { XL: 130 }],
          bestSeller: false,
          description:
            "A refreshing wintermelon tea with the added indulgence of a Nutella swirl. The light, caramel-like tea contrasts beautifully with the heavy hazelnut spread. A surprisingly balanced drink that is both refreshing and sweet.",
        },
      ],
    },
    {
      category: "Brown Sugar Series",
      items: [
        {
          name: "Classic",
          id: "bs-classic",
          size: [{ M: 70 }, { L: 75 }, { XL: 110 }],
          bestSeller: true,
          description:
            "A traditional milk tea featuring a rich, handmade brown sugar syrup. It has a deep, smoky sweetness that is incredibly comforting. This is the gold standard for brown sugar milk tea lovers.",
        },
        {
          name: "Vanilla",
          id: "bs-vanilla",
          size: [{ M: 70 }, { L: 75 }, { XL: 110 }],
          bestSeller: true,
          description:
            "Our smooth vanilla tea elevated with a rich brown sugar swirl. The floral notes of vanilla blend perfectly with the molasses-like syrup. It is a gentle and aromatic take on the brown sugar trend.",
        },
        {
          name: "Matcha",
          id: "bs-matcha",
          size: [{ M: 85 }, { L: 90 }, { XL: 125 }],
          bestSeller: true,
          description:
            "Authentic matcha tea combined with the deep sweetness of roasted brown sugar. The earthy green tea provides a perfect counterpoint to the heavy syrup. This drink is both beautiful to look at and complex to taste.",
        },
        {
          name: "Okinawa",
          id: "bs-okinawa",
          size: [{ M: 85 }, { L: 90 }, { XL: 125 }],
          bestSeller: true,
          description:
            "A premium brown sugar tea inspired by the flavors of Okinawa, Japan. It features a distinct roasted sugar taste that is both rich and aromatic. This is a best-seller for those who love a deep, caramel finish.",
        },
        {
          name: "Salted Caramel",
          id: "bs-salted-caramel",
          size: [{ M: 85 }, { L: 90 }, { XL: 125 }],
          bestSeller: false,
          description:
            "A luxurious blend of brown sugar syrup and salted caramel flavor. It offers a double-hit of caramel notes with a hint of salt for balance. This drink is incredibly smooth and feels very indulgent.",
        },
        {
          name: "Wintermelon",
          id: "bs-wintermelon",
          size: [{ M: 85 }, { L: 90 }, { XL: 125 }],
          bestSeller: true,
          description:
            "A light wintermelon tea base enhanced with a thick brown sugar swirl. The two different types of sweetness create a layered and interesting flavor. It is a refreshing yet deeply satisfying drink choice.",
        },
      ],
    },
  ];

  const addons = [
    { name: "Fresh Lemons", id: "add-lemon", price: 20 },
    { name: "Yakult", id: "add-yakult", price: 20 },
    { name: "Pearl", id: "add-pearl", price: 10 },
    { name: "Nata", id: "add-nata", price: 10 },
    { name: "Brown Sugar", id: "add-brown-sugar", price: 10 },
    { name: "Coffee Jelly", id: "add-coffee-jelly", price: 15 },
    { name: "Fruit Jelly", id: "add-fruit-jelly", price: 15 },
    { name: "Milo", id: "add-milo", price: 15 },
    { name: "Graham", id: "add-graham", price: 15 },
    { name: "Oreo Crumbs", id: "add-oreo", price: 15 },
    { name: "Nutella", id: "add-nutella", price: 25 },
    { name: "Cream Cheese", id: "add-cream-cheese", price: 25 },
  ];

  return { menu, addons };
}
