/**
 * Smart URL slug generator with transliteration and emoji support.
 */
export function slugify(input: string, options: { case?: 'kebab' | 'snake' | 'camel' } = {}): string {
  const { case: casing = 'kebab' } = options;

  // Replace emojis with text equivalents
  const emojiReplaced = replaceEmojis(input);

  // Normalize Unicode and remove accents
  const normalized = emojiReplaced.normalize('NFKD').replace(/[\u0300-\u036F]/g, '');

  // Lowercase and replace non-alphanumeric characters except spaces
  let slug = normalized
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim();

  // Replace multiple spaces/hyphens with one
  slug = slug.replace(/[\s-]+/g, '-');

  // Apply case format
  if (casing === 'snake') {
    slug = slug.replace(/-/g, '_');
  } else if (casing === 'camel') {
    slug = slug
      .split('-')
      .map((word, i) => (i === 0 ? word : capitalize(word)))
      .join('');
  }

  return slug;
}

function replaceEmojis(text: string): string {
  return text.replace(/\p{Emoji}/gu, (emoji) => {
    return emojiToText(emoji);
  });
}

function emojiToText(emoji: string): string {
  const emojiMap: Record<string, string> = {
    '🔥': 'fire',
    '👍': 'thumbs-up',
    '🎉': 'party',
    '😊': 'smile',
    '❤️': 'heart',
    '😄': 'grin',
    '😎': 'cool',
    '🍕': 'pizza',
    '🌍': 'world',
    '🚀': 'rocket',
    '🌟': 'star',
    '💡': 'idea',
    '⚡': 'lightning',
    '✅': 'checkmark',
    '⚠️': 'warning',
    '❌': 'cross',
    '🙂': 'slight-smile',
   
    '😢': 'crying',
    '😂': 'laughing',
    '😀': 'grinning',
   
    '😅': 'sweat-smile',
    '😇': 'innocent',
    '😉': 'wink',
    '😍': 'love',
    '😘': 'kiss',
    '😴': 'sleeping',
    '😡': 'angry',
    '😈': 'devil',
    '👻': 'ghost',
    '💀': 'skull',
    '🤖': 'robot',
    '🐱': 'cat',
    '🐶': 'dog',
    '🐵': 'monkey',
    '🐸': 'frog',
    '🐧': 'penguin',
    '🐔': 'chicken',
    '🦄': 'unicorn',
    '🐢': 'turtle',
    '🐟': 'fish',
    '🐯': 'tiger',
    '🐲': 'dragon',
   
    '🍔': 'burger',
    '🍟': 'fries',
    '🍩': 'doughnut',
    '🍪': 'cookie',
    '🍦': 'ice-cream',
    '🍉': 'watermelon',
    '🍌': 'banana',
    '🍎': 'apple',
    '🍓': 'strawberry',
    '🍇': 'grapes',
    '🍊': 'orange',
    '🥑': 'avocado',
    '🥦': 'broccoli',
    '🍄': 'mushroom',
    '🌶️': 'pepper',
    '🌽': 'corn',
    '🌮': 'taco',
    '🌯': 'burrito',
    '🍣': 'sushi',
    '🍱': 'bento',
    '🍜': 'ramen',
    '🍛': 'curry',
    '🍚': 'rice',
    '🥚': 'egg',
    '🍞': 'bread',
    '🥖': 'baguette',
    '🥯': 'bagel',
    '🥞': 'pancake',
    '🧀': 'cheese',
    '🍖': 'meat',
    '🍗': 'chicken-leg',
    '🥩': 'cut-of-meat',
    '🍤': 'fried-shrimp',
   
    '🌭': 'hot-dog',
  
    '🥪': 'sandwich',
    '🥗': 'green-salad',
    '🥘': 'paella',
    '🍝': 'spaghetti',
    '🍠': 'sweet-potato',
    '🥟': 'dumpling',
  
    '🍨': 'ice-cream',
    '🍧': 'shaved-ice',
    '🎂': 'birthday-cake',
    '🍰': 'shortcake',
    '🧁': 'cupcake',
    '🥧': 'pie',
    '🍫': 'chocolate-bar',
    '🍬': 'candy',
    '🍭': 'lollipop',
    '🍮': 'custard',
    '🍯': 'honey',
    '🥛': 'milk',
    '☕': 'coffee',
    '🍵': 'tea',
    '🥤': 'cup-with-straw',
    '🍶': 'sake',
    '🍺': 'beer',
    '🍻': 'clinking-beers',
    '🍷': 'wine-glass',
    '🍸': 'cocktail',
    '🍹': 'tropical-drink',
    '🍾': 'bottle-with-pop',
    '🧊': 'ice-cube',
    '🥄': 'spoon',
    '🍴': 'fork-and-knife',
    '🍽️': 'plate',
   
    '🔪': 'hocho',
    '🫖': 'teapot',
    '🧂': 'salt',
    '🧃': 'juice',
    '🧋': 'bubble-tea',
    '🧉': 'mate',
   
  
    '🥃': 'whiskey',
    '🫗': 'pouring-liquid',
    '🍼': 'baby-bottle',
    '🫙': 'jar',
    '🧼': 'soap',
    '🧽': 'sponge',
    '🧯': 'fire-extinguisher',
    '🧨': 'firecracker',
    '💣': 'bomb',
    '💥': 'boom',
    '💫': 'sparkle',
    '💦': 'sweat',
    '💨': 'wind',
    '🕳️': 'hole',
    '💭': 'thought-balloon',
    '🗯️': 'right-anger-bubble',
    '💬': 'speech-balloon',
    '🗣️': 'speaking-head',
    '👥': 'busts-in-silhouette',
    '👤': 'bust-in-silhouette',
    '👣': 'footprints',
    '👶': 'baby',
    '👧': 'girl',
    '👦': 'boy',
    '👩': 'woman',
    '👨': 'man',
    '👵': 'old-woman',
    '👴': 'old-man',
    '🧑': 'person',
    '🧔': 'bearded-person',
    '🧓': 'older-person',
    '🧕': 'woman-with-headscarf',
    '👮': 'police-officer',
    '👷': 'construction-worker',
    '💂': 'guardsman',
    '🕵️': 'detective',
    '👩‍⚕️': 'female-doctor',
    '👨‍⚕️': 'male-doctor',
    '👩‍🏫': 'female-teacher',
    '👨‍🏫': 'male-teacher',
    '👩‍🎓': 'female-student',
    '👨‍🎓': 'male-student',
    '👩‍💻': 'female-technologist',
    '👨‍💻': 'male-technologist',
    '👩‍💼': 'female-office-worker',
    '👨‍💼': 'male-office-worker',
    '👩‍🔧': 'female-mechanic',
    '👨‍🔧': 'male-mechanic',
    '👩‍🔬': 'female-scientist',
    '👨‍🔬': 'male-scientist',
    '👩‍🎨': 'female-artist',
    '👨‍🎨': 'male-artist',
    '👩‍🚒': 'female-firefighter',
    '👨‍' : 'firefighter',
    '👩‍✈️': 'female-pilot',
    '👨‍✈️': 'male-pilot',
    '👩‍🚀': 'female-astronaut',
    '👨‍🚀': 'male-astronaut',
    '👩‍⚖️': 'female-judge',
    '👨‍⚖️': 'male-judge',
    '👰': 'bride',
    '🤵': 'groom',
    '👼': 'angel',
    '🎅': 'santa',
    '🤶': 'mother-christmas',
    '🦸': 'superhero',
    '🦹': 'supervillain',
    '🧙': 'mage',
    '🧚': 'fairy',
    '🧛': 'vampire',
    '🧜': 'merperson',
    '🧝': 'elf',
    '🧞': 'genie',
    '🧟': 'zombie',
    '💆': 'massage',
    '💇': 'haircut',
    '🚶': 'walking',
    '🏃': 'running',
    '💃': 'dancer',
    '🕺': 'man-dancing',
    '👯': 'group-dancers',
    '🧖': 'sauna-person',
    '🧘': 'lotus',
    '🛌': 'bed',
    '🛀': 'bath',
   
    '👭': 'two-women-holding-hands',
    '👬': 'two-men-holding-hands',
    '👫': 'couple',
    '💏': 'kiss',
    '💑': 'hearts',
    '👪': 'family',
    '👨‍👩‍👧': 'family',
    '👨‍👩‍👧‍👦': 'family',
    '👨‍👩‍👦‍👦': 'family',
    '👨‍👩‍👧‍👧': 'family',
    '👩‍👩‍👦': 'lesbian-family',
    '👩‍👩‍👧': 'lesbian-family',
    '👩‍👩‍👧‍👦': 'lesbian-family',
    '👩‍👩‍👦‍👦': 'lesbian-family',
    '👩‍👩‍👧‍👧': 'lesbian-family',
    '👨‍👨‍👦': 'gay-family',
    '👨‍👨‍👧': 'gay-family',
    '👨‍👨‍👧‍👦': 'gay-family',
    '👨‍👨‍👦‍👦': 'gay-family',
    '👨‍👨‍👧‍👧': 'gay-family',
    '👩‍👦': 'single-parent-family',
    '👩‍👧': 'single-parent-family',
    '👩‍👦‍👦': 'single-parent-family',
    '👩‍👧‍👦': 'single-parent-family',
    '👩‍👧‍👧': 'single-parent-family',
    '👨‍👦': 'single-parent-family',
    '👨‍👧': 'single-parent-family',
    '👨‍👦‍👦': 'single-parent-family',
    '👨‍👧‍👦': 'single-parent-family',
    '👨‍👧‍👧': 'single-parent-family',
  
    '🧑‍🤝‍🧑': 'holding-hands',
  
    '👯‍♂️': 'men-dancing',
    '👯‍♀️': 'women-dancing',
    '🧖‍♂️': 'man-in-steamy-room',
    '🧖‍♀️': 'woman-in-steamy-room',
    '🧘‍♂️': 'man-in-lotus-position',
    '🧘‍♀️': 'woman-in-lotus-position'
    
   };

  return emojiMap[emoji] || '';
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}