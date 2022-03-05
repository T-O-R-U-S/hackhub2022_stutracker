<script>
    let quotes = [
        "When you burn bridges, all you are left with is ash.",
        "Never stay in something just because you've invested too much in it.",
        "Do not start saying anything sarcastically. Eventually, you will end up saying it unironically, and will be unable to stop.",
        "A compromise is not always the best solution.",
        "If you forgot something, this is your chance to remember it.",
        "Ukraine > Russia",
        "Stay in school and don't do drugs; unless you are sick. In which case, you need to take medicinal drugs and stay out of school.",
        "To be stupid is not to lack knowledge or wisdom; it is to cause harm to both others and to yourself.",
        "The first step is always the hardest.",
        "Why spread malice and hate, when you can spread peace instead?",
        "You cannot peer into your own soul. You cannot see your own flaws. Only others can. Listen to them.",
        "Don't wait for motivation to come, just start already.",
        "Failure is expected. Do not let it stop you.",
        "To say that nothing is impossible is irresponsible. To say that nothing is possible is stupid.",
        "Sometimes you aren't being \"brutally honest\"; you're just being mean.",
    ];

    let quote;

    // This makes it cycle through quotes so that you never see the same
    // quote twice in a short period of time.
    if(typeof localStorage != 'undefined') {
        if(typeof localStorage.quoteIndex == 'undefined') {
            localStorage.quoteIndex = Math.floor(Math.random() * quotes.length);
        }

        quote = quotes[localStorage.quoteIndex++ % quotes.length];
    }
</script>

<h1 class="text-orange-500 font-light font-serif text-2xl text-center italic w-5/6 mx-auto">{quote ?? ""}</h1>