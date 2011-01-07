# HTML5 datalist plugin v.0.2
#### Copyright (c) 2010-The End of Time, Mike Taylor, http://miketaylr.com
#### MIT Licensed: http://www.opensource.org/licenses/mit-license.php

Enables cross-browser* html5 datalist for inputs, by first testing
for a native implementation before building one.

*No idea what this looks like in IE6. Fork it and add support!.
* Safari 5 lies about their support for datalist, so this is essentially busted. UA sniffing might be the only way around this...


## USAGE: 
`$('input[list]').datalist();`

    <input type="search" list="suggestions">
    <datalist id="suggestions">
      <!--[if !IE]><!-->
      <select><!--<![endif]-->
        <option label="DM" value="Depeche Mode">
        <option label="Moz" value="Morrissey">
        <option label="NO" value="New Order">
        <option label="TC" value="The Cure">
      <!--[if !IE]><!-->
      </select><!--<![endif]-->
    </datalist>
    
## Note:
In your css file, you should add the following:
    datalist {display:block;}