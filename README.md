## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
section, h1, p, button, src, div
1. **For each HTML element ask: Why do I need this?**
Section: To identify an area of information
h1: Heading for introducing myself
p: Writing out which city I live in/the pronouns I prefer to go by. Will likely use <span> in here to group elements for styling purposes
button: For "What's My Favorite Animal?"
div: make picture "hidden" until button is clicked and picture is revealed
src id: insert picture 
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
I will need to create button and div ID's. To make it come to life, i will need to grab DOM elements
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
When user clicks "What's my favorite animal" a picture will appear. I would like to toggle it so that if they clicked it again, the picture would disappear.
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
My plan is to build my HTML first, then add CSS in for the styling I want, and then finally layer Javascript onto that to make everything "work" (for lack of a better word)

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
