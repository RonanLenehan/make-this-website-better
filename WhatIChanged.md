# Make this website better - What I changed
If you're reading this, you'll want to know what I changed about this website to make it better.
Please find a breakdown of any major changes below. :)


# Make the site responsive
The first thing that I noticed is that the website isn't fully responsive (when opened with a mobile viewport, the content becomes somewhat unreadable).
There's many solutions for this, the easiest is adding a few media queries to change how the content is presented for the three most popular viewport types.
The viewports I chose were as follows; Mobile (0-768px), Tablet (769px-1024px), Desktop (1025px+)

# Centre align the logo, and add a hamburger menu for mobile and tablet devices
The navigation in the header breaks the viewport on mobile devices. The easiest and most recognisable solution to this is to add in a hamburger menu. I found a solution online and tweaked it extensivily until I was happy with the way it was formatted, however its not perfect! There are much nicer hamburger menus out there which are a little more time consuming to configure but are worth it in my opinion. 

# Fixed position navbar banner on mobile
This is a quality of life change that can help users feel less lost when scrolling through lengthy pages (in this case, a form that requires scrolling). Allowing the users access to the navigation at any stage in the process can be really helpful, as well as giving the user a comfortable sense of consistency (if the header is fixed on all pages).

# Increase input box and checkbox size
They're far too small for mobile users. The minimum tap size for mobile design is often debated to be 32x32px or more, but WCAG AA states that 24x24px is the minimum allowed: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html. However, this is the absolute minimum to hit WCAG AA compliance. I've opted to make them larger than this (height: 36px) as the form is not very long and I feel that the form boxes are a lot more accessible without making the page too long.

# Make the labels clickable to help checkbox selection
A easy accessibility based change would be to make the labels supporting checkboxes clickable. This can help users who struggle with their mobility by providing them with a larger clickable area, as well as being widely regarded as good UX.

# Readability changes
The smaller text on the hero section had a high enough contrast ratio so that it didn't break WCAG AA (https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=999999). However, I found it quite difficult to read and so lightened up the background slightly (https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=DDDDDD). This could go against a brand style guide, but in this case I felt it was necessary. Also, I made all of the form group labels bold so that you can easily read them compared to the content in the fields or the checkbox labels.

# Removing Etch hyperlink from hero banner, and making the logo clickable instead
The link in the hero section made me confused about the intended userflow. Users understand that if they click the logo at the top of the page, they will be returned to the homepage. So, also having a link to the homepage in the hero banner which is so close to the navbar was confusing to me and so I opted to remove it and make the logo clickable.

# Main CTA styling
For me, the language used in the main CTA was slightly ambiguous. Although it was fun, I didn't feel like it represented the action of actually submitting an application and therefore changed the text to match this action - "Submit Application". Also, I've changed the colour of the button to a darker green colour and made the text white and bold. This pair had a good enough colour contrast level as it is larger text (https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=008000). I chose green to represent you successfully filling in the form and ready to go (see honourable mentions 2 for more info on validation).


# Honourable mentions
If time and resource were not a factor, I would also like to implement:

1. Address autocomplete field, or seperate address fields (for autofill) - Having a single address field is bound to confuse people, especially with autocomplete fields being so popular. When I first saw the field, I felt like if I started typing in it, my address would be populated (which of course it doesn't). So, implementing something like this would be top priority: https://developers.google.com/maps/documentation/javascript/place-autocomplete

2. Validation - This form is lacking validation. Whatever is entered into the fields will be submitted regardless of how it's formatted. I've started this process by including a (very basic) date picker for the users date of birth but this should be extended for all of the fields (especially when it comes to not submitting symbols to prevent basic attacks like field tampering: https://www.techtarget.com/searchsecurity/definition/parameter-tampering). I'd also consider giving the "Submit Application" button a disabled style until all of the validation rules have been fulfilled.