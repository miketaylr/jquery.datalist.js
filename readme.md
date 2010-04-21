# HTML5 datalist plugin v.0.1
#### Copyright (c) 2010-The End of Time, Mike Taylor, http://miketaylr.com
#### MIT Licensed: http://www.opensource.org/licenses/mit-license.php

Enables cross-browser* html5 datalist for inputs, by first testing
for a native implementation before building one.

*No idea what this looks like in IE6. I don't care either.


## USAGE: 
`$('input[list]').datalist();`

    <input type="search" autofocus list="suggestions">
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