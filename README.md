## installation
```sh
yarn add cookie_toaster
```

## use
```js
import {CookieToaster} from 'cookie_toaster'
...
<CookieToaster />
...
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

- popped: Boolean, set this property in yoy localstorage to track if cookie has been shown