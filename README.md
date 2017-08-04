Makes tasty cookies.

## installation
```sh
yarn add cookie_toaster
```

## use
In your root component:
```js
import {CookieToaster} from 'cookie_toaster'
...
<CookieToaster />
...
```

To modify the css tou can use the following structure:
```scss
.cookie-toaster { // or cookie-toaster-modal, cookie-toaster-top
   // topmost div
  .cookie-container {
    // inner content
  }

  h1{
    //title
  }

  p{
    //text
  }

  button {
    // button css
  }
}
```

## components
- CookieToaster
- CookieToasterTop
- CookieToasterModal

## props
- title: String, title (duh)
- text: String, content
- btnAcceptText: String, button label
- btnDeclineText: String, button label
- accept: function, callback to handle accept
- decline: function, callback to handle decline
- popped: Boolean, set this property in your localstorage to track if cookie has been shown for the user

## roadmap
- add support for readme link